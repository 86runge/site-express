# Sequelize

### example:

```ecmascript 6
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {
}

User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, {sequelize, modelName: 'user'});

(async () => {
    await sequelize.sync();
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
    console.log(jane.toJSON());
})();
```

### 定义模型：

1. sequelize.define(modelName, attributes, options)
2. Extending Model and calling init(attributes, options)

### 编译模型

1. User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
2. User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
3. User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

### 删除数据库

```ecmascript 6
await User.drop();
console.log("User table dropped!");

await sequelize.drop();
console.log("All tables dropped!");
```

## 数据库操作

### 创建持久化实例

使用.build()创建的实例需要显式调用.save()存储到数据库中，而.create()可以忽略了这一要求，并在调用后自动存储实例的数据。

```ecmascript 6
Task.create({title: 'foo', description: 'bar', deadline: new Date()}).then(task => {
// you can now access the newly created task via the variable task
})
```

也可以定义可以通过create方法设置的属性。如果根据用户填写的表单创建数据库条目，这会非常方便。例如，使用该名称将允许你限制User模型，使其仅设置用户名和地址，而不设置admin标志：

```ecmascript 6
User.create({username: 'barfooz', isAdmin: true}, {fields: ['username']}).then(user => {
// let's assume the default of isAdmin is false:
    console.log(user.get({
        plain: true
    })) // => { username: 'barfooz', isAdmin: false }
})
```

### 更新 / 保存 / 持久化实例

对实例值进行修改，并将修改保存到数据库中。有两种方法可以实现：

```ecmascript 6
// way 1
task.title = 'a very different title now'
task.save().then(() => {
})

// way 2
task.update({
    title: 'a very different title now'
}).then(() => {
})
```

还可以通过传递一个列名数组来定义在调用save时应保存哪些属性。当你基于先前定义的对象设置属性时，这会很有用。例如。 你通过网络应用的形式获取对象的值。此外，它用于内部的update。它是这样的：

```ecmascript 6
task.title = 'foooo'
task.description = 'baaaaaar'
task.save({fields: ['title']}).then(() => {
// title will now be 'foooo' but description is the very same as before
})

// The equivalent call using update looks like this:
task.update({title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
// title will now be 'foooo' but description is the very same as before
})
```

当你调用save而不修改任何属性，该方法不会做任务操作。

### 销毁 / 删除 持久化实例

一旦创建对象并获取对其引用，就可以将其从数据库删除。删除操作通过调用destroy方法：

```ecmascript 6
Task.create({title: 'a task'}).then(task => {
// now you see me...
    return task.destroy();
}).then(() => {
// now i'm gone :)
})
```

如果设置paranoid选择为true，记录将不会被删除，而是将deletedAt列设置为当前时间戳。要强制删除，可以将force: true传给destroy方法：

```ecmascript 6
task.destroy({force: true})
```

当在paranoid模式下对对象软删除后，将不能再创建有相同主键的新对象，除非强制删除旧实例后。

恢复软删除的实例 将设置为paranoid: true的实例软删除后，如果要撤销删除，则使用restore方法：

```ecmascript 6
Task.create({title: 'a task'}).then(task => {
// now you see me...
    return task.destroy();
}).then((task) => {
// now i'm gone, but wait...
    return task.restore();
})
```

### 批量操作 (一次性创建、更新和销毁多行)

除了更新单个实例之外，还可以一次创建、更新和删除多个实例。这些函数为：

Model.bulkCreate Model.update Model.destroy
由于正在使用多个模型，所以回调将不会返回DAO实例。BulkCreate会返回模型实例/DAO的数组。但与create不同，它们没有autoIncrement属性的结果值。update和destroy会返回受影响的行数。

首先，我们看一个bulkCreate：

```ecmascript 6
User.bulkCreate([
    {username: 'barfooz', isAdmin: true},
    {username: 'foo', isAdmin: true},
    {username: 'bar', isAdmin: false}
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
    return User.findAll();
}).then(users => {
    console.log(users) // ... in order to get the array of user objects
})
```

## 查询

1. 属性

   仅查询部分属性（字段）时，可以通过attributes选项来指定。

2. Where

   无论你是使用findAll/find查询还是进行批量update/destroy，都可以传递where对象来过滤查询。 where通常会从attribute:
   value对中获取一个对象，其中value可以是相等匹配的原语或其他运算符的键对象。 也可以通过嵌套or和and操作符的集合来生成复杂的AND/OR条件。

3. 操作符（Operator）

