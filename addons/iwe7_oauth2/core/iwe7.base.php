<?php
class Iwe7Base extends WeModuleSite
{
    protected function createMobileUrl($do, $query = array(), $noredirect = true)
    {
        global $_W;
        $query['do'] = 'plugin';
        $query['m'] = strtolower($this->modulename);
        $query['pdo'] = $do;
        $query['p'] = $this->name;
        return murl('entry', $query, $noredirect);
    }
    protected function createWebUrl($do, $query = array())
    {
        global $_W;
        $query['do'] = 'plugin';
        $query['m'] = strtolower($this->modulename);
        $query['pdo'] = $do;
        $query['p'] = $this->name;
        return wurl('site/entry', $query);
    }

    protected function createWebApi($do, $mdo, $query = array())
    {
        global $_W;
        $query['do'] = 'api';
        $query['m'] = strtolower($this->modulename);
        $query['model'] = $do;
        $query['mdo'] = $mdo;
        return wurl('site/entry', $query);
    }
    protected function createMobileApi($do, $mdo, $query = array())
    {
        global $_W;
        $query['do'] = 'api';
        $query['m'] = strtolower($this->modulename);
        $query['model'] = $do;
        $query['mdo'] = $mdo;
        return murl('entry', $query, $noredirect);
    }

    public function __call($name, $arguments)
    {
        $isWeb = stripos($name, 'doWeb') === 0;
        $isMobile = stripos($name, 'doMobile') === 0;
        if ($isWeb || $isMobile) {
            $dir = IA_ROOT . '/addons/' . $this->modulename . '/plugins/' . $this->name . '/inc/';
            if ($isWeb) {
                $dir .= 'web/';
                $fun = strtolower(substr($name, 5));
            }
            if ($isMobile) {
                $dir .= 'mobile/';
                $fun = strtolower(substr($name, 8));
            }
            $file = $dir . $fun . '.inc.php';
            if (file_exists($file)) {
                require $file;
                exit;
            } else {
                $dir = str_replace("addons", "framework/builtin", $dir);
                $file = $dir . $fun . '.inc.php';
                if (file_exists($file)) {
                    require $file;
                    exit;
                }
            }
        }
        trigger_error("访问的方法 {$name} 不存在.", E_USER_WARNING);
        return null;
    }

}
