import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {HolidayComponent} from './components/holiday/holiday.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent, children: [
      {path: 'holiday', component: HolidayComponent},
      {path: 'about', component: AboutComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
