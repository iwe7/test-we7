<?php
global $_W, $_GPC;
OAuth2\Autoloader::register();
$dsn = "mysql:dbname={$config['master']['database']};host={$config['master']['host']}";
$username = "{$config['master']['username']}";
$password = "{$config['master']['password']}";
$storage = new OAuth2\Storage\Pdo(pdo()->getPDO(), array(
    'client_table' => 'ims_iwe7_oauth_clients',
    'access_token_table' => 'ims_iwe7_oauth_access_tokens',
    'refresh_token_table' => 'ims_iwe7_oauth_refresh_tokens',
    'code_table' => 'ims_iwe7_oauth_authorization_codes',
    'user_table' => 'ims_iwe7_oauth_users',
    'jwt_table' => 'ims_iwe7_oauth_jwt',
    'jti_table' => 'ims_iwe7_oauth_jti',
    'scope_table' => 'ims_iwe7_oauth_scopes',
    'public_key_table' => 'ims_iwe7_oauth_public_keys',
));
$server = new OAuth2\Server($storage);
$server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
$server->addGrantType(new OAuth2\GrantType\AuthorizationCode($storage));
if (empty($_POST)) {
    include $this->template('oauth2');
    exit();
}
$request = OAuth2\Request::createFromGlobals();
$response = new OAuth2\Response();
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
