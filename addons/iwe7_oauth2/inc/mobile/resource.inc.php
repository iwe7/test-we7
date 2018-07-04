<?php
global $_W, $_GPC;
require IA_ROOT . "/addons/iwe7_oauth2/inc/common/server.php";
$request = OAuth2\Request::createFromGlobals();
if (!$server->verifyResourceRequest($request)) {
    $server->getResponse()->send();
    die;
}
$token = $server->getAccessTokenData($request);
echo json_encode(array('success' => true, 'message' => 'You accessed my APIs!'));
