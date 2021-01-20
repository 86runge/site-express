module.exports = function getMobile() {
    var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
    var index = parseInt(10 * Math.random());
    var prefix = prefixArray[index];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
};
