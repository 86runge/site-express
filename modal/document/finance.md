资金账户表 (finance_account)
|-- 自动编号
|-- 用户编号
|-- 预付款 (advance)
|-- 冻结预付款 (advance_frozen)
|-- 可用余额 (balance)
|-- 冻结余额 (balance_frozen)
|-- 状态 (status, 冻结,正常)
|-- 创建时间
|-- 更新时间


银行卡表 (bankcard)
|-- 自动编号
|-- 用户编号
|-- 银行开户支行名称 (bank_name)
|-- 银行卡卡号 (bank_card_no)
|-- 银行卡持卡人姓名 (bank_card_holder)
|-- 使用次数 (usage_count, 用作自动排序的依据)
|-- 排列次序 (sort)
|-- 状态
|-- 创建时间


充值表 (finance_recharge)
|-- 自动编号
|-- 用户编号
|-- 充值类型 (recharge_type, 账户充值,返利等)
|-- 充值流水号 (serial_no)
|-- 充值金额 (amount)
|-- 充值类型 (recharge_type, 现金,转账,在线支付)
|-- 支付渠道 (pay_channel, trade.alipay.native:支付宝、trade.weixin.jspay:微信公众号支付、trade.weixin.native:微信扫码支付、trade.bankpay.native:网银)
|-- 支付渠道单号 (out_trade_no, 第三方渠道交易单号)
|-- 开户支行编号
|-- 银行名称
|-- 卡号
|-- 持卡人姓名
|-- 充值备注 (submit_remark)
|-- 审核员用户编号 (auditor_id)
|-- 审核时间 (audit_time)
|-- 审核备注 (audit_remark)
|-- 充值参数 (recharge_params, JSON格式)
|-- 状态
|-- 创建时间
|-- 更新时间
|-- syscode


提现表 (finance_withdraw)
|-- 自动编号
|-- 用户编号
|-- 流水号
|-- 提现金额
|-- 手续费 (commission)
|-- 提现申请备注 (remark_submit)
|-- 提现审核备注 (remark_audit)
|-- 银行支行名称 (bank_name)
|-- 银行卡卡号 (card_no)
|-- 持卡人姓名 (holder)
|-- 支付渠道 (pay_channel)
|-- 支付渠道单号 (out_trade_no)
|-- 提现参数 (withdraw_params, JSON格式)
|-- 状态
|-- 创建时间
|-- 审核时间


交易明细表 (finance_trade_detail)
|-- 自动编号
|-- 账户资金表编号 (account_id)
|-- 用户编号 (user_id)
|-- 审核员编号 (auditor_id)
|-- 交易流水号 (serial_no)
|-- 交易类型 (trade_type, 1:充值,2:返现;3:提现;)
|-- 支付渠道 (pay_channel, trade.alipay.native:支付宝、trade.weixin.jspay:微信公众号支付、trade.weixin.native:微信扫码支付、trade.bankpay.native:网银)
|-- 支付渠道单号 (out_trade_no, 第三方渠道交易单号,交易单号建议加表示业务来源和业务类型的前缀,如wxpnrechg...表示微信公众号充值,wxmabuy...表示微信小程序购买,wapalipaybuy...表示手机端支付宝购买)
|-- 交易金额 (amount)
|-- 交易币种 (currency)
|-- 交易申请备注 (remark_submit)
|-- 交易审核备注 (remark_audit)
|-- 交易参数 (trade_params, JSON格式)
|-- 状态
|-- 创建时间
|-- 审核时间


虚拟货币交易转换明细表 (finance_virtual_currency_trade_detail)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 审核员编号 (auditor_id)
|-- 交易流水号 (serial_no)
|-- 交易类型 (trade_type, 1:赠送;2:领取;3:转换)
|-- 转换类型 (transform_type, 1:钻石;2:房卡;3:金币;4:道具)
|-- 消耗数量 (consume_number）
|-- 转换数量 (transform_number)
|-- 交易申请备注 (remark_submit)
|-- 交易审核备注 (remark_audit)
|-- 交易参数 (trade_params, JSON格式)
|-- 状态
|-- 创建时间
|-- 审核时间
