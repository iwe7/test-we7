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
    include $this->template('authorize');
    exit();
}
$is_authorized = ($_POST['authorized'] === 'yes');
// 可以关联uid
// $server->handleAuthorizeRequest($request, $response, $is_authorized, $userid);
$server->handleAuthorizeRequest($request, $response, $is_authorized);
if ($is_authorized) {
    $code = substr($response->getHttpHeader('Location'), strpos($response->getHttpHeader('Location'), 'code=') + 5, 40);
    exit("SUCCESS! Authorization Code: $code");
}
$response->send();
