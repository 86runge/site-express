用户基础表(user_base)
|-- 自动编号 (user_id)
|-- 用户名 (user_name)
|-- 手机号码
|-- 电子邮件
|-- 登录密码 (password)
|-- 用户状态 (status)

用户开放登录帐号表
|-- 自动编号
|-- 用户编号
|-- 腾讯QQ号码 (qq)
|-- 微信号码 (wechat)
|-- 淘宝帐号 (taobao)
|-- Skype (skype)
|-- 领英 (linkin)

用户资料表 (user_profile)
|-- 用户编号 (user_id)
|-- 真实姓名 (realname)
|-- 昵称 (nickname)
|-- 性别 (sex, 0:女;1:男)
|-- 用户等级 (user_level)
|-- 用户经验值 (experience)
|-- 个性签名 (personal_sign)
|-- 自定义头像 (personal_title)
|-- 头像Url (face_url)
|-- 婚姻状况 (marital_status)
|-- 出生日期 (birthday)
|-- 教育程度编号 (education_id, 关联教育程度表的自动编号)
|-- 注册IP (register_ip)
|-- 注册时间 (register_time)
|-- 登录IP (login_ip)
|-- 登录时间 (login_time)
|-- 登录次数 (login_count)
|-- 在线状态 (online_status)
|-- 在线总时长 (online_seconds)
|-- 未读短消息数量 (unreadmsg)

用户微信资料扩展表 (user_ext_wechat_profile)
|-- 用户编号
|-- 微信名 (nickname)
|-- 国家 (country)
|-- 省份 (province)
|-- 城市 (city)
|-- 地区 (area)
|-- 语言 (language, 用户使用的语言,zh-CN,zh-TW,en-US)
|-- 性别 (sex, 1:男;2:女;0:未知)
|-- 头像url (headimgurl)
|-- 是否订阅公众号 (subscribe)
|-- 公众号订阅时间 (subscribe_time)
|-- 开放平台唯一ID (unionid)
|-- 开放平台移动应用OpenID (openid_mobile)
|-- 开放平台网站应用OpenID (openid_web)
|-- 开放平台公众账号/小程序OpenID (openid_biz)
|-- 开放平台公众号第三方平台OpenID (openid_bizplugin)
|-- 分组ID (groupid)
|-- 用户标签 (tagid_list)
|-- 创建时间 (created_time, 关联时间)


用户企业员工资料扩展表 (user_ext_employee_profile)
|-- 自动编号
|-- 用户编号
|-- 考勤编号 (attendance_no)
|-- 职业 (vocation)
|-- 职务 (position)
|-- 头衔 (title)
|-- 分机号 (extension)
|-- 座机号 (telephone)

用户居住地址表 (user_address)
|-- 用户编号 (user_id)
|-- 国家 (country)
|-- 省份 (province)
|-- 城市 (city)
|-- 地区 (area)
|-- 街道详细地址 (street)

用户安全设置表 (user_security_conf)
|-- 自动编号
|-- 用户编号
|-- 密保问题1 (question1)
|-- 密保答案1 (answer1)
|-- 密保问题2
|-- 密保答案2
|-- 密保问题3
|-- 密保答案3
|-- 创建时间
|-- 修改时间


用户系统设置 (user_system_conf)
|-- 用户编号
|-- 外观主题 (theme)
|-- 语言编码 (lang, 国际化语言,简体中文，防踢中文,英文等)
|-- 列表分页尺寸 (list_page_size)

 

用户积分表 (user_point)
|-- 用户编号
|-- 用户积分 (point)
|-- 冻结积分 (point_frozen)
|-- 已消费积分 (point_consuming)


企业主资料表 (user_company_profile)
|-- 自动编号
|-- 用户编号
|-- 公司名称
|-- 公司类型 (company_type, 私营企业,股份制企业,国有企业,团体企业,外商投资企业等)
|-- 公司地址

用户证件资料表 (user_certified)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 证件类型 (cert_type, 身份证,学生证,工作证,士兵证,军官证,护照,手机号码,电子邮箱等)
|-- 证件号码 (cert_no)
|-- 证件过期时间 (cert_exp)
|-- 创建日期

用户身份认证资料表 (user_certificate)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 认证类型 (cert_type, 身份证,学生证,工作证,士兵证,军官证,护照,手机号码,电子邮箱等)
|-- 认证号码 (cert_no)
|-- 认证状态 (cert_status, 未认证,已认证,认证中)
|-- 认证验证码 (captcha)
|-- 认证验证码过期时间 (captcha_exp)
|-- 认证申请时间 (submit_time)
|-- 认证审核时间 (audit_time)
|-- 认证申请备注 (submit_remark)
|-- 认证审核备注 (audit_remark)
|-- 创建日期

