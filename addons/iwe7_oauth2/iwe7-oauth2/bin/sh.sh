#! /bin/bash
read -p "enter name:" name
echo you have entered $name
ng g s services/$name --spec=false
ng generate entity $name -m iwe7-store/iwe7-store.module.ts --group --spec=false
ng generate effect $name -m iwe7-store/iwe7-store.module.ts --group --spec=false
