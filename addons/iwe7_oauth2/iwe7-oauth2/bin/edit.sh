#! /bin/bash
read -p "enter name:" name
echo you have entered $name
ng g c iwe7-pages/$name/$name-edit --spec=false -m iwe7-pages/iwe7-pages.module
