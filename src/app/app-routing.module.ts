import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StuffListComponent } from './components/stuff-list/stuff-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'getStuff', component: StuffListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
