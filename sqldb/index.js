var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize)
};

// content 模块
db.content_article = db.sequelize.import('../modal/content/content-article.js');
db.content_article_category = db.sequelize.import('../modal/content/content-article-category.js');
db.content_page = db.sequelize.import('../modal/content/content-page.js');
db.content_file = db.sequelize.import('../modal/content/content-file.js');
db.content_link = db.sequelize.import('../modal/content/content-link.js');
db.content_menu = db.sequelize.import('../modal/content/content-menu.js');
db.content_feedback = db.sequelize.import('../modal/content/content-feedback.js');
db.content_advert = db.sequelize.import('../modal/content/content-advert.js');
db.advert_detail = db.sequelize.import('../modal/content/content-advert-detail.js');

// system-settings 模块
db.sys_smtp_server = db.sequelize.import('../modal/system-settings/sys-smtp-server.js');
db.sys_skin_conf = db.sequelize.import('../modal/system-settings/sys-skin-conf.js');
db.site_setting = db.sequelize.import('../modal/system-settings/site-setting.js');
db.site_secure = db.sequelize.import('../modal/system-settings/site-secure.js');
db.site_content_setting = db.sequelize.import('../modal/system-settings/site-content-setting.js');
db.mall_setting = db.sequelize.import('../modal/system-settings/mall-setting.js');
db.oauth_setting = db.sequelize.import('../modal/system-settings/oauth-setting.js');
db.sys_custom_conf = db.sequelize.import('../modal/system-settings/sys-custom-conf.js');
db.number_regional = db.sequelize.import('../modal/system-settings/number-regional.js');
db.area_info = db.sequelize.import('../modal/system-settings/area-info.js');

// 用户模块
db.user = db.sequelize.import('../modal/user/user.js');
db.open_account = db.sequelize.import('../modal/user/open-account.js');
db.user_profile = db.sequelize.import('../modal/user/user-profile.js');
db.user_wechat_profile = db.sequelize.import('../modal/user/user-wechat-profile.js');
db.user_employee_profile = db.sequelize.import('../modal/user/user-employee-profile.js');
db.user_address = db.sequelize.import('../modal/user/user-address.js');
db.user_security_conf = db.sequelize.import('../modal/user/user-security-conf.js');
db.user_system_conf = db.sequelize.import('../modal/user/user-system-conf.js');
db.user_point = db.sequelize.import('../modal/user/user-point.js');
db.user_company_profile = db.sequelize.import('../modal/user/user-company-profile.js');
db.user_certified = db.sequelize.import('../modal/user/user-certified.js');
db.user_certificate = db.sequelize.import('../modal/user/user-certificate.js');
db.user_group_conf = db.sequelize.import('../modal/user/user-group-conf.js');
db.user_department_conf = db.sequelize.import('../modal/user/user-department-conf.js');
db.user_branch_conf = db.sequelize.import('../modal/user/user-branch-conf.js');
db.user_trade_conf = db.sequelize.import('../modal/user/user-trade-conf.js');
db.user_operate_log = db.sequelize.import('../modal/user/user-operate-log.js');
db.user_login_log = db.sequelize.import('../modal/user/user-login-log.js');
db.user_auth_group = db.sequelize.import('../modal/user/user-auth-group.js');
db.user_auth_department = db.sequelize.import('../modal/user/user-auth-department.js');
db.user_auth_rule = db.sequelize.import('../modal/user/user-auth-rule.js');
db.private_message = db.sequelize.import('../modal/user/private-message.js');
db.private_message_category = db.sequelize.import('../modal/user/private-message-category.js');
db.user_referral = db.sequelize.import('../modal/user/user-referral.js');
db.user_referral_category = db.sequelize.import('../modal/user/user-referral-category.js');
db.user_referral_detail = db.sequelize.import('../modal/user/user-referral-detail.js');
db.user_subscribe = db.sequelize.import('../modal/user/user-subscribe.js');

// 商品模块
db.product = db.sequelize.import('../modal/product/product.js');
db.product_description = db.sequelize.import('../modal/product/product-description.js');
db.product_statistics = db.sequelize.import('../modal/product/product-statistics.js');
db.product_purchase_sale = db.sequelize.import('../modal/product/product-purchase-sale.js');
db.product_category = db.sequelize.import('../modal/product/product-category.js');
db.product_attribute = db.sequelize.import('../modal/product/product-attribute.js');
db.product_and_attribute = db.sequelize.import('../modal/product/product-and-attribute.js');
db.product_brand = db.sequelize.import('../modal/product/product-brand.js');
db.product_and_specification = db.sequelize.import('../modal/product/product-and-specification.js');
db.product_specification = db.sequelize.import('../modal/product/product-specification.js');
db.product_comment = db.sequelize.import('../modal/product/product-comment.js');
db.product_log = db.sequelize.import('../modal/product/product-log.js');
db.product_album = db.sequelize.import('../modal/product/product-album.js');
db.product_promotion = db.sequelize.import('../modal/product/product-promotion.js');
db.product_and_promotion = db.sequelize.import('../modal/product/product-and-promotion.js');
db.product_coupon = db.sequelize.import('../modal/product/product-coupon.js');

// 订单模块
db.order = db.sequelize.import('../modal/order/order.js');
db.order_invoice = db.sequelize.import('../modal/order/order-invoice.js');
db.order_logistics = db.sequelize.import('../modal/order/order-logistics.js');
db.order_returns = db.sequelize.import('../modal/order/order-returns.js');
db.order_detail = db.sequelize.import('../modal/order/order-detail.js');
db.delivery_address = db.sequelize.import('../modal/order/delivery-address.js');
db.shopping_cart = db.sequelize.import('../modal/order/shopping-cart.js');
db.order_audit = db.sequelize.import('../modal/order/order-audit.js');
db.order_commission = db.sequelize.import('../modal/order/order-commission.js');
db.order_dispatch = db.sequelize.import('../modal/order/order-dispatch.js');

// finance 模块
db.finance_account = db.sequelize.import('../modal/finance/finance-account.js');
db.finance_bankcard = db.sequelize.import('../modal/finance/finance-bankcard.js');
db.finance_recharge = db.sequelize.import('../modal/finance/finance-recharge.js');
db.finance_withdraw = db.sequelize.import('../modal/finance/finance-withdraw.js');
db.finance_trade_detail = db.sequelize.import('../modal/finance/finance-trade-detail.js');
db.finance_virtual_trade = db.sequelize.import('../modal/finance/finance-virtual-trade.js');

module.exports = db;
