import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit,AfterViewInit {
  num:string;
  constructor(private service:CommonService) { }
  ngAfterViewInit(): void {
    this.service.sub.subscribe(e=>{this.num=e;})
  }

  ngOnInit(): void {
  }

}
