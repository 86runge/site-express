文章表 (article)
|-- 自动编号
|-- 文章标题 (title)
|-- 文章类别编号 (category_id)
|-- 样式编号 (style_id)
|-- 摘要介绍 (summary)
|-- 作者 (author)
|-- 来源 (source)
|-- meta关键词 (meta_keywords)
|-- meta描述 (meta_description)
|-- 文档内容 (content)
|-- 图片路径 (image_url)
|-- 浏览次数 (visit_count)
|-- 回复次数 (reply_count)
|-- 用户名 (user_id)
|-- 文章标签 (content_tags)
|-- 访问权限 (access, 用于内部交流博客等)
|-- 是否分享 (is_share, 用于内部交流博客等)
|-- 排列次序 (sort)
|-- 状态
|-- 创建时间
|-- 更新时间


文章类别表 (article_category)
|-- 自动编号
|-- 类别名称 (name)
|-- 类别代码 (code)
|-- 父1级编号 (parent1_id)
|-- 父2级编号 (parent2_id)
|-- 父3级编号 (parent3_id)
|-- 父4级编号 (parent4_id)
|-- 父5级编号 (parent5_id)
|-- 包含文章数量 (article_count)
|-- 封面图片url (image_url)
|-- 链接地址 (link_url)
|-- 摘要介绍 (summary)
|-- 是否锁定 (is_lock, 防止误删除)
|-- 备注 (remark)
|-- 排列次序 (sort)
|-- 状态
|-- 创建时间


单页表 (page)
|-- 自动编号
|-- 类别编号 (category_id)
|-- 摘要简介 (summary)
|-- meta关键词
|-- meta描述
|-- 文档内容 (content)
|-- 图片路径 (image_url)
|-- 浏览次数 (visit_count)
|-- 回复次数 (reply_count)
|-- 用户评分 (star)
|-- 内容标签 (tags)
|-- 状态
|-- 创建时间


文件表 (file)
|-- 自动编号
|-- 类别编号 (category_id)
|-- 文件名称 (filename)
|-- 文件路径 (filepath)
|-- 文件大小 (filesize)
|-- 文件类型 (filetype)
|-- 文件后缀 (fileext)
|-- 浏览次数 (visit_count)
|-- 回复次数 (reply_count)
|-- 下载次数 (download_count)
|-- 封面图片 (image_url)
|-- 排列次序 (sort)
|-- 状态
|-- 创建时间


图片表 (picture)
|-- 自动编号
|-- 类别编号
|-- 标题
|-- 图片路径 (image_url)
|-- 图片大小 (image_size)
|-- 图片宽度 (image_width)
|-- 图片高度 (image_height)
|-- 图片简介 （summary)
|-- 浏览次数 (visit_count)
|-- 回复次数 (reply_count)
|-- 排列次序 (sort)
|-- 状态
|-- 创建时间


友情链接表 (link)
|-- 自动编号
|-- 链接标题 (title)
|-- 链接地址 (link_url)
|-- 链接类型 (link_type, 图片链接,文字链接)
|-- 图片地址 (image_url)
|-- 备注 (remark)
|-- 排列次序(sort)
|-- 状态
|-- 创建时间


网站菜单 (menu)
|-- 自动编号
|-- 菜单名称 (title)
|-- 菜单代号 (code)
|-- 父1级编号
|-- 父2级编号
|-- 父3级编号
|-- 父4级编号
|-- 父5级编号
|-- 图片url (image_url)
|-- 链接地址 (link_url)
|-- 打开目标 (open_target)
|-- 是否锁定 (is_lock, 防误删除)
|-- 状态
|-- 创建时间


留言反馈表 (feedback)
|-- 自动编号
|-- 类别编号 (category_id)
|-- 流水号 (serial_no)
|-- 标题 (subject)
|-- 内容 (body)
|-- 悄悄话 (message)
|-- 联系人 (contacts)
|-- 手机号码 (mobile)
|-- 电子邮件 (email)
|-- QQ号码 (qq)
|-- 状态
|-- 创建时间
|-- 回复时间


广告表 (advert)
|-- 自动编号
|-- 位置 (location, 如:全网首页,交易类频道首页,资讯类频道首页,功能交互类页面,列表页面,会员登录页面)
|-- 频道 (channel, 如:首页,会员登录页面,促销频道首页,服饰频道首页,社区频道首页)
|-- 名称(name, 如:首页第2轮播焦点图,首页第3轮播焦点图,首页1栏通屏,首页2栏通屏,首页1屏右侧Banner,左侧Banner,会员登录页1屏Banner)
|-- 标题(title, 格式:{频道}{名称},如:首页第2轮播焦点图,服饰频道首页1屏通栏)
|-- 英文名称(code, 格式:{频道拼音缩写}_{名称拼音缩写}_{广告类型}:{n},如:SY_JDT_RM1:首页焦点图第1轮播,SY_FB1:首页底部1栏通屏,GYWMSY_B1:关于我们频道首页1栏通屏)
|-- 广告类型(type, 如:B:网幅广告,包含横幅、按钮、通栏、竖边、巨幅等;T:文本链接广告;EDM:电子邮件广告;S:赞助式广告;BC:内容式广告,包含关键字广告、比对内容广告等;C:分类式广告;I:插播式广告,一般指弹出式广告、浮动广告;RM:富媒体,使用浏览器插件或其他脚本语言,具有复杂视觉效果和交互功能的网络广告;V:视频广告)
|-- 广告分组(group, 如:首页商品类别楼层广告)
|-- 媒体数量 (media_count)
|-- 媒体宽度 (media_width,用于规范提示)
|-- 媒体高度 (media_height,用于规范提示)
|-- 媒体文件格式(media_type, jpg,gif,png,用于规范提示)
|-- 媒体文件大小规格(KB,用于规范提示)
|-- 排列次序
|-- 状态
|-- 创建时间
|-- 更新时间


广告内容表 (advert_detail)
|-- 自动编号
|-- 广告表代码 (advert_code)
|-- 标题 (title)
|-- 文件路径 (filepath)
|-- 文件容量 (filesize)
|-- 文件类型 (filetype)
|-- 链接地址 (link_url)
|-- 链接打开方式 (open_target)
|-- 浏览次数
|-- 点击次数
|-- 是否周期时间 (is_period_time)
|-- 有效期 (duration_time)
|-- 有效期计量单位 (duration_unit)
|-- 生效时间 (begin_time)
|-- 失效时间 (end_time)
|-- 备注
|-- 状态
|-- 创建时间
