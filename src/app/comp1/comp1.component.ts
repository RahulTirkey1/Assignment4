import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,AfterContentInit {

  num:string;

  constructor(private service:CommonService) { }
  ngAfterContentInit(): void {
    this.service.sub.subscribe(e=>{this.num=e;})
  }

  ngOnInit(): void {
  }
  

}
