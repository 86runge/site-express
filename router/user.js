const user = require('../server/user/user');
const userList = require('../server/user/user-list');
const staffList = require('../server/user/staff-list');
const roleList = require('../server/user/role-list');
const messageList = require('../server/user/message-list');

module.exports = [user, userList, staffList];
