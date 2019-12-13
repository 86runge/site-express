// 订单支付渠道
const pay_channel = {
    0: 'alipay',
    1: 'weixin',
    2: 'unionpay_card'
};

// 订单来源
const order_source = {
    0: '',
    1: ''
};

// 订单状态
// 0:未审核或发起交易;1:交易完成;20:核单通过;24:核单失败;30:已发货;未签收;34:仓库退回;40:座席取消;41:买家取消;42:逾期取消;43:订单无效取消;50:客户签收;54:客户拒签;55:客户退货
const order_status = {
    0: 'to_be_paid',
    1: 'paid'
};

// 结算状态
const settlement_status = {
    0: 'unsettled',
    1: 'settled'
};

// 物流方式
const logistics_type = {
    0: 'unsettled',
    1: 'settled'
};

// 物流状态
const order_logistics_status = {
    0: 'unsettled',
    1: 'settled'
};

// 物流结算状态
const logistics_settlement_status = {
    0: 'unsettled',
    1: 'settled'
};

// 退货类型
const returns_type = {
    0: 'unsettled',
    1: 'settled'
};

// 退货处理方式
const returns_handling_way = {
    0: 'unsettled',
    1: 'settled'
};

// 退货原因
const returns_reason = {
    0: 'unsettled',
    1: 'settled'
};


