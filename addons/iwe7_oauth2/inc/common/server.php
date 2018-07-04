<?php
global $_W, $_GPC;
OAuth2\Autoloader::register();
// 数据库配置
$tableConfig = array(
    'client_table' => tablename('iwe7_oauth_clients'),
    'access_token_table' => tablename('iwe7_oauth_access_tokens'),
    'refresh_token_table' => tablename('iwe7_oauth_refresh_tokens'),
    'code_table' => tablename('iwe7_oauth_authorization_codes'),
    'user_table' => tablename('iwe7_oauth_users'),
    'jwt_table' => tablename('iwe7_oauth_jwt'),
    'jti_table' => tablename('iwe7_oauth_jti'),
    'scope_table' => tablename('iwe7_oauth_scopes'),
    'public_key_table' => tablename('iwe7_oauth_public_keys'),
);
$storage = new OAuth2\Storage\Pdo(pdo()->getPDO(), $tableConfig);
$serverConfig = array(
    'use_jwt_access_tokens' => false,
    'store_encrypted_token_string' => true,
    'use_openid_connect' => false,
    'id_lifetime' => 3600,
    'access_lifetime' => 3600,
    'www_realm' => 'Service',
    'token_param_name' => 'access_token',
    'token_bearer_header_name' => 'Bearer',
    'enforce_state' => true,
    'require_exact_redirect_uri' => true,
    'allow_implicit' => false,
    'allow_credentials_in_request_body' => true,
    'allow_public_clients' => true,
    'always_issue_new_refresh_token' => false,
    'unset_refresh_token_after_use' => true,
);
$grantTypes = array();
$responseTypes = array();
$server = new OAuth2\Server($storage, $serverConfig, $grantTypes, $responseTypes);
$server->addGrantType(new OAuth2\GrantType\ClientCredentials($storage));
$server->addGrantType(new OAuth2\GrantType\AuthorizationCode($storage));
