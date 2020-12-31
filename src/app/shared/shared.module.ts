import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    ToastrModule,
    NgxUiLoaderModule
  ]
})
export class SharedModule { }
