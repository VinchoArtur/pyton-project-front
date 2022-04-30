import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HolidayComponent} from './components/holiday/holiday.component';
import {appReducers} from './store/holidays.store';
import {StoreModule} from '@ngrx/store';
import {HolidayEffects} from './store/effects/holidays.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AboutComponent} from './components/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { HolidayItemComponent } from './components/holiday/components/holiday-item/holiday-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent,
    HolidayComponent,
    AboutComponent,
    HolidayItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([HolidayEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    HttpClientModule
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
