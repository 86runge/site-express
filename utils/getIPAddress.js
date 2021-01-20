const os = require('os');

/**
 * 获取本机ip
 * @returns {string}
 */

module.exports = function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        const ipFace = interfaces[devName];
        for (let i = 0; i < ipFace.length; i++) {
            const alias = ipFace[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};