用户角色(分组)配置表(user_group_conf)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 角色(分组)编号 (group_id)
|-- 状态 (status, 0:禁用;1:启用)
|-- 创建时间 (created_time)

用户部门配置表 (user_department_conf)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 部门编号 (department_id)
|-- 状态 (status, 0:禁用;1:启用)
|-- 创建时间

用户分机构配置表 (user_branch_conf)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 分机构编号 (branch_id)
|-- 状态 (status, 0:禁用;1:启用)
|-- 创建时间

用户交易配置表(user_trade_conf)
|-- 用户编号 (user_id)
|-- 交易密码 (trade_password)
|-- 操作密码 (operate_password)

用户操作日志表(user_operate_log)
|-- 自动编号
|-- 用户编号 (user_id)
|-- 操作描述 (operate_desc)
|-- 操作IP (operate_ip)
|-- 操作时间 (operate_time)
|-- 操作结果 (result_status)
|-- 操作参数 (operate_params)

登录日志表(user_login_log)
|-- 自定编号
|-- 登录帐号 (login_id)
|-- 是否登入 (is_login, 0:登出,1:登入)
|-- 操作结果 (result_status, 0:失败;1:成功)
|-- 登录IP (login_ip)
|-- 登录时间 (login_time)
|-- 登录参数 (login_params, 记录登录的额外参数,用于后期数据分析)
设计说明：登录地址可以通过关联IP地址表连表查询，登录地址不要写在日志中，防止表数据过于庞大，降低读取性能。

用户角色分组表 (user_auth_group)
|-- 自动编号
|-- 分组(角色)名称 (group_name)
|-- 分组代码 (group_code)
|-- 权限节点编号集 (group_rules)
|-- 图标路径
|-- 备注信息
|-- 排列次序
|-- 状态
|-- 创建时间

用户部门表 (user_auth_department)
|-- 自动编号
|-- 部门名称
|-- 部门代码
|-- 上级部门1编号
|-- 上级部门2编号
|-- 上级部门3编号
|-- 上级部门4编号
|-- 上级部门5编号
|-- 权限节点编号集 (department_rules)
|-- 排列次序
|-- 状态
|-- 创建时间


用户权限规则表 (user_auth_rule)
|-- 自动编号
|-- 规则名称
|-- 规则代码
|-- 上级规则1编号
|-- 上级规则2编号
|-- 上级规则3编号
|-- 上级规则4编号
|-- 上级规则5编号
|-- 规则类型 (模块,控制器,操作,菜单,文件,页面元素)
|-- 链接 (link_url)
|-- 规则条件 (condition)
|-- 排列次序
|-- 状态
|-- 创建时间


站内信表 (private_message)
|-- 自动编号
|-- 站内信分类编号 (category_id)
|-- 发件人 (from_user)
|-- 收件人 (to_user)
|-- 发件人别名 (from_alias)
|-- 消息标题 (subject)
|-- 消息内容 (body)
|-- 发送状态 (send_status, 未发送,草稿,发送成功,发送失败,正在发送)
|-- 阅读状态 (read_status, 已读,未读)
|-- 删除状态 (delete_status,已删除,未删除)
|-- 星级标注 (star)
|-- 阅读时间 (read_time)
|-- 创建时间 (create_time)
|-- 发送时间 (send_time)

站内信分类表 (private_message_category)
|-- 自动编号
|-- 用户编号
|-- 分类名称
|-- 分类代码 (inbox:收件箱;outbox:发件箱;drafts:草稿箱;binbox:垃圾箱)
|-- 排列次序
|-- 创建时间


用户推广表 (referral)
|-- 自动编号
|-- 用户编号
|-- 推广代码
|-- 推广类别编号
|-- 完成条件 (condition_value)
|-- 完成条件说明 (condition_desc)
|-- 访问量 (visit_count)
|-- 注册量 (register_count)
|-- 状态 (未开始;进行中;放弃)
|-- 创建时间

用户推广类别表 (referral_category)
|-- 自动编号
|-- 类别名称 (category_name)
|-- 类别代码 (category_code)
|-- 父1级编号
|-- 父2级编号
|-- 父3级编号
|-- 是否锁定 (is_lock,防止批量误删,锁定的话无法直接删除,需要先解锁才能删除)
|-- 备注信息 (remark)
|-- 状态
|-- 创建时间

用户推广明细表 (referral_detail)
|-- 自动编号
|-- 用户编号
|-- 上1级推广员用户编号 (referral1_uid)
|-- 上2级推广员用户编号 (referral2_uid)
|-- 注册日期 (regist_date)
|-- 注册时间 (regist_time)

 

用户订阅表 (user_subscribe)
|-- 自动编号
|-- 用户编号
|-- 邮件地址
|-- 订阅项目集 (subscribe)
|-- 状态 (订阅中,取消订阅)
|-- 创建时间
