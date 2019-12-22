var config = require('../config');
var Sequelize = require('sequelize');
var modular = {
    sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize)
};

// content 文本模块
modular.content_article = modular.sequelize.import('../modal/content/content-article.js');
modular.content_article_category = modular.sequelize.import('../modal/content/content-article-category.js');
modular.content_page = modular.sequelize.import('../modal/content/content-page.js');
modular.content_file = modular.sequelize.import('../modal/content/content-file.js');
modular.content_link = modular.sequelize.import('../modal/content/content-link.js');
modular.content_menu = modular.sequelize.import('../modal/content/content-menu.js');
modular.content_feemodularack = modular.sequelize.import('../modal/content/content-feedback.js');
modular.content_advert = modular.sequelize.import('../modal/content/content-advert.js');
modular.advert_detail = modular.sequelize.import('../modal/content/content-advert-detail.js');

// system-settings 系统设置模块
modular.sys_smtp_server = modular.sequelize.import('../modal/system-settings/sys-smtp-server.js');
modular.sys_skin_conf = modular.sequelize.import('../modal/system-settings/sys-skin-conf.js');
modular.site_setting = modular.sequelize.import('../modal/system-settings/site-setting.js');
modular.site_secure = modular.sequelize.import('../modal/system-settings/site-secure.js');
modular.site_content_setting = modular.sequelize.import('../modal/system-settings/site-content-setting.js');
modular.mall_setting = modular.sequelize.import('../modal/system-settings/mall-setting.js');
modular.oauth_setting = modular.sequelize.import('../modal/system-settings/oauth-setting.js');
modular.sys_custom_conf = modular.sequelize.import('../modal/system-settings/sys-custom-conf.js');
modular.number_regional = modular.sequelize.import('../modal/system-settings/number-regional.js');
modular.area_info = modular.sequelize.import('../modal/system-settings/area-info.js');

// user 用户模块
modular.user = modular.sequelize.import('../modal/user/user.js');
modular.open_account = modular.sequelize.import('../modal/user/open-account.js');
modular.user_profile = modular.sequelize.import('../modal/user/user-profile.js');
modular.user_wechat_profile = modular.sequelize.import('../modal/user/user-wechat-profile.js');
modular.user_employee_profile = modular.sequelize.import('../modal/user/user-employee-profile.js');
modular.user_address = modular.sequelize.import('../modal/user/user-address.js');
modular.user_security_conf = modular.sequelize.import('../modal/user/user-security-conf.js');
modular.user_system_conf = modular.sequelize.import('../modal/user/user-system-conf.js');
modular.user_point = modular.sequelize.import('../modal/user/user-point.js');
modular.user_company_profile = modular.sequelize.import('../modal/user/user-company-profile.js');
modular.user_certified = modular.sequelize.import('../modal/user/user-certified.js');
modular.user_certificate = modular.sequelize.import('../modal/user/user-certificate.js');
modular.user_group_conf = modular.sequelize.import('../modal/user/user-group-conf.js');
modular.user_department_conf = modular.sequelize.import('../modal/user/user-department-conf.js');
modular.user_branch_conf = modular.sequelize.import('../modal/user/user-branch-conf.js');
modular.user_trade_conf = modular.sequelize.import('../modal/user/user-trade-conf.js');
modular.user_operate_log = modular.sequelize.import('../modal/user/user-operate-log.js');
modular.user_login_log = modular.sequelize.import('../modal/user/user-login-log.js');
modular.user_auth_group = modular.sequelize.import('../modal/user/user-auth-group.js');
modular.user_auth_department = modular.sequelize.import('../modal/user/user-auth-department.js');
modular.user_auth_rule = modular.sequelize.import('../modal/user/user-auth-rule.js');
modular.private_message = modular.sequelize.import('../modal/user/private-message.js');
modular.private_message_category = modular.sequelize.import('../modal/user/private-message-category.js');
modular.user_referral = modular.sequelize.import('../modal/user/user-referral.js');
modular.user_referral_category = modular.sequelize.import('../modal/user/user-referral-category.js');
modular.user_referral_detail = modular.sequelize.import('../modal/user/user-referral-detail.js');
modular.user_subscribe = modular.sequelize.import('../modal/user/user-subscribe.js');

// product 商品模块
modular.product = modular.sequelize.import('../modal/product/product.js');
modular.product_description = modular.sequelize.import('../modal/product/product-description.js');
modular.product_statistics = modular.sequelize.import('../modal/product/product-statistics.js');
modular.product_purchase_sale = modular.sequelize.import('../modal/product/product-purchase-sale.js');
modular.product_category = modular.sequelize.import('../modal/product/product-category.js');
modular.product_attribute = modular.sequelize.import('../modal/product/product-attribute.js');
modular.product_and_attribute = modular.sequelize.import('../modal/product/product-and-attribute.js');
modular.product_brand = modular.sequelize.import('../modal/product/product-brand.js');
modular.product_and_specification = modular.sequelize.import('../modal/product/product-and-specification.js');
modular.product_specification = modular.sequelize.import('../modal/product/product-specification.js');
modular.product_comment = modular.sequelize.import('../modal/product/product-comment.js');
modular.product_log = modular.sequelize.import('../modal/product/product-log.js');
modular.product_album = modular.sequelize.import('../modal/product/product-album.js');
modular.product_promotion = modular.sequelize.import('../modal/product/product-promotion.js');
modular.product_and_promotion = modular.sequelize.import('../modal/product/product-and-promotion.js');
modular.product_coupon = modular.sequelize.import('../modal/product/product-coupon.js');

// order 订单模块
modular.order = modular.sequelize.import('../modal/order/order.js');
modular.order_invoice = modular.sequelize.import('../modal/order/order-invoice.js');
modular.order_logistics = modular.sequelize.import('../modal/order/order-logistics.js');
modular.order_returns = modular.sequelize.import('../modal/order/order-returns.js');
modular.order_detail = modular.sequelize.import('../modal/order/order-detail.js');
modular.delivery_address = modular.sequelize.import('../modal/order/delivery-address.js');
modular.shopping_cart = modular.sequelize.import('../modal/order/shopping-cart.js');
modular.order_audit = modular.sequelize.import('../modal/order/order-audit.js');
modular.order_commission = modular.sequelize.import('../modal/order/order-commission.js');
modular.order_dispatch = modular.sequelize.import('../modal/order/order-dispatch.js');

// finance 模块
modular.finance_account = modular.sequelize.import('../modal/finance/finance-account.js');
modular.finance_bankcard = modular.sequelize.import('../modal/finance/finance-bankcard.js');
modular.finance_recharge = modular.sequelize.import('../modal/finance/finance-recharge.js');
modular.finance_withdraw = modular.sequelize.import('../modal/finance/finance-withdraw.js');
modular.finance_trade_detail = modular.sequelize.import('../modal/finance/finance-trade-detail.js');
modular.finance_virtual_trade = modular.sequelize.import('../modal/finance/finance-virtual-trade.js');

module.exports = modular;
