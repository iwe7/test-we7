import { Iwe7LayoutModule } from './iwe7-layout/iwe7-layout.module';
import { Iwe7PagesModule } from './iwe7-pages/iwe7-pages.module';
import { Iwe7ErrorHandler } from './services/iwe7-error.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { Iwe7StoreModule } from './iwe7-store/iwe7-store.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonABCModule } from '@delon/abc';
import { DelonFormModule } from '@delon/form';
import {
  registerLocaleData, APP_BASE_HREF,
  LocationStrategy
} from '@angular/common';

/** 配置 angular i18n **/
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { Iwe7LocationStrategy } from 'iwe7-locationstrategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'oauth',
      pathMatch: 'full'
    }]),
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    DelonABCModule.forRoot(),
    BrowserAnimationsModule,
    DelonFormModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    Iwe7StoreModule,
    Iwe7PagesModule,
    Iwe7LayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ErrorHandler, useClass: Iwe7ErrorHandler },
    { provide: LocationStrategy, useClass: Iwe7LocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
