#! /bin/bash
read -p "enter name:" name
echo you have entered $name

mkdir iwe7-pages/$name
ng g m iwe7-pages/$name --spec=false --routing
ng g c iwe7-pages/$name/$name --spec=false -m iwe7-pages/$name/$name.module
ng g c iwe7-pages/$name/$name-edit --spec=false -m iwe7-pages/iwe7-pages.module
