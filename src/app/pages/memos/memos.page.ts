import { MemosService, CardInterface } from './../../services/memos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.page.html',
  styleUrls: ['./memos.page.scss'],
})
export class MemosPage implements OnInit {

  public cardsList: CardInterface[];
  public tempId: number = -1;
  public tempTitle: string;
  public tempId2: number = -1;
  public tempTitle2: string;


  constructor(public memosservice: MemosService) { }


  public pileFace(item) {
    this.cardsList[item].face = !this.cardsList[item].face;
    setTimeout(() => { this.cardsList[item].face = !this.cardsList[item].face }, 500);
    
    if (this.tempId == -1) {
      // Premier carte du couple
      this.tempId = item;
      this.tempTitle = this.cardsList[item].title;
    } else {
      // Si première carte déjà retourner
      this.tempId2 = item;
      this.tempTitle2 = this.cardsList[item].title;
      // test si les deux cartes sont identiques mais avec un id différent
      if (this.tempId !== this.tempId2 && this.tempTitle===this.tempTitle2 ){
        this.cardsList[this.tempId].face = !this.cardsList[this.tempId].face;
        this.cardsList[this.tempId2].face = !this.cardsList[this.tempId2].face;
        // si test ok on réinitialise les variables
        this.tempId =-1;
        this.tempId =-1;
        this.tempTitle ='';
        this.tempTitle2 ='';
      } else {
        // si test NON ok on réinitialise les variables pour rééssayer
        this.tempId =-1;
        this.tempId =-1;
        this.tempTitle ='';
        this.tempTitle2 ='';
      }
    }
  };

  ngOnInit() {
    this.cardsList = this.memosservice.getData();
  }

}
