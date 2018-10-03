import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    $(".scrollTo").click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
      return false;
    });
  }
}