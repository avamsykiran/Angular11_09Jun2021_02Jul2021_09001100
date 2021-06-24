import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  isError:boolean;

  isDismissed:boolean;

  constructor() { 
    this.isError=false;
    this.isDismissed=false;
  }

  ngOnInit(): void {
  }

  dismiss(){
    this.isDismissed=true;
  }
}
