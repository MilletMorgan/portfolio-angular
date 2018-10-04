import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();

    $(".scrollTo").click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
      return false;
    });
  }

  getCards(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards)
  }
}