/**
 * Created by Administrator on 2017/10/20 0020.
 */
(function( factory ) {
	if( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
    // 'use strict';



});

function CustVerifacate() {

    // 状态字典,字典的value只有true和false
    var statusDict = {};
    // 正则字典
    var regDict = {
        'date_reg': {
            'reg': /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
            'msg': '正确日期格式'
        },
        'phone_reg': {
            'reg': /^1[34578]\d{9}$/,
            'msg': '11位手机号'
        },
        'real_phone_reg': {
            'reg': /^1(3|4|5|7|8)\d{9}$/,
            'msg': '真实手机号',
        },
        'name_reg': {
            'reg': /^[a-zA-Z][a-zA-Z0-9_-]{0,30}$/,
            'msg': '英文或数字或_-,英文开头,长度为1到30位'
        },
        'id_no_reg': {
            'reg': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            'msg': '18位身份证号'
        },
        'tel_phone_reg': {
            'reg': /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
            'msg': '座机号'
        }
    };

    // 检查函数字典
    var checkFuncDict = {
        'nonempty': function (param) {
            if (param == undefined) {
                console.info('非空检查参数不完整，不进行检查！');
                return true;
            }
            var title = param['title'];
            var value = param['value'];
            if (value == undefined) {
                return true;
            }
            // 非空检查
            if (value == '') {
                faultMsg(title, title + '不能为空');
                return false;
            }
            return true;
        },
        'reg': function (param) {
            if (param == undefined) {
                console.info('正则检查参数不完整，不进行检查！');
                return true;
            }
            var title = param['title'];
            var value = param['value'];
            var reg = param['reg'];
            if (value == undefined) {
                console.info('检查对象不存在，不进行检查！');
                return true;
            }
            // 正则检查
            if (reg == undefined) {
                console.info('正则字典key不存在，不进行检查！');
                return true;
            }
            var reg_json = regDict[reg];
            if (reg_json == undefined) {
                console.info('正则不存在，不进行检查！');
                return true;
            }
            var status = reg_json['reg'].test(value);
            if (!status) {
                faultMsg(title, title + '不符合要求', reg_json['msg']);
            }
            return status;
        },
        'extend': function (param) {
            if (param == undefined) {
                console.info('扩展检查参数不完整，不进行检查！');
                return true;
            }
            var dealFunc = param['dealFunc'];
            if (dealFunc == undefined) {
                console.info('处理函数不存在，不进行检查！');
                return true;
            }
            var status = dealFunc(param);
            if (!!status) {
                return true;
            } else {
                return false;
            }
        }
    };

    // 错误提示
    var faultMsg = function (title, msg, reg_msg, time) {
        if (!title || !msg) {
            return false;
        }
        var topic = title + '检查提示';
        if (reg_msg) {
            msg = msg + '；' + title + '要求：' + reg_msg;
        }
        PT.light_msg(topic, msg, time || 1000);
    }

    // 检查多个值
    var batchCheck = function (area, paramArray) {
        if (!area) {
            console.info('被检查域状态不存在，不进行检查！');
            return;
        }
        if (paramArray == undefined) {
            console.info('检查数组不存在，不进行检查！');
            return true;
        }
        var checkJsonPipline = [];
        $.each(paramArray, function (index, value) {
            checkJsonPipline = value || [];
            checkPipeline(area, checkJsonPipline);
        })

    }

    // 检查单个值
    var checkPipeline = function (area, checkJsonPipline) {
        if (!area) {
            console.info('被检查域状态不存在，不进行检查！');
            return;
        }
        checkJsonPipline = checkJsonPipline || [];
        statusDict[area] = true;
        var checkJson = {
            'func': '',
            'param': {
                'title': '',
                'value': '',
                'reg': ''
            }
        };
        var func = '';
        var func_key = '';
        var param = '';
        for (var i = 0, len = checkJsonPipline.length; i < len; i++) {
            checkJson = checkJsonPipline[i];
            param = checkJson['param'];
            func_key = checkJson['func'];
            func = checkFuncDict[func_key];
            if (func == undefined) {
                continue;
            }

            if (statusDict[area]) {
                statusDict[area] = func(param);
            } else {
                break;
            }
        }

        return;
    }


    return {
        configReg: function (regKey, reg, regMsg) {
            console.info('更新正则');
            // 动态配置正则表达式
            if (!regKey || !reg) {
                return false;
            }
            regMsg = regMsg || '';
            regDict[regKey] = {
                'reg': reg,
                'msg': regMsg
            }
            return true;
        },
        newStatus: function (key) {
            // 创建新的检查状态
            if (!key || key == '') {
                return false;
            }
            if (statusDict[key]) {
                return false;
            } else {
                statusDict[key] = true;
                return true;
            }
        },
        setStatus: function (key, status) {
            // 设置检查状态
            if (!key || key == '') {
                return false;
            }
            if (statusDict[key]) {
                if (status) {
                    statusDict[key] = true;
                } else {
                    statusDict[key] = false;
                }
                return true;
            } else {
                return false;
            }
        },
        getStatus: function (key) {
            // 获取检查状态
            if (!key || key == '') {
                return false;
            }
            var status = statusDict[key];
            if (status == undefined) {
                return false;
            }
            statusDict[key] = true;
            return status;
        },
        checkQueue: function (area, paramArray) {
            // 批量检查
            batchCheck(area, paramArray);
        },
        check: function (area, checkJsonPipline) {
            // 单个检查
            checkPipeline(area, checkJsonPipline);
        },
        checkUserName: function (area, value, title) {
            title = title || '用户名';
            checkPipeline(area, [{
                'func': 'nonempty',
                'param': {
                    'title': title,
                    'value': value
                }
            }, {
                'func': 'reg',
                'param': {
                    'title': title,
                    'value': value,
                    'reg': 'name_reg'
                }
            }]);
        },
        checkName: function (area, value, title) {
            title = title || '姓名';
            checkPipeline(area, [{
                'func': 'nonempty',
                'param': {
                    'title': title,
                    'value': value
                }
            }]);
        },
        checkPhone: function (area, value, title) {
            title = title || '手机号';
            checkPipeline(area, [{
                'func': 'nonempty',
                'param': {
                    'title': title,
                    'value': value
                }
            }, {
                'func': 'reg',
                'param': {
                    'title': title,
                    'value': value,
                    'reg': 'phone_reg'
                }
            }]);
        },
        checkTelphone: function (area, value, title) {
            title = title || '电话号';
            checkPipeline(area, [{
                'func': 'nonempty',
                'param': {
                    'title': title,
                    'value': value
                }
            }, {
                'func': 'reg',
                'param': {
                    'title': title,
                    'value': value,
                    'reg': 'tel_phone_reg'
                }
            }]);
        },
        checkIdCard: function (area, value, title) {
            title = title || '身份证';
            checkPipeline(area, [{
                'func': 'nonempty',
                'param': {
                    'title': title,
                    'value': value
                }
            }, {
                'func': 'reg',
                'param': {
                    'title': title,
                    'value': value,
                    'reg': 'id_no_reg'
                }
            }]);
        },
        checkDate: function (area, value, title) {
            title = title || '日期';
            checkPipeline(area, [{
                'func': 'reg',
                'param': {
                    'title': title,
                    'value': value,
                    'reg': 'date_reg'
                }
            }]);
        }
    };
}


