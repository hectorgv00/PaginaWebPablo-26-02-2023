import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard/Dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Pablo Sierra Valverde, Asesor financiero', header: 'home' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
