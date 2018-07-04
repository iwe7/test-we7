import { LoadIwe7OauthClientss, DeleteIwe7OauthClients } from './../../../actions/iwe7-oauth-clients.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllIwe7OauthClients } from '../../../reducers/iwe7-oauth-clients.reducer';
import { Iwe7OauthClients } from '../../../models/iwe7-oauth-clients.model';
import { Iwe7Editor2Service } from 'iwe7-editor2';

@Component({
  selector: 'iwe7-oauth-clients',
  templateUrl: './iwe7-oauth-clients.component.html',
  styleUrls: ['./iwe7-oauth-clients.component.scss']
})
export class Iwe7OauthClientsComponent implements OnInit {
  list$: Observable<Iwe7OauthClients[]>;
  list: Iwe7OauthClients[];

  loading: boolean = true;

  title: string = '平台管理';
  desc: string = '添加应用前请认真阅读该产品的产品文档，了解后再进行操作！。请谨慎操作!';
  constructor(
    public store: Store<any>,
    public editor: Iwe7Editor2Service
  ) {
    this.list$ = this.store.select(selectAllIwe7OauthClients);
    this.list$.subscribe(res => {
      this.list = [null, ...res];
      this.loading = false;
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadIwe7OauthClientss({}));
  }

  create(item: Iwe7OauthClients) {
    this.editor.create('iwe7-oauth-clients', item);
  }

  delete(item: Iwe7OauthClients) {
    this.store.dispatch(new DeleteIwe7OauthClients({
      id: item.client_id
    }));
  }


}
