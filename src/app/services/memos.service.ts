import { SettingsService } from 'src/app/services/settings.service';
import { Injectable } from '@angular/core';

// Interface objet type
export interface CardInterface {
  id: number;
  title: string;
  image: string;
  face: boolean;
  clickable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MemosService {


  // --------------------- Cards software -------------------------------

  private cardsList: CardInterface[] = [
    {
      id: 1,
      title: 'Github',
      image: '/img/cards/0.png',
      face: false,
      clickable: true
    },
    {
      id: 2,
      title: 'Bower',
      image: '/img/cards/1.png',
      face: false,
      clickable: true
    },
    {
      id: 3,
      title: 'chat',
      image: '/img/cards/2.png',
      face: false,
      clickable: true
    },
    {
      id: 4,
      title: 'NodeJS',
      image: '/img/cards/3.png',
      face: false,
      clickable: true
    },
    {
      id: 5,
      title: 'Opera',
      image: '/img/cards/5.png',
      face: false,
      clickable: true
    },
    {
      id: 6,
      title: 'HTML5',
      image: '/img/cards/6.png',
      face: false,
      clickable: true
    },
    {
      id: 7,
      title: 'Github',
      image: '/img/cards/0.png',
      face: false,
      clickable: true
    },
    {
      id: 8,
      title: 'Bower',
      image: '/img/cards/1.png',
      face: false,
      clickable: true
    },
    {
      id: 9,
      title: 'chat',
      image: '/img/cards/2.png',
      face: false,
      clickable: true
    },
    {
      id: 10,
      title: 'NodeJS',
      image: '/img/cards/3.png',
      face: false,
      clickable: true
    },
    {
      id: 11,
      title: 'Opera',
      image: '/img/cards/5.png',
      face: false,
      clickable: true
    },
    {
      id: 12,
      title: 'HTML5',
      image: '/img/cards/6.png',
      face: false,
      clickable: true
    },
  ];

  // -------------------------cards animals --------------------

  private cardsListAnimals: CardInterface[] = [
    {
      id: 13,
      title: 'tigre',
      image: '/img/cards/8.png',
      face: false,
      clickable: true
    },
    {
      id: 14,
      title: 'leopard',
      image: '/img/cards/9.png',
      face: false,
      clickable: true
    },
    {
      id: 15,
      title: 'loup',
      image: '/img/cards/10.png',
      face: false,
      clickable: true
    },
    {
      id: 16,
      title: 'chien',
      image: '/img/cards/11.png',
      face: false,
      clickable: true
    },
    {
      id: 17,
      title: 'chiot',
      image: '/img/cards/12.png',
      face: false,
      clickable: true
    },
    {
      id: 18,
      title: 'mouton',
      image: '/img/cards/13.png',
      face: false,
      clickable: true
    },
    {
      id: 19,
      title: 'tigre',
      image: '/img/cards/8.png',
      face: false,
      clickable: true
    },
    {
      id: 20,
      title: 'leopard',
      image: '/img/cards/9.png',
      face: false,
      clickable: true
    },
    {
      id: 21,
      title: 'loup',
      image: '/img/cards/10.png',
      face: false,
      clickable: true
    },
    {
      id: 22,
      title: 'chien',
      image: '/img/cards/11.png',
      face: false,
      clickable: true
    },
    {
      id: 23,
      title: 'chiot',
      image: '/img/cards/12.png',
      face: false,
      clickable: true
    },
    {
      id: 24,
      title: 'mouton',
      image: '/img/cards/13.png',
      face: false,
      clickable: true
    },
  ];

  constructor(private settingsService: SettingsService) { }

  // mélange des éléments d'un tableau
  private shuffle() {
    let temp;
    let randomPosition;
    for (let position in this.cardsList) {
      randomPosition = Math.floor(Math.random() * this.cardsList.length);
      temp = this.cardsList[position];
      this.cardsList[position] = this.cardsList[randomPosition];
      this.cardsList[randomPosition] = temp;
    }
  }
  // Renvoie un tableau cardList mélangé
  public getData() {
    this.shuffle();
    return JSON.parse(JSON.stringify(this.cardsList));
  }
}
