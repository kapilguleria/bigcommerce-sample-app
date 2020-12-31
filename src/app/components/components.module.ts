import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SampleAppComponent } from './sample-app/sample-app.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SampleAppComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule
  ]
})
export class ComponentsModule { }
