<?php
defined('IN_IA') or exit('Access Denied');
class Iwe7_carModule extends WeModule {
	public function settingsDisplay($settings) {
		global $_W, $_GPC;
		include $this->template('setting');
	}
}
