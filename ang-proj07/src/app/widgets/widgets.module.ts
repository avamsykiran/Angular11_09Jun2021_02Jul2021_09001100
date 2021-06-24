import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';

@NgModule({
  declarations: [NavBarComponent, MsgBoxComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    MsgBoxComponent
  ]
})
export class WidgetsModule { }
