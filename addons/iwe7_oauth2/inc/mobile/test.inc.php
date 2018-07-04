<?php
global $_W, $_GPC;
$codeUrl = $this->createMobileUrl('authorize', array(
    'response_type' => 'code',
    'client_id' => 'testclient',
    'scope' => 'read',
    'redirect_uri' => 'http://test.meepo.com.cn/web/index.php',
    'state' => 'xyz',
));
include $this->template('test');
