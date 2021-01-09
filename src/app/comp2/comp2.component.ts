import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit,AfterContentInit {

  num:string;
  
  constructor(private service:CommonService) { }
  ngAfterContentInit(): void {
    this.service.sub.subscribe(e=>{this.num=e;})
  }

  ngOnInit(): void {
  }

}
