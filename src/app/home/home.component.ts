import { Component, OnInit } from '@angular/core';

declare var jQuery: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    public iscollapse = false;
  constructor() {
   }

  ngOnInit() {
    jQuery(document).ready(function( $ ) {
      $("#hero .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
  });
});
  }

}
