import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutSiderComponent } from './layout-sider/layout-sider.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  declarations: [LayoutDefaultComponent, LayoutSiderComponent, LayoutHeaderComponent]
})
export class Iwe7LayoutModule { }
