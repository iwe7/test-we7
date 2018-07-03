<?php
/**
 * 微擎卡券模块定义
 *
 * @author 微擎团队
 * @url
 */
defined('IN_IA') or exit('Access Denied');

class Iwe7_designModule extends WeModule {
	public function settingsDisplay($settings) {
		global $_W, $_GPC;
		include $this->template('setting');
	}
}
