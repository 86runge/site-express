/**
 * 发票模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_invoice', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        order_id: {
            type: DataTypes.UUID,
            comment: '订单id'
        },
        order_no: {
            type: DataTypes.CHAR(45),
            comment: '订单编号'
        },
        is_vat: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否增值税发票'
        },
        invoice_title: {
            type: DataTypes.CHAR(45),
            comment: '发票抬头名称'
        },
        invoice_content: {
            type: DataTypes.CHAR(45),
            comment: '发票抬头内容'
        },
        invoice_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '发票金额'
        },
        invoice_tax_no: {
            type: DataTypes.CHAR(45),
            comment: '发票税号'
        },
        invoice_tax: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '开票税金'
        },
        vat_company_name: {
            type: DataTypes.CHAR(45),
            comment: '公司名称'
        },
        vat_company_address: {
            type: DataTypes.CHAR(200),
            comment: '公司地址'
        },
        vat_telephone: {
            type: DataTypes.CHAR(45),
            comment: '联系电话'
        },
        vat_bank_name: {
            type: DataTypes.CHAR(100),
            comment: '开户银行'
        },
        vat_bank_account: {
            type: DataTypes.CHAR(45),
            comment: '银行帐号'
        },
        vat_created_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '开票时间'
        }
    })
};
