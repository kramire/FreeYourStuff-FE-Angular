import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StuffListContainerComponent } from './containers/stuff-list-container/stuff-list-container.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'list', component: StuffListContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
