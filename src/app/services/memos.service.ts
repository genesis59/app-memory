import { Injectable } from '@angular/core';


export interface CardInterface {
  id: number;
  title: string;
  image: string;
  face: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MemosService {

  private cardsList: CardInterface[] = [
    {
      id: 1,
      title: 'Github',
      image: '/img/cards/0.png',
      face: false
    },
    {
      id: 2,
      title: 'Bower',
      image: '/img/cards/1.png',
      face: false
    },
    {
      id: 3,
      title: 'chat',
      image: '/img/cards/2.png',
      face: false
    },
    {
      id: 4,
      title: 'NodeJS',
      image: '/img/cards/3.png',
      face: false
    },
    {
      id: 5,
      title: 'Opera',
      image: '/img/cards/5.png',
      face: false
    },
    {
      id: 6,
      title: 'HTML5',
      image: '/img/cards/6.png',
      face: false
    },
    {
      id: 7,
      title: 'Github',
      image: '/img/cards/0.png',
      face: false
    },
    {
      id: 8,
      title: 'Bower',
      image: '/img/cards/1.png',
      face: false
    },
    {
      id: 9,
      title: 'chat',
      image: '/img/cards/2.png',
      face: false
    },
    {
      id: 10,
      title: 'NodeJS',
      image: '/img/cards/3.png',
      face: false
    },
    {
      id: 11,
      title: 'Opera',
      image: '/img/cards/5.png',
      face: false
    },
    {
      id: 12,
      title: 'HTML5',
      image: '/img/cards/6.png',
      face: false
    },
  ];

  constructor() { }


  private shuffle() {
    let temp;
    let randomPosition;
    for (let position in this.cardsList){
      randomPosition = Math.floor(Math.random() * this.cardsList.length);
      temp = this.cardsList[position];
      this.cardsList[position] = this.cardsList[randomPosition];
      this.cardsList[randomPosition] = temp;
    }
  }
  public getData() {
    this.shuffle();
    return JSON.parse(JSON.stringify(this.cardsList));
  }
}
