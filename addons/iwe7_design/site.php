<?php
class Iwe7_designModuleSite extends WeModuleSite
{
    public function getCover()
    {
        global $_W, $_GPC;
        $urls = array();
        $urls[] = array(
            'title' => '首页入口',
            'url' => $this->createMobileUrl('index'),
        );
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

    public function doMobileIndex()
    {
        include $this->template('index');
    }

    public function doWebIndex()
    {
        include $this->template('index');
    }
}
