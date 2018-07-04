<?php
global $_W, $_GPC;
require IA_ROOT . "/addons/iwe7_oauth2/inc/common/server.php";

$request = OAuth2\Request::createFromGlobals();
$response = new OAuth2\Response();
if (!$server->validateAuthorizeRequest($request, $response)) {
    $response->send();
    die;
}

if (empty($_POST)) {
    include $this->template('oauth2');
    exit();
}

$userid = $_W['member']['uid'];
if (empty($userid)) {
    $userid = $_W['openid'];
}

$is_authorized = $_GPC['authorized'] === 'yes';
$server->handleAuthorizeRequest($request, $response, $is_authorized, $userid);
$server->handleTokenRequest($request)->send();

if (!$server->verifyResourceRequest(OAuth2\Request::createFromGlobals())) {
    $server->getResponse()->send();
    die;
}
$token = $server->getAccessTokenData(OAuth2\Request::createFromGlobals());
echo "User ID associated with this token is {$token['user_id']}";
