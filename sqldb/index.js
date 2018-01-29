'use strict';

var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize)
};
db.User = db.sequelize.import('../modal/user.js');
db.Good = db.sequelize.import('../modal/good.js');
db.Obj = db.sequelize.import('../modal/obj.js');

module.exports = db;