import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesSpaListComponent } from './components/services-spa-list/services-spa-list.component';
import { ServiceSpaComponent } from './components/service-spa/service-spa.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/spa',
    pathMatch: 'full'
  },
  {
    path: 'spa',
    component: ServicesSpaListComponent
  },
  {
    path: 'spa/:id',
    component: ServiceSpaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
