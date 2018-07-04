#! /bin/bash
read -p "enter name:" name
echo you have entered $name

ng generate entity $name -m iwe7-store/iwe7-store.module.ts --group --spec=false
ng generate effect $name -m iwe7-store/iwe7-store.module.ts --group --spec=false

mkdir iwe7-pages/$name
ng g m iwe7-pages/$name --spec=false --routing
ng g c iwe7-pages/$name/$name --spec=false -m iwe7-pages/$name/$name.module
ng g c iwe7-pages/$name/$name-edit --spec=false -m iwe7-pages/iwe7-pages.module
