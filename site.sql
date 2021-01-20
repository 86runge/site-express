Executing (default): CREATE TABLE IF NOT EXISTS `content_articles` (`id` CHAR(36) BINARY NOT NULL , `title` CHAR(100), `category_id` CHAR(36) BINARY, `style_id` CHAR(36) BINARY, `summary` TEXT, `author`
CHAR(100), `source` CHAR(100), `meta_keywords` CHAR(100), `meta_description` TEXT, `content` TEXT, `image_url` CHAR(200), `visit_count` INTEGER, `reply_count` INTEGER, `user_id` CHAR(36) BINARY, `content
_tags` CHAR(100), `access` TINYINT(1) DEFAULT 1, `is_share` TINYINT(1) DEFAULT 1, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `update_time` DATETIME, `createdAt` DATETIME NOT
NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_articles` FROM `site_data`

Executing (default): CREATE TABLE IF NOT EXISTS `content_article_categories` (`id` CHAR(36) BINARY NOT NULL , `name` CHAR(50), `code` CHAR(100), `parent_id` CHAR(36) BINARY, `article_count` INTEGER, `ima
ge_url` CHAR(200), `link_url` CHAR(200), `summary` TEXT, `remark` TEXT, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NUL
L, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_article_categories` FROM `site_data`

Executing (default): CREATE TABLE IF NOT EXISTS `content_pages` (`id` CHAR(36) BINARY NOT NULL , `category_id` CHAR(36) BINARY, `summary` TEXT, `meta_keywords` CHAR(100), `meta_description` TEXT, `conten
t` TEXT, `image_url` CHAR(200), `visit_count` INTEGER, `reply_count` INTEGER, `star` INTEGER, `tags` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updat
edAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_pages` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_files` (`id` CHAR(36) BINARY NOT NULL , `category_id` CHAR(36) BINARY, `file_name` CHAR(100), `file_path` CHAR(200), `file_size` CHAR(50), `file_t
ype` INTEGER, `file_ext` CHAR(50), `visit_count` INTEGER, `reply_count` INTEGER, `download_count` INTEGER, `image_url` CHAR(200), `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `
createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_files` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_links` (`id` CHAR(36) BINARY NOT NULL , `title` CHAR(200), `link_url` CHAR(200), `link_type` TINYINT(1), `image_url` CHAR(200), `remark` TEXT, `so
rt` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_links` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_menus` (`id` CHAR(36) BINARY NOT NULL , `title` CHAR(200), `code` CHAR(200), `link_type` TINYINT(1), `parent_id` CHAR(36) BINARY, `image_url` CHAR
(200), `link_url` CHAR(200), `open_target` TINYINT(1) DEFAULT 1, `is_lock` TINYINT(1) DEFAULT 1, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `up
datedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_menus` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_feedbacks` (`id` CHAR(36) BINARY NOT NULL , `category_id` CHAR(36) BINARY, `serial_no` CHAR(200), `subject` CHAR(200), `body` TEXT, `message` TEXT
, `contacts` CHAR(36) BINARY, `mobile` CHAR(50), `email` CHAR(200), `qq` CHAR(50), `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `reply_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt
` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_feedbacks` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_adverts` (`id` CHAR(36) BINARY NOT NULL , `location` INTEGER, `channel` INTEGER, `name` CHAR(200), `title` CHAR(100), `code` CHAR(100), `type` INT
EGER, `group` INTEGER, `media_count` INTEGER, `media_width` CHAR(50), `media_height` CHAR(50), `media_type` CHAR(50), `media_size` CHAR(50), `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time`
DATETIME, `updated_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `content_adverts` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `content_advert_details` (`id` CHAR(36) BINARY NOT NULL , `advert_code` CHAR(200), `title` CHAR(100), `file_path` CHAR(200), `file_size` INTEGER, `file_typ
e` INTEGER, `link_url` CHAR(200), `open_target` TINYINT(1) DEFAULT 1, `visit_count` INTEGER, `click_count` INTEGER, `sort` INTEGER, `is_period_time` TINYINT(1) DEFAULT 0, `duration_time` DATETIME, `begin
_time` DATETIME, `end_time` DATETIME, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGIN
E=InnoDB;
Executing (default): SHOW INDEX FROM `content_advert_details` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `sys_smtp_servers` (`id` CHAR(36) BINARY NOT NULL , `host` CHAR(45), `port` CHAR(45), `login_id` CHAR(45), `password` CHAR(45), `smtp_auth` TINYINT(1) DEFA
ULT 1, `secure` TINYINT(1) DEFAULT 1, `from_address` CHAR(45), `from_name` CHAR(20), `send_interval` INTEGER, `daily_count_max` INTEGER, `today_count` INTEGER, `total_count` INTEGER, `note` TEXT, `sort`
INTEGER, `status` INTEGER, `created_time` DATETIME, `last_send_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `sys_smtp_servers` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `sys_skin_confs` (`id` CHAR(36) BINARY NOT NULL , `title` INTEGER, `bg_color` CHAR(45), `bg_image` CHAR(200), `font_family` CHAR(45), `font_size` INTEGER,
`font_color` CHAR(45), `hyper_link` CHAR(45), `hyper_link_hover` CHAR(45), `hyper_link_visit` CHAR(45), `hyper_link_decoration` CHAR(45), `hyper_link_hover_decoration` CHAR(45), `hyper_link_visit_decorat
ion` CHAR(45), `hyper_link_style` TINYINT(1) DEFAULT 0, `hyper_link_hover_style` TINYINT(1) DEFAULT 0, `hyper_link_visit_style` TINYINT(1) DEFAULT 0, `line_color` CHAR(45), `border_color` CHAR(45), `tabl
e_bg_color` CHAR(45), `table_hover_color` CHAR(45), `success_color` CHAR(45), `error_color` CHAR(45), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`
)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `sys_skin_confs` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `site_settings` (`id` CHAR(36) BINARY NOT NULL , `title` CHAR(50), `slogan` CHAR(50), `company_name` CHAR(100), `app_name` CHAR(50), `app_version` CHAR(50)
, `status` TINYINT(1) DEFAULT 1, `closed_announcement` TEXT, `logo_url` CHAR(200), `homepage` CHAR(100), `foot_info` CHAR(100), `lang_list` INTEGER, `lang_current` CHAR(100) DEFAULT 0, `lang_translate` C
HAR(100), `meta_keywords` TEXT, `meta_description` TEXT, `meta_tags` CHAR(100), `meta_charset` CHAR(100), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (
`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `site_settings` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `site_secures` (`id` CHAR(36) BINARY NOT NULL , `encrypt_key` CHAR(200), `session_prefix` CHAR(200), `allow_register` TINYINT(1) DEFAULT 1, `backup_root` C
HAR(200), `captcha_status` TINYINT(1) DEFAULT 1, `admin_email` CHAR(100), `admin_phone` CHAR(50), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) E
NGINE=InnoDB;
Executing (default): SHOW INDEX FROM `site_secures` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `site_content_settings` (`id` CHAR(36) BINARY NOT NULL , `draft_box_status` TINYINT(1) DEFAULT 1, `auto_save_interval` INTEGER, `list_rows` INTEGER, `reply
_list_rows` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `site_content_settings` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `oauth_settings` (`id` CHAR(36) BINARY NOT NULL , `name` CHAR(50), `client_id` CHAR(100), `client_secret` CHAR(100), `verification` CHAR(100), `callback_ur
l` CHAR(100), `widget` CHAR(100), `auto_login` TINYINT(1) DEFAULT 1, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL,
`deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `oauth_settings` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `sys_custom_confs` (`id` CHAR(36) BINARY NOT NULL , `show_real_price` TINYINT(1) DEFAULT 0, `conf_title` CHAR(100), `conf_name` CHAR(100), `conf_datatype`
INTEGER, `conf_group` INTEGER, `conf_prop` TINYINT(1) DEFAULT 0, `conf_content` CHAR(200), `conf_large_content` TEXT, `conf_remark` TEXT, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DAT
ETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `sys_custom_confs` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `number_regionals` (`id` CHAR(36) BINARY NOT NULL , `show_price` TINYINT(1) DEFAULT 1, `show_real_price` TINYINT(1) DEFAULT 0, `area` CHAR(100), `segment_n
umber_length` INTEGER, `segment_number` INTEGER, `segment_number_len3` INTEGER, `number_length` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`
id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `number_regionals` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `mall_settings` (`id` CHAR(36) BINARY NOT NULL , `name` CHAR(100), `code` CHAR(100), `province_code` CHAR(10), `city_code` CHAR(10), `area_code` CHAR(10),
`level` INTEGER, `zip` CHAR(50), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `mall_settings` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user` (`id` CHAR(36) BINARY NOT NULL , `username` CHAR(30), `name_cn` CHAR(30), `nick` CHAR(30), `phone` CHAR(30), `email` CHAR(50), `password` CHAR(50),
`status` TINYINT(1) DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `open-accounts` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `qq` CHAR(30), `wechat` CHAR(30), `taobao` CHAR(50), `skype` CHAR(30), `created
At` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `open-accounts` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_profile` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `real_name` CHAR(30), `nick_name` CHAR(30), `sex` TINYINT(1), `user_level` INTEG
ER, `experience` INTEGER, `personal_sign` CHAR(200), `personal_title` CHAR(200), `face_url` CHAR(200), `marital_status` TINYINT(1) DEFAULT 0, `birthday` DATETIME, `education_id` INTEGER, `register_ip` CH
AR(50), `register_time` DATETIME, `login_ip` CHAR(50), `login_time` DATETIME, `login_count` INTEGER, `online_status` TINYINT(1), `online_seconds` INTEGER, `unread_msg` INTEGER, `createdAt` DATETIME NOT N
ULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_profile` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_wechat_profile` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `wechat` CHAR(30), `country` CHAR(30), `province` CHAR(30), `city` CHAR(3
0), `area` CHAR(50), `language` INTEGER, `sex` TINYINT(1), `head_img_url` CHAR(200), `subscribe` TINYINT(1), `subscribe_time` DATETIME, `union_id` CHAR(200), `openid_mobile` CHAR(200), `openid_web` CHAR(
200), `openid_biz` CHAR(200), `openid_biz_plugin` CHAR(200), `group_id` CHAR(200), `user_tag` CHAR(50), `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt`
DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_wechat_profile` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_employee_profile` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `attendance_no` CHAR(50), `vocation` CHAR(30), `position` CHAR(30), `ti
tle` CHAR(30), `extension` CHAR(50), `telephone` CHAR(50), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_employee_profile` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_address` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `country` CHAR(30), `province` CHAR(30), `city` CHAR(30), `area` CHAR(50), `stre
et` CHAR(200), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_address` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_security_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `question1` CHAR(100), `answer1` CHAR(100), `question2` CHAR(100), `answer
2` CHAR(100), `question3` CHAR(100), `answer3` CHAR(100), `created_time` DATETIME, `modify_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY
(`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_security_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_system_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `theme` INTEGER, `language` INTEGER, `list_page_size` CHAR(50), `createdAt`
DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_system_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_point` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `point` INTEGER, `point_frozen` INTEGER, `point_consuming` INTEGER, `createdAt` DA
TETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_point` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_company_profile` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `country_name` CHAR(50), `company_type` INTEGER, `company_address` CHAR(
200), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_company_profile` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_certified` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `cert_type` INTEGER, `cert_no` CHAR(100), `cert_exp` DATETIME, `createdAt` DAT
ETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_certified` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_certificate` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `cert_type` INTEGER, `cert_no` CHAR(50), `cert_status` INTEGER, `captcha` CH
AR(20), `captcha_exp` DATETIME, `submit_time` DATETIME, `audit_time` DATETIME, `submit_remark` TEXT, `audit_remark` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIM
E, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_certificate` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_group_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `group_id` CHAR(36) BINARY, `status` TINYINT(1) DEFAULT 1, `createdAt` DATETI
ME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_group_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_department_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `department_id` CHAR(36) BINARY, `status` TINYINT(1) DEFAULT 1, `created
At` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_department_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_branch_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `branch_id` CHAR(36) BINARY, `status` TINYINT(1) DEFAULT 1, `createdAt` DATE
TIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_branch_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_trade_conf` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `trade_password` CHAR(50), `operate_password` CHAR(50), `createdAt` DATETIME
NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_trade_conf` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_operate_log` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `operate_desc` TEXT, `operate_type` INTEGER, `operate_ip` CHAR(50), `operate
_time` DATETIME, `operate_params` CHAR(100), `result_status` TINYINT(1) DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_operate_log` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_login_log` (`id` CHAR(36) BINARY NOT NULL , `login_id` CHAR(36) BINARY, `login_ip` CHAR(50), `login_time` DATETIME, `login_params` CHAR(100), `is_log
in` TINYINT(1), `result_status` TINYINT(1) DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_login_log` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_auth_group` (`id` CHAR(36) BINARY NOT NULL , `group_name` CHAR(30), `group_code` CHAR(30), `group_rules` CHAR(30), `img_url` CHAR(200), `note` TEXT,
`sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_auth_group` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_auth_department` (`id` CHAR(36) BINARY NOT NULL , `department_name` CHAR(30), `department_code` CHAR(30), `department_rules` CHAR(30), `parent_depart
ment` CHAR(36) BINARY, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGI
NE=InnoDB;
Executing (default): SHOW INDEX FROM `user_auth_department` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_auth_rule` (`id` CHAR(36) BINARY NOT NULL , `rule_name` CHAR(30), `rule_code` CHAR(30), `parent_rule` CHAR(36) BINARY, `rule_type` INTEGER, `link_url
` CHAR(200), `condition` CHAR(200), `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY
 (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_auth_rule` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `private_message` (`id` CHAR(36) BINARY NOT NULL , `category_id` CHAR(36) BINARY, `from_user` CHAR(36) BINARY, `to_user` CHAR(36) BINARY, `from_alias` CHAR
(200), `subject` CHAR(200), `body` TEXT, `send_status` INTEGER, `read_status` TINYINT(1), `delete_status` TINYINT(1), `star` TINYINT(1), `read_time` DATETIME, `created_time` DATETIME, `send_time` DATETIM
E, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `private_message` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `private_message_category` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `category_name` CHAR(100), `category_code` INTEGER, `sort` INTEGER,
`status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `private_message_category` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_referral` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `referral_code` CHAR(100), `referral_category` CHAR(36) BINARY, `condition_valu
e` CHAR(100), `condition_desc` TEXT, `visit_count` INTEGER, `register_count` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL,
 `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_referral` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_referral_category` (`id` CHAR(36) BINARY NOT NULL , `category_name` CHAR(30), `category_code` CHAR(30), `parent_category` CHAR(36) BINARY, `sort` INT
EGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_referral_category` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_referral_detail` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `referral_id` CHAR(36) BINARY, `sort` INTEGER, `status` TINYINT(1) DEFAU
LT 1, `register_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_referral_detail` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `user_subscribe` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `email` CHAR(50), `subscribe` CHAR(200), `status` TINYINT(1) DEFAULT 1, `creat
ed_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user_subscribe` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `products` (`id` CHAR(36) BINARY NOT NULL , `product_name` CHAR(45), `marque` CHAR(45), `barcode` CHAR(45), `type_id` CHAR(36) BINARY, `category_id` CHAR(3
6) BINARY, `brand_id` CHAR(36) BINARY, `price` DECIMAL(20,2), `market_price` DECIMAL(20,2), `cost_price` DECIMAL(20,2), `stock` INTEGER, `warning_stock` INTEGER, `integral` INTEGER, `photo` VARCHAR(255),
 `status` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `products` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_descriptions` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `title` CHAR(100), `code` CHAR(100), `content` TEXT, `createdAt` DATE
TIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_descriptions` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_statistics` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `visit_count` INTEGER, `reply_count` INTEGER, `sale_quantity` INTEGER,
`sale_amount` DECIMAL(20,2), `purchase_quantity` INTEGER, `purchase_amount` DECIMAL(20,2), `cost_price` DECIMAL(20,2), `gross_profit` DECIMAL(20,2), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NO
T NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_statistics` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_purchase_sales` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `warehouse_quantity` INTEGER, `price` DECIMAL(20,2), `subtotal` DEC
IMAL(20,2), `stock_old` INTEGER, `stock_new` INTEGER, `direction` INTEGER, `operate_type` INTEGER, `order_id` CHAR(36) BINARY, `provider_id` CHAR(36) BINARY, `note` TEXT, `user_id` CHAR(36) BINARY, `audi
tor_uid` CHAR(36) BINARY, `statistics_result` TINYINT(1) DEFAULT 1, `statistics_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENG
INE=InnoDB;
Executing (default): SHOW INDEX FROM `product_purchase_sales` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_categories` (`id` CHAR(36) BINARY NOT NULL , `title` CHAR(45), `code` CHAR(45), `parent_id` CHAR(36) BINARY, `product_count` INTEGER, `meta_key` C
HAR(45), `meta_note` TEXT, `is_lock` TINYINT(1) DEFAULT 1, `image_url` VARCHAR(255), `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DAT
ETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_categories` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_attributes` (`id` CHAR(36) BINARY NOT NULL , `product_category_id` CHAR(36) BINARY, `title` CHAR(45), `name` CHAR(200), `description` TEXT, `conte
nt` CHAR(45), `value` CHAR(45), `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`i
d`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_attributes` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_and_attributes` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `attribute_id` CHAR(36) BINARY, `value` CHAR(45), `createdAt` DATET
IME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_and_attributes` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_brands` (`id` CHAR(36) BINARY NOT NULL , `product_category_id` CHAR(36) BINARY, `name` CHAR(45), `image_url` VARCHAR(255), `sort` INTEGER, `status
` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_brands` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_and_specifications` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `specification_id` CHAR(36) BINARY, `stock` INTEGER, `price` DE
CIMAL(20,2), `intro` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_and_specifications` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_specifications` (`id` CHAR(36) BINARY NOT NULL , `product_category_id` CHAR(36) BINARY, `type` CHAR(45), `value` CHAR(45), `createdAt` DATETIME NO
T NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_specifications` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_comments` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `user_id` CHAR(36) BINARY, `auditor_id` CHAR(36) BINARY, `pid` CHAR(36) B
INARY, `content` TEXT, `status` INTEGER, `created_time` DATETIME, `audit_time` DATETIME, `audit_note` TEXT, `support_count` INTEGER, `oppose_count` INTEGER, `report_count` INTEGER, `createdAt` DATETIME N
OT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_comments` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_logs` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `user_id` CHAR(36) BINARY, `user_ip` CHAR(45), `value` CHAR(45), `status` TIN
YINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_logs` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_albums` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `name` CHAR(45), `image_url` VARCHAR(255), `image_size` CHAR(45), `width` C
HAR(45), `height` CHAR(45), `intro` TEXT, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMA
RY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_albums` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_promotions` (`id` CHAR(36) BINARY NOT NULL , `name` CHAR(45), `code` CHAR(45), `image_url` VARCHAR(255), `product_count` INTEGER, `remark` TEXT, `
start_time` DATETIME, `end_time` DATETIME, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIM
ARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_promotions` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_and_promotions` (`id` CHAR(36) BINARY NOT NULL , `product_id` CHAR(36) BINARY, `window_id` CHAR(36) BINARY, `name` CHAR(45), `start_time` DATETIME
, `end_time` DATETIME, `price` DECIMAL(20,2), `image_url` VARCHAR(255), `intro` TEXT, `sort` INTEGER, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DA
TETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_and_promotions` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `product_coupons` (`id` CHAR(36) BINARY NOT NULL , `serial_no` CHAR(45), `name` CHAR(45), `face_value` DECIMAL(20,2), `quantity` INTEGER, `condition_value`
 INTEGER, `condition_desc` TEXT, `start_time` DATETIME, `end_time` DATETIME, `sort` INTEGER, `status` TINYINT(1) DEFAULT 0, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NO
T NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `product_coupons` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order` (`id` CHAR(36) BINARY NOT NULL , `order_no` CHAR(45), `shop_id` CHAR(36) BINARY, `order_status` INTEGER, `product_count` INTEGER, `product_amount_t
otal` DECIMAL(20,2), `order_amount_total` DECIMAL(20,2), `logistics_fee` DECIMAL(20,2), `is_unpacking_inspection` TINYINT(1) DEFAULT 0, `is_invoice` TINYINT(1) DEFAULT 0, `invoice_id` CHAR(36) BINARY, `a
ddress_id` CHAR(36) BINARY, `logistics_id` CHAR(36) BINARY, `pay_channel` INTEGER, `out_trade_no` CHAR(45), `order_time` DATETIME, `payment_time` DATETIME, `delivery_time` DATETIME, `customer_id` CHAR(45
), `customer_note` TEXT, `order_settlement_status` INTEGER, `order_settlement_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGIN
E=InnoDB;
Executing (default): SHOW INDEX FROM `order` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_invoices` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `order_no` CHAR(45), `is_vat` TINYINT(1) DEFAULT 1, `invoice_title` CHAR(45),
 `invoice_content` CHAR(45), `invoice_amount` DECIMAL(20,2), `invoice_tax_no` CHAR(45), `invoice_tax` DECIMAL(20,2), `vat_company_name` CHAR(45), `vat_company_address` CHAR(200), `vat_telephone` CHAR(45)
, `vat_bank_name` CHAR(100), `vat_bank_account` CHAR(45), `vat_created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoD
B;
Executing (default): SHOW INDEX FROM `order_invoices` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_logistics` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `order_no` CHAR(45), `express_no` CHAR(36) BINARY, `consignee_name` CHAR(45)
, `consignee_phone` CHAR(45), `sub_consignee_phone` CHAR(45), `consignee_address` CHAR(200), `consignee_code` CHAR(45), `logistics_type` INTEGER, `logistics_id` CHAR(45), `logistics_fee` DECIMAL(20,4), `
agency_fee` DECIMAL(20,4), `delivery_amount` DECIMAL(20,4), `order_logistics_status` INTEGER, `logistics_settlement_status` INTEGER, `logistics_result_last` TEXT, `logistics_result` TEXT, `logistics_crea
te_time` DATETIME, `logistics_update_time` DATETIME, `logistics_settlement_time` DATETIME, `logistics_payment_channel` INTEGER, `logistics_payment_no` CHAR(45), `reconciliation_status` TINYINT(1), `recon
ciliation_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_logistics` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_returns` (`id` CHAR(36) BINARY NOT NULL , `returns_no` CHAR(45), `order_id` CHAR(36) BINARY, `order_no` CHAR(45), `express_no` CHAR(45), `consignee_
name` CHAR(45), `consignee_phone` CHAR(45), `sub_consignee_phone` CHAR(45), `consignee_address` CHAR(45), `consignee_code` CHAR(45), `logistics_type` INTEGER, `logistics_id` CHAR(45), `logistics_fee` DEC
IMAL(20,2), `order_logistics_status` INTEGER, `logistics_result_last` TEXT, `logistics_result` TEXT, `logistics_update_time` DATETIME, `logistics_delivery_time` DATETIME, `returns_type` INTEGER, `returns
_handling_way` INTEGER, `returns_amount` DECIMAL(20,2), `seller_punish_fee` DECIMAL(20,2), `return_submit_time` DATETIME, `handling_time` DATETIME, `returns_reason` INTEGER, `others_returns_reason` TEXT,
 `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_returns` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_details` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `order_no` CHAR(45), `product_no` CHAR(45), `product_name` CHAR(45), `product_
price` DECIMAL(20,2), `product_marque` CHAR(45), `product_store_barcode` CHAR(200), `product_mode_desc` CHAR(100), `product_mode_params` CHAR(100), `discount_rate` DECIMAL(20,2), `discount_amount` DECIMA
L(20,2), `number` INTEGER, `subtotal` DECIMAL(20,2), `is_product_exists` TINYINT(1) DEFAULT 1, `remark` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY K
EY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_details` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `delivery_addresses` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `real_name` CHAR(45), `telephone` CHAR(45), `usb_telephone` CHAR(45), `cou
ntry` CHAR(45), `province` CHAR(45), `city` CHAR(45), `area` CHAR(45), `street` CHAR(200), `code` CHAR(45), `is_default_address` TINYINT(1), `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updat
edAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `delivery_addresses` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `shopping_carts` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `shop_id` CHAR(36) BINARY, `product_id` CHAR(36) BINARY, `is_product_exists` C
HAR(1), `number` INTEGER, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `shopping_carts` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_audits` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `order_status` INTEGER, `is_seller_risk_confirm` TINYINT(1) DEFAULT 0, `is_sell
er_punish_logistics_fee` TINYINT(1) DEFAULT 1, `is_seller_commission` TINYINT(1) DEFAULT 1, `seller_commission_rate` DECIMAL(20,2), `seller_commission_amount` DECIMAL(20,2), `seller_remark` TEXT, `confir
m_remark` TEXT, `storekeeper_return_remark` TEXT, `cashier_remark` TEXT, `seller_uid` CHAR(36) BINARY, `auditor_uid` CHAR(36) BINARY, `cashier_uid` CHAR(36) BINARY, `accountant_uid` CHAR(36) BINARY, `ord
er_source` INTEGER DEFAULT 0, `auditor_audited_time` DATETIME, `storekeeper_audited_time` DATETIME, `accountant_audited_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `dele
tedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_audits` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_commissions` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `seller_uid` CHAR(36) BINARY, `commission_amount` DECIMAL(20,2), `cashier_
uid` CHAR(36) BINARY, `settlement_status` INTEGER, `settlement_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_commissions` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `order_dispatches` (`id` CHAR(36) BINARY NOT NULL , `order_id` CHAR(36) BINARY, `from_seller_uid` CHAR(36) BINARY, `to_seller_uid` CHAR(36) BINARY, `dispat
ch_admin_uid` CHAR(36) BINARY, `dispatch_reason` TEXT, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `order_dispatches` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `finance_accounts` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `advance` DECIMAL(20,2), `advance_frozen` DECIMAL(20,2), `balance` DECIMAL(2
0,2), `balance_frozen` DECIMAL(20,2), `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `updated_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME,
PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `finance_accounts` FROM `site_data`
Executing (default): CREATE TABLE IF NOT EXISTS `finance_bankcards` (`id` CHAR(36) BINARY NOT NULL , `user_id` CHAR(36) BINARY, `bank_name` CHAR(200), `bank_card_no` CHAR(200), `bank_card_holder` CHAR(20
0), `usage_count` INTEGER, `sort` INTEGER, `status` TINYINT(1) DEFAULT 1, `created_time` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME, PRIMARY KEY (`id`))
ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `finance_bankcards` FROM `site_data`
