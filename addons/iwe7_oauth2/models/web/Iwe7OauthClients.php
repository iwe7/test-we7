<?php
class Iwe7OauthClientsModel extends Iwe7TableBase
{
    public $table = 'iwe7_oauth_clients';
    public function id()
    {
        return 'client_id';
    }
    public function LoadIwe7OauthClientss()
    {
        global $_W, $_GPC;
        $input = $_GPC['__inputs'];
        if ($input['params']) {
            $this->params = $input['params'];
        }
        $list = $this->loads();
        return array(
            'list' => $list,
            'total' => $this->total,
        );
    }

    public function AddIwe7OauthClients()
    {}

    public function UpsertIwe7OauthClients()
    {
        global $_W, $_GPC;
        $input = $_GPC['__input'];
        $Iwe7OauthClients = $input['Iwe7OauthClients'];
        $this->upsert($Iwe7OauthClients, array('client_id' => $Iwe7OauthClients['client_id']));
        return $Iwe7OauthClients;
    }

    public function AddIwe7OauthClientss()
    {}

    public function UpsertIwe7OauthClientss()
    {
        global $_W, $_GPC;
        $input = $_GPC['__input'];
        $Iwe7OauthClientss = $input['Iwe7OauthClientss'];
        $ress = array();
        foreach ($Iwe7OauthClientss as &$Iwe7OauthClients) {
            $Iwe7OauthClients['id'] = $this->upsert($Iwe7OauthClients, array('client_id' => $Iwe7OauthClients['client_id']));
        }
        unset($Iwe7OauthClients);
        return Iwe7OauthClientss;
    }

    public function UpdateIwe7OauthClients()
    {}

    public function UpdateIwe7OauthClientss()
    {}

    public function DeleteIwe7OauthClients()
    {
        return $this->delete();
    }

    public function DeleteIwe7OauthClientss()
    {
        return $this->deletes();
    }
    public function ClearIwe7OauthClientss()
    {
        global $_W, $_GPC;
        pdo_delete($this->table, array());
    }
}
