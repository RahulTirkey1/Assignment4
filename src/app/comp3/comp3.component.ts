import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit,AfterViewInit {
  num:string;
  constructor(private service:CommonService) { }
  ngAfterViewInit(): void {
    this.service.sub.subscribe(e=>{this.num=e;})
  }

  ngOnInit(): void {
  }

}
