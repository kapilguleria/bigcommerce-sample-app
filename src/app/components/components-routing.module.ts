import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleAppComponent } from './sample-app/sample-app.component';

const routes: Routes = [
  { path: '', component: SampleAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
