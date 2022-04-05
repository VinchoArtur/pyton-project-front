
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
  NbListModule, NbMenuModule,
  NbMenuService,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbMenuInternalService} from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent
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
    NbListModule
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
