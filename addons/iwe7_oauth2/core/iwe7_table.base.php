<?php
class Iwe7TableBase
{
    public $table = 'iwe7_table';
    public $fields = array();
    public $keyfield = '';
    public $orderby = array();
    public $limit = array();
    public $params = array();
    public $state = array();
    public $total = 0;
    public function id()
    {
        return 'id';
    }
    public function insert($member)
    {
        if (pdo_insert($this->table, $member)) {
            return pdo_insertid();
        } else {
            return error('-1', 'Insert Error');
        }
    }

    public function load()
    {
        global $_W, $_GPC;
        if (is_array($this->params)) {
            return pdo_get($this->table, $this->params, $$fields);
        } else {
            return error(-1, 'Params Error');
        }
    }

    public function loads()
    {
        return pdo_getslice(
            $this->table,
            $this->params,
            $this->limit,
            $this->total,
            $this->fields,
            $this->keyfield,
            $this->orderby
        );
    }

    public function upsert($item, $params)
    {
        $exits = pdo_get($this->table, $params);
        if (!empty($exits)) {
            if (empty($params)) {
                $params[$this->id()] = $exits[$this->id()];
            }
            pdo_update($this->table, $item, $params);
            return $exits[$this->id()];
        } else {
            $this->insert($item);
            return pdo_insertid();
        }
    }

    public function delete()
    {
        global $_W, $_GPC;
        $input = $_GPC['__input'];
        $id = $input['id'];
        if (empty($id)) {
            return error(-1, $this->id() . " Is Empty");
        }
        $params = array();
        $params[$this->id()] = $id;
        pdo_delete($this->table, $params);
        return $id;
    }

    public function deletes()
    {
        global $_W, $_GPC;
        $input = $_GPC['__input'];
        $ids = $input['ids'];
        if (empty($ids)) {
            return error(-1, $this->id() . "s Is Empty");
        }
        foreach ($ids as $id) {
            $params = array();
            $params[$this->id()] = $id;
            pdo_delete($this->table, $params);
        }
        return $ids;
    }
}
