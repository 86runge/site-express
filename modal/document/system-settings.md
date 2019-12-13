邮件服务器 (sys_smtp_server)
|-- 自动编号
|-- SMTP服务器地址 (host)
|-- 端口号 (port)
|-- SMTP帐号 (loginid)
|-- SMTP密码 (password)
|-- 是否启用SMTP认证 (smtp_auth, 启用;不启用)
|-- 是否加密 (secure, SSL/TLS)
|-- 发信邮箱 (from_address)
|-- 发信人 (from_name)
|-- 发送间隔时间 (send_inverval)
|-- 每日发信限额 (daily_count_max)
|-- 今日发信量 (today_count)
|-- 历史发信量 (total_count)
|-- 备注
|-- 排列次序 (第一为默认)
|-- 状态 (启用;停用;异常;超额)
|-- 创建时间
|-- 最后发送时间


系统外观表 (sys_skin_conf)
|-- 自动编号
|-- 样式标题 (base:基本样式;head:头部样式;foot:底部样式)
|-- 背景颜色 (bgcolor)
|-- 背景图片 (bgimage)
|-- 背景图片重复方式 (bgimagerepeat)
|-- 字体名称 (fontfamily)
|-- 字体大小 (fontsize)
|-- 字体颜色 (fontcolor)
|-- 普通链接颜色 (hyperlinkcolor)
|-- 超链接文本修饰 (hyperlinktextdecoration,none:默认;underline:下划线;overline:上划线;line-through:删除线)
|-- 超链接文本样式 (hyperlinkfontstyle,normal:普通;italic:斜体)
|-- 超链接Hover颜色 (hyperlinkcolor_hover)
|-- 超链接Hover文本修饰 (hyperlinktextdecoration_hover,none:默认;underline:下划线;overline:上划线;line-through:删除线)
|-- 超链接Hover文本样式 (hyperlinkfontstyle_hover,normal:普通;italic:斜体)
|-- 超链接Visit颜色 (hyperlinkcolor_visit)
|-- 超链接Visit文本修饰 (hyperlinktextdecoration_visit,none:默认;underline:下划线;overline:上划线;line-through:删除线)
|-- 超链接Visit文本样式 (hyperlinkfontstyle_visit,normal:普通;italic:斜体)
|-- 元素高度 (height)


网站配置表 (site_setting)
|-- 自动编号 (site_id)
|-- 站点标题 (title)
|-- 站点标语 （slogan)
|-- 公司名称 (company_name)
|-- 应用程序名称 (appname, 英文)
|-- 应用程序版本 (appversion)
|-- 站点状态 (status, 运营中,关停)
|-- 站点维护公告 (closed_announcement)
|-- 标志图片url (logo_url)
|-- 主页地址 (homepage)
|-- 网站底部信息 (footinfo, 包含ICP备案号等)
|-- 网站语言列表 (lang_list, zh-CN, zh-TW, en-US)
|-- 当前使用的语言 (lang_current, zh-CN)
|-- 网站翻译引擎 (lang_translater)
|-- 网站默认关键词 (meta_keywords, 网页关键词(关键词以空格隔开，最好10个以下，搜索引擎将忽略过多的关键词))
|-- 网站默认描述 (meta_description, 网页简短描述(140-200个字符或者100个左右的汉字))
|-- 网站头部标签 (meta_tags, 在head区域放置更多的meta标签)
|-- 网站编码 (meta_charset)


网站安全配置表 (site_secure)
|-- 自动编号
|-- 加密密匙 (encrypt_key)
|-- 会话数据前缀 (session_prefix)
|-- 是否允许注册 (allow_regist)
|-- 数据库备份根目录 (backup_root)
|-- 是否开启验证码 (captcha_status)
|-- 管理员邮箱
|-- 管理员手机号

 

网站内容配置表 (site_content_setting)
|-- 网站编号
|-- 是否开启草稿功能 (draftbox_status)
|-- 自动保存草稿时间间隔 (draft_autosave_interval)
|-- 列表分页每页记录数量 (list_rows)
|-- 回复列表每页记录数量 (reply_list_rows)


商城配置表 (mall_setting)
|-- 商店编号
|-- 是否显示价格 (show_price)
|-- 是否显示真实价格 (show_real_price)
|-- 价格提示 (alt_price, 如：价格面议、询价电话:xxxx等)


开放登录配置表 (oauth_setting)
|-- 自动编号
|-- 名称 (name, QQ/WEIBO/WECHAT/GOOGLE/LINKIN等)
|-- 应用ID (client_id, AppID/AppKey)
|-- 应用密码 (client_secret, AppSecret)
|-- 网站验证 (verification)
|-- 回调地址 (callback_url)
|-- 网页组件 (widget)
|-- 自动登录 (autologin)
|-- 排列次序 (sort)
|-- 状态 (status)
|-- 创建时间 (created_time)


系统自定义配置表 (sys_custom_conf)
|-- 自动编号
|-- 用户编号
|-- 配置标题 (conf_title)
|-- 配置名称 (conf_name, 英文唯一值)
|-- 配置类型 (conf_datatype, char,number,text,array,enum)
|-- 配置分组 (conf_group, base:基础;content:内容;user:用户;system:系统)
|-- 配置归属 (conf_prop, orgin:预置;custom:自定义)
|-- 配置内容 (conf_content, 存储小量数据)
|-- 配置大内容 (conf_large_content, 存储大量数据)
|-- 配置说明 (conf_remark)
|-- 排列次序
|-- 状态
|-- 创建时间


号码归属地表 (number_regional)
|-- 自动编号
|-- 地区名称 (area)
|-- 号段长度 (segment_number_length)
|-- 号段 (segment_number, 号码前段部分)
|-- 号码前3位 (segment_number_len3)
|-- 号码长度 (number_length)


省市区表 (area)
|-- 自动编号
|-- 地区名称 (area)
|-- 地区代码 (area_code, 6位)
|-- 省份编号 (province_id, 2位)
|-- 城市编号 (city_id, 2位)
|-- 区县编号 (area_id, 2位)
|-- 级数 (level, 1:省;2:市:3:区/县)
|-- 邮政编码 (zip)

 
