module.exports = function getId_no() {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];// 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];// 校验码
    var address = "420101"; // 住址
    var birthday = "19810101"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    return address + birthday + s + lastNumber;
};
