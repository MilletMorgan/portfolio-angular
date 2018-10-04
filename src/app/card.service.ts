import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Card } from './card';
import { CARDS } from './mock-cards';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })

export class CardService {

  constructor(private messageService: MessageService) { }

  getCards(): Observable<Card[]> {
    this.messageService.add('CardService: fetched cards');
    return of (CARDS);
  }

  getCard(id: number): Observable<Card> {
    this.messageService.add('CardService: fetched card id=$(id)');
    return of (CARDS.find(card => card.id === id));
  }
}