```text
const Op = Sequelize.Op

[Op.and]: [{a: 5}, {b: 6}] // (a = 5) AND (b = 6)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
[Op.gte]: 6,               // >= 6
[Op.lt]: 10,               // < 10
[Op.lte]: 10,              // <= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.is]: null              // IS NULL
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
[Op.notLike]: '%hat'       // NOT LIKE '%hat'
[Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
[Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
[Op.startsWith]: 'hat'     // LIKE 'hat%'
[Op.endsWith]: 'hat'       // LIKE '%hat'
[Op.substring]: 'hat'      // LIKE '%hat%'
[Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
[Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
[Op.like]: { [Op.any]: ['cat', 'hat']}
                           // LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
[Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

[Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example
[Op.gt]: { [Op.all]: literal('SELECT 1') } // > ALL (SELECT 1)

// All the above equality and inequality operators plus the following:

[Op.contains]: 2           // @> '2'::integer (PG range contains element operator)
[Op.contains]: [1, 2]      // @> [1, 2) (PG range contains range operator)
[Op.contained]: [1, 2]     // <@ [1, 2) (PG range is contained by operator)
[Op.overlap]: [1, 2]       // && [1, 2) (PG range overlap (have points in common) operator)
[Op.adjacent]: [1, 2]      // -|- [1, 2) (PG range is adjacent to operator)
[Op.strictLeft]: [1, 2]    // << [1, 2) (PG range strictly left of operator)
[Op.strictRight]: [1, 2]   // >> [1, 2) (PG range strictly right of operator)
[Op.noExtendRight]: [1, 2] // &< [1, 2) (PG range does not extend to the right of operator)
[Op.noExtendLeft]: [1, 2]  // &> [1, 2) (PG range does not extend to the left of operator)
```

4. 分页/限制

```ecmascript 6
// Fetch 10 instances/rows
Project.findAll({limit: 10})

// Skip 8 instances/rows
Project.findAll({offset: 8})

// Skip 5 instances and fetch the 5 after that
Project.findAll({offset: 5, limit: 5})
```

5. 排序

   order通过数组或sequelize方法来对查询进行排序。通常，将需要使用属性、排序方向或仅排序方向的元组/数组，以确保能够正确转义。

```ecmascript 6
// ASC/DESC 正序/倒序
Subtask.findAll({
    order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['title', 'DESC'],

        // Will order by max(age)
        sequelize.fn('max', sequelize.col('age')),

        // Will order by max(age) DESC
        [sequelize.fn('max', sequelize.col('age')), 'DESC'],

        // Will order by  otherfunction(`col1`, 12, 'lalala') DESC
        [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],

        // Will order an associated model's created_at using the model name as the association's name.
        [Task, 'createdAt', 'DESC'],

        // Will order through an associated model's created_at using the model names as the associations' names.
        [Task, Project, 'createdAt', 'DESC'],

        // Will order by an associated model's created_at using the name of the association.
        ['Task', 'createdAt', 'DESC'],

        // Will order by a nested associated model's created_at using the names of the associations.
        ['Task', 'Project', 'createdAt', 'DESC'],

        // Will order by an associated model's created_at using an association object. (preferred method)
        [Subtask.associations.Task, 'createdAt', 'DESC'],

        // Will order by a nested associated model's created_at using association objects. (preferred method)
        [Subtask.associations.Task, Task.associations.Project, 'createdAt', 'DESC'],

        // Will order by an associated model's created_at using a simple association object.
        [{model: Task, as: 'Task'}, 'createdAt', 'DESC'],

        // Will order by a nested associated model's created_at simple association objects.
        [{model: Task, as: 'Task'}, {model: Project, as: 'Project'}, 'createdAt', 'DESC']
    ]

    // Will order by max age descending
    // order: sequelize.literal('max(age) DESC')

    // Will order by max age ascending assuming ascending is the default order when direction is omitted
    // order: sequelize.fn('max', sequelize.col('age'))

    // Will order by age ascending assuming ascending is the default order when direction is omitted
    // order: sequelize.col('age')

    // Will order randomly based on the dialect (instead of fn('RAND') or fn('RANDOM'))
    // order: sequelize.random()
})
```

##查询方法

find：搜索数据库中的一个特定元素，可以通过 findByPk 或 findOne；

findOrCreate：搜索特定元素或在不可用时创建它；

findAndCountAll：搜索数据库中的多个元素，返回数据和总数；

findAll：在数据库中搜索多个元素；

##其他

###事务
