<?php
defined('IN_IA') or exit('Access Denied');

class Iwe7_designModule extends WeModule {
	public function settingsDisplay($settings) {
		global $_W, $_GPC;
		include $this->template('setting');
	}
}
