import { Component, OnInit } from '@angular/core';

declare var marqueeInit: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
    new marqueeInit({
      uniqueid: 'mycrawler1',
      style: {
        'padding': '2px',
      },
      inc: 5, //speed - pixel increment for each iteration of this marquee's movement
      mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
      moveatleast: 2,
      neutral: 150,
      savedirection: true,
      random: false
    });
  }

}
