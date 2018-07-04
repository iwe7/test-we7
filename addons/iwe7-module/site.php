<?php
define("IWE7MODULE", 'iwe7_cars');
require_once IA_ROOT . "/addons/" . IWE7MODULE . "/core/iwe7.utility.php";
require_once IA_ROOT . "/addons/" . IWE7MODULE . "/core/iwe7.base.php";
require_once IA_ROOT . "/addons/" . IWE7MODULE . "/core/iwe7_table.base.php";
class Iwe7_ModuleModuleSite extends WeModuleSite
{
    private function debug()
    {
        ini_set("display_errors", "On");
        error_reporting(E_ALL | E_STRICT);
    }
    private function accessControlAllowOrigin()
    {
        // 跨域测试
        header("Access-Control-Allow-Origin: http://localhost:4200");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
        header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE,OPTIONS,PATCH');
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit('success');
        }
    }
    public function doWebApi()
    {
        global $_W, $_GPC;
        $this->accessControlAllowOrigin();
        $model = $_GPC['model'];
        $mdo = $_GPC['mdo'];
        $site = Iwe7Utility::createModel($model);
        $data = $site->$mdo();
        if (is_error($data)) {
            die(json_encode(
                array(
                    'code' => -1,
                    'msg' => $data['message'],
                    'data' => $data,
                )
            ));
        } else {
            die(json_encode(
                array(
                    'code' => 0,
                    'msg' => '成功',
                    'data' => $data,
                )
            ));
        }
    }
    public function doMobileApi()
    {
        global $_W, $_GPC;
        $this->accessControlAllowOrigin();
        $model = $_GPC['model'];
        $mdo = $_GPC['mdo'];
        $site = Iwe7Utility::createModel($model);
        $data = $site->$mdo();
        if (is_error($data)) {
            die(json_encode(
                array(
                    'code' => -1,
                    'msg' => $data['message'],
                    'data' => $data,
                )
            ));
        } else {
            die(json_encode(
                array(
                    'code' => -1,
                    'msg' => '成功',
                    'data' => $data,
                )
            ));
        }
    }
    public function getCover()
    {
        global $_W, $_GPC;
        $urls = array();
        $urls[] = array();
        return $urls;
    }
    public function getMenu()
    {
        global $_W, $_GPC;
        $urls = array();
        $urls[] = array(
            'title' => '首页入口',
            'url' => $this->createWebUrl('index'),
        );
        return $urls;
    }
    public function __call($name, $params)
    {
        global $_W, $_GPC;
        $file = $this->getFunctionFile($name);
        if (file_exists($file)) {
            require $file;
            exit;
        }
        $module_type = stripos($name, 'doWeb') === 0 ? 'web' : 'mobile';
        if ($module_type === 'web') {
            $this->tpl('index');
        } else {
            $this->tpl('index');
        }
    }
    private function tpl($name)
    {
        global $_W, $_GPC;
        include $this->template($name);
        exit();
    }
}
