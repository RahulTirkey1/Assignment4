import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component implements OnInit {

  num:string;
  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }

  change()
  {
    this.service.sub.next(this.num);
  }

}
