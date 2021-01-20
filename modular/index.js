/**
 * 初始化数据库
 */

const { Sequelize, DataTypes } = require('sequelize');

const config = require('../config/mysql-config');

const sequelizeDb = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});

// content 文本模块
sequelizeDb.content_article = require('../modal/content/content-article.js')(sequelizeDb, DataTypes);
sequelizeDb.content_article_category = require('../modal/content/content-article-category.js')(sequelizeDb, DataTypes);
sequelizeDb.content_page = require('../modal/content/content-page.js')(sequelizeDb, DataTypes);
sequelizeDb.content_file = require('../modal/content/content-file.js')(sequelizeDb, DataTypes);
sequelizeDb.content_link = require('../modal/content/content-link.js')(sequelizeDb, DataTypes);
sequelizeDb.content_menu = require('../modal/content/content-menu.js')(sequelizeDb, DataTypes);
sequelizeDb.content_feesequelizeDback = require('../modal/content/content-feedback.js')(sequelizeDb, DataTypes);
sequelizeDb.content_advert = require('../modal/content/content-advert.js')(sequelizeDb, DataTypes);
sequelizeDb.advert_detail = require('../modal/content/content-advert-detail.js')(sequelizeDb, DataTypes);

// system-settings 系统设置模块
sequelizeDb.sys_smtp_server = require('../modal/system-settings/sys-smtp-server.js')(sequelizeDb, DataTypes);
sequelizeDb.sys_skin_conf = require('../modal/system-settings/sys-skin-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.site_setting = require('../modal/system-settings/site-setting.js')(sequelizeDb, DataTypes);
sequelizeDb.site_secure = require('../modal/system-settings/site-secure.js')(sequelizeDb, DataTypes);
sequelizeDb.site_content_setting = require('../modal/system-settings/site-content-setting.js')(sequelizeDb, DataTypes);
sequelizeDb.mall_setting = require('../modal/system-settings/mall-setting.js')(sequelizeDb, DataTypes);
sequelizeDb.oauth_setting = require('../modal/system-settings/oauth-setting.js')(sequelizeDb, DataTypes);
sequelizeDb.sys_custom_conf = require('../modal/system-settings/sys-custom-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.number_regional = require('../modal/system-settings/number-regional.js')(sequelizeDb, DataTypes);
sequelizeDb.area_info = require('../modal/system-settings/area-info.js')(sequelizeDb, DataTypes);

// user 用户模块
sequelizeDb.user = require('../modal/user/user.js')(sequelizeDb, DataTypes);
sequelizeDb.open_account = require('../modal/user/open-account.js')(sequelizeDb, DataTypes);
sequelizeDb.user_profile = require('../modal/user/user-profile.js')(sequelizeDb, DataTypes);
sequelizeDb.user_wechat_profile = require('../modal/user/user-wechat-profile.js')(sequelizeDb, DataTypes);
sequelizeDb.user_employee_profile = require('../modal/user/user-employee-profile.js')(sequelizeDb, DataTypes);
sequelizeDb.user_address = require('../modal/user/user-address.js')(sequelizeDb, DataTypes);
sequelizeDb.user_security_conf = require('../modal/user/user-security-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_system_conf = require('../modal/user/user-system-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_point = require('../modal/user/user-point.js')(sequelizeDb, DataTypes);
sequelizeDb.user_company_profile = require('../modal/user/user-company-profile.js')(sequelizeDb, DataTypes);
sequelizeDb.user_certified = require('../modal/user/user-certified.js')(sequelizeDb, DataTypes);
sequelizeDb.user_certificate = require('../modal/user/user-certificate.js')(sequelizeDb, DataTypes);
sequelizeDb.user_group_conf = require('../modal/user/user-group-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_department_conf = require('../modal/user/user-department-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_branch_conf = require('../modal/user/user-branch-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_trade_conf = require('../modal/user/user-trade-conf.js')(sequelizeDb, DataTypes);
sequelizeDb.user_operate_log = require('../modal/user/user-operate-log.js')(sequelizeDb, DataTypes);
sequelizeDb.user_login_log = require('../modal/user/user-login-log.js')(sequelizeDb, DataTypes);
sequelizeDb.user_staff = require('../modal/user/user-staff.js')(sequelizeDb, DataTypes);
sequelizeDb.user_auth_group = require('../modal/user/user-auth-group.js')(sequelizeDb, DataTypes);
sequelizeDb.user_auth_department = require('../modal/user/user-auth-department.js')(sequelizeDb, DataTypes);
sequelizeDb.user_auth_rule = require('../modal/user/user-auth-rule.js')(sequelizeDb, DataTypes);
sequelizeDb.private_message = require('../modal/user/private-message.js')(sequelizeDb, DataTypes);
sequelizeDb.private_message_category = require('../modal/user/private-message-category.js')(sequelizeDb, DataTypes);
sequelizeDb.user_referral = require('../modal/user/user-referral.js')(sequelizeDb, DataTypes);
sequelizeDb.user_referral_category = require('../modal/user/user-referral-category.js')(sequelizeDb, DataTypes);
sequelizeDb.user_referral_detail = require('../modal/user/user-referral-detail.js')(sequelizeDb, DataTypes);
sequelizeDb.user_subscribe = require('../modal/user/user-subscribe.js')(sequelizeDb, DataTypes);

// product 商品模块
sequelizeDb.product = require('../modal/product/product.js')(sequelizeDb, DataTypes);
sequelizeDb.product_description = require('../modal/product/product-description.js')(sequelizeDb, DataTypes);
sequelizeDb.product_statistics = require('../modal/product/product-statistics.js')(sequelizeDb, DataTypes);
sequelizeDb.product_purchase_sale = require('../modal/product/product-purchase-sale.js')(sequelizeDb, DataTypes);
sequelizeDb.product_category = require('../modal/product/product-category.js')(sequelizeDb, DataTypes);
sequelizeDb.product_attribute = require('../modal/product/product-attribute.js')(sequelizeDb, DataTypes);
sequelizeDb.product_and_attribute = require('../modal/product/product-and-attribute.js')(sequelizeDb, DataTypes);
sequelizeDb.product_brand = require('../modal/product/product-brand.js')(sequelizeDb, DataTypes);
sequelizeDb.product_and_specification = require('../modal/product/product-and-specification.js')(sequelizeDb, DataTypes);
sequelizeDb.product_specification = require('../modal/product/product-specification.js')(sequelizeDb, DataTypes);
sequelizeDb.product_comment = require('../modal/product/product-comment.js')(sequelizeDb, DataTypes);
sequelizeDb.product_log = require('../modal/product/product-log.js')(sequelizeDb, DataTypes);
sequelizeDb.product_album = require('../modal/product/product-album.js')(sequelizeDb, DataTypes);
sequelizeDb.product_promotion = require('../modal/product/product-promotion.js')(sequelizeDb, DataTypes);
sequelizeDb.product_and_promotion = require('../modal/product/product-and-promotion.js')(sequelizeDb, DataTypes);
sequelizeDb.product_coupon = require('../modal/product/product-coupon.js')(sequelizeDb, DataTypes);

// order 订单模块
sequelizeDb.order = require('../modal/order/order.js')(sequelizeDb, DataTypes);
sequelizeDb.order_invoice = require('../modal/order/order-invoice.js')(sequelizeDb, DataTypes);
sequelizeDb.order_logistics = require('../modal/order/order-logistics.js')(sequelizeDb, DataTypes);
sequelizeDb.order_returns = require('../modal/order/order-returns.js')(sequelizeDb, DataTypes);
sequelizeDb.order_detail = require('../modal/order/order-detail.js')(sequelizeDb, DataTypes);
sequelizeDb.delivery_address = require('../modal/order/delivery-address.js')(sequelizeDb, DataTypes);
sequelizeDb.shopping_cart = require('../modal/order/shopping-cart.js')(sequelizeDb, DataTypes);
sequelizeDb.order_audit = require('../modal/order/order-audit.js')(sequelizeDb, DataTypes);
sequelizeDb.order_commission = require('../modal/order/order-commission.js')(sequelizeDb, DataTypes);
sequelizeDb.order_dispatch = require('../modal/order/order-dispatch.js')(sequelizeDb, DataTypes);

// finance 模块
sequelizeDb.finance_account = require('../modal/finance/finance-account.js')(sequelizeDb, DataTypes);
sequelizeDb.finance_bankcard = require('../modal/finance/finance-bankcard.js')(sequelizeDb, DataTypes);
sequelizeDb.finance_recharge = require('../modal/finance/finance-recharge.js')(sequelizeDb, DataTypes);
sequelizeDb.finance_withdraw = require('../modal/finance/finance-withdraw.js')(sequelizeDb, DataTypes);
sequelizeDb.finance_trade_detail = require('../modal/finance/finance-trade-detail.js')(sequelizeDb, DataTypes);
sequelizeDb.finance_virtual_trade = require('../modal/finance/finance-virtual-trade.js')(sequelizeDb, DataTypes);

module.exports = sequelizeDb;
