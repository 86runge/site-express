/**
 * 网站配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('site_setting', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.CHAR(50),
            comment: '站点标题'
        },
        slogan: {
            type: DataTypes.CHAR(50),
            comment: '站点标语'
        },
        company_name: {
            type: DataTypes.CHAR(100),
            comment: '公司名称'
        },
        app_name: {
            type: DataTypes.CHAR(50),
            comment: '应用程序名称'
        },
        app_version: {
            type: DataTypes.CHAR(50),
            comment: '应用程序版本'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '站点状态(1运营中,0关停)'
        },
        closed_announcement: {
            type: DataTypes.TEXT,
            comment: '站点维护公告'
        },
        logo_url: {
            type: DataTypes.CHAR(200),
            comment: '标志图片url'
        },
        homepage: {
            type: DataTypes.CHAR(100),
            comment: '主页地址'
        },
        foot_info: {
            type: DataTypes.CHAR(100),
            comment: '网站底部信息'
        },
        lang_list: {
            type: DataTypes.INTEGER,
            comment: '网站语言列表'
        },
        lang_current: {
            type: DataTypes.CHAR(100),
            defaultValue: 0,
            comment: '当前使用的语言'
        },
        lang_translate: {
            type: DataTypes.CHAR(100),
            comment: '网站翻译引擎'
        },
        meta_keywords: {
            type: DataTypes.TEXT,
            comment: '网站默认关键词'
        },
        meta_description: {
            type: DataTypes.TEXT,
            comment: '网站默认描述'
        },
        meta_tags: {
            type: DataTypes.CHAR(100),
            comment: '网站头部标签'
        },
        meta_charset: {
            type: DataTypes.CHAR(100),
            comment: '网站编码'
        }
    })
};
