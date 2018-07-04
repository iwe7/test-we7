import { Iwe7Editor2Service } from 'iwe7-editor2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sider',
  templateUrl: './layout-sider.component.html',
  styleUrls: ['./layout-sider.component.scss']
})
export class LayoutSiderComponent implements OnInit {

  constructor(
    public editor: Iwe7Editor2Service
  ) { }

  ngOnInit() {
  }

  create(name: string, item: any) {
    return this.editor.create(name, item);
  }

}
