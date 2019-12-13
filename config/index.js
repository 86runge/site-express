/**
 * 数据库连接--mysql
 * @type {{sequelize: {password: string, database: string, dialect: string, host: string,
 * define: {timestamps: boolean, underscored: boolean, paranoid: boolean}, username: string}}}
 */
module.exports = {
    sequelize: {
        username: 'root',
        password: 'root',
        database: 'site_data',
        host: "localhost",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};
