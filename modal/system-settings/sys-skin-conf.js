/**
 * 系统外观模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('sys_skin_conf', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.INTEGER,
            comment: '样式标题'
        },
        bg_color: {
            type: DataTypes.CHAR(45),
            comment: '背景颜色'
        },
        bg_image: {
            type: DataTypes.CHAR(200),
            comment: '背景图片'
        },
        font_family: {
            type: DataTypes.CHAR(45),
            comment: '字体名称'
        },
        font_size: {
            type: DataTypes.INTEGER,
            comment: '字体大小'
        },
        font_color: {
            type: DataTypes.CHAR(45),
            comment: '字体颜色'
        },
        hyper_link: {
            type: DataTypes.CHAR(45),
            comment: '超链接样式颜色'
        },
        hyper_link_hover: {
            type: DataTypes.CHAR(45),
            comment: '超链接hover、focus、touch颜色'
        },
        hyper_link_visit: {
            type: DataTypes.CHAR(45),
            comment: '超链接Visit颜色'
        },
        hyper_link_decoration: {
            type: DataTypes.CHAR(45),
            comment: '超链接文本修饰，是否有下划线'
        },
        hyper_link_hover_decoration: {
            type: DataTypes.CHAR(45),
            comment: '超链接hover、focus、touch文本修饰，是否有下划线'
        },
        hyper_link_visit_decoration: {
            type: DataTypes.CHAR(45),
            comment: '超链接Visit文本修饰，是否有下划线'
        },
        hyper_link_style: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '超链接文本样式，是否是斜体'
        },
        hyper_link_hover_style: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '超链接hover、focus、touch文本样式，是否是斜体'
        },
        hyper_link_visit_style: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '超链接Visit文本样式，是否是斜体'
        },
        line_color: {
            type: DataTypes.CHAR(45),
            comment: '线条颜色'
        },
        border_color: {
            type: DataTypes.CHAR(45),
            comment: '边框颜色'
        },
        table_bg_color: {
            type: DataTypes.CHAR(45),
            comment: '表格背景颜色'
        },
        table_hover_color: {
            type: DataTypes.CHAR(45),
            comment: '表格背景高亮颜色'
        },
        success_color: {
            type: DataTypes.CHAR(45),
            comment: '成功提示颜色'
        },
        error_color: {
            type: DataTypes.CHAR(45),
            comment: '错误提示颜色'
        }
    })
};
