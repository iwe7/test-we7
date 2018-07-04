<?php
global $_W, $_GPC;
require IA_ROOT . "/addons/iwe7_oauth2/inc/common/server.php";

$request = OAuth2\Request::createFromGlobals();
$handleTokenRequest = $server->handleTokenRequest($request);
$handleTokenRequest->send();
