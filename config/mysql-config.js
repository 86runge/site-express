/**
 * 数据库连接--mysql
 * @type {{password: string, database: string, dialect: string, host: string, define: {timestamps: boolean, underscored: boolean, paranoid: boolean}, username: string}}
 */
module.exports = {
    username: 'root',
    password: 'root',
    database: 'site_node',
    host: "localhost",
    dialect: 'mysql',
    define: {
        underscored: false,
        timestamps: true,
        paranoid: true
    }
};
