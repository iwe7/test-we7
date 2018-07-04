<?php

class Iwe7Utility
{
    public static function defineConst($obj)
    {
        global $_W;
        if ($obj instanceof WeBase && $obj->modulename != 'core') {
            if (!defined('MODULE_ROOT')) {
                define('MODULE_ROOT', dirname($obj->__define));
            }
            if (!defined('MODULE_URL')) {
                define('MODULE_URL', $_W['siteroot'] . 'addons/' . $obj->modulename . '/');
            }
        }
    }

    public static function createModel($name)
    {
        global $_W;
        static $file;
        $modelPath = IA_ROOT . "/addons/" . IWE7MODULE . "/models/";
        $classname = "{$name}Model";
        if (!class_exists($classname)) {
            if (defined('IN_MOBILE')) {
                $file = $modelPath . "/mobile/{$name}.php";
            } else {
                $file = $modelPath . "/web/{$name}.php";
            }
            if (!is_file($file)) {
                trigger_error('model Definition File Not Found ' . $file, E_USER_WARNING);
                return null;
            }
            require $file;
        }
        if (!class_exists($classname)) {
            trigger_error('model Definition File Not Found ' . $file, E_USER_WARNING);
            return null;
        }
        $o = new $classname();
        $o->uniacid = $o->weid = $_W['uniacid'];
        return $o;
    }
    public static function createModuleSite($name)
    {
        global $_W;
        static $file;
        $pluginPath = IA_ROOT . "/addons/" . IWE7MODULE . "/plugins/";
        //如果是手机端，优先选用mobile.php文件
        if (defined('IN_MOBILE')) {
            $file = $pluginPath . "{$name}/mobile.php";
            $classname = "{$name}ModuleMobile";
            if (is_file($file)) {
                require $file;
            }
        }
        //如果mobile.php类不存在，选用site.php
        if (!defined('IN_MOBILE') || !class_exists($classname)) {
            $classname = "{$name}ModuleSite";
            if (!class_exists($classname)) {
                $file = $pluginPath . "{$name}/site.php";
                if (!is_file($file)) {
                    trigger_error('ModuleSite Definition File Not Found ' . $file, E_USER_WARNING);
                    return null;
                }
                require $file;
            }
        }
        if (!class_exists($classname)) {
            list($namespace) = explode('_', $name);
            if (class_exists("\\{$namespace}\\{$classname}")) {
                $classname = "\\{$namespace}\\{$classname}";
            } else {
                return null;
            }
        }
        $o = new $classname();
        $o->uniacid = $o->weid = $_W['uniacid'];
        // $o->modulename = 'iwe7_worker/plugins/' . $name;
        $o->name = $name;
        $o->modulename = IWE7MODULE;
        $o->module = module_fetch($name);
        $o->__define = $file;
        if (!empty($o->module['plugin'])) {
            $o->plugin_list = module_get_plugin_list($o->module['name']);
        }
        self::defineConst($o);
        $o->inMobile = defined('IN_MOBILE');
        return $o;
    }
}
