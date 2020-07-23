import { MemosService, CardInterface } from './../../services/memos.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  public disabled: boolean = false;
  public count: number = 0;


  constructor(public memosservice: MemosService, public toast: ToastController) { }

  public async showResult(success) {
    const myToast = await this.toast.create({
      message: 'Bravo vous avez gagné',
      duration: 3000,
      position: 'middle'
    });
    if (success == 6) {
      myToast.present();
    }

  }


  public pileFace(item) {
    if (this.cardsList[item].clickable) {
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
        if (this.tempId !== this.tempId2 && this.tempTitle === this.tempTitle2) {
          this.cardsList[this.tempId].face = !this.cardsList[this.tempId].face;
          this.cardsList[this.tempId2].face = !this.cardsList[this.tempId2].face;
          // On rend les element non cliquable
          this.cardsList[this.tempId].clickable = false;
          this.cardsList[this.tempId2].clickable = false;
          // si test ok on réinitialise les variables
          this.tempId = -1;
          this.tempId = -1;
          this.tempTitle = '';
          this.tempTitle2 = '';
          this.count++;
          this.showResult(this.count);
        } else {
          // si test NON ok on réinitialise les variables pour rééssayer
          this.tempId = -1;
          this.tempId = -1;
          this.tempTitle = '';
          this.tempTitle2 = '';
        }
      }
    }
  };

  public afficheAllCard(list) {
    for (let i = 0; i < list.length; i++) {
      this.cardsList[i].face = !this.cardsList[i].face;
      setTimeout(() => { this.cardsList[i].face = !this.cardsList[i].face }, 2000);
    }

  }

  ngOnInit() {
    this.cardsList = this.memosservice.getData();
    this.afficheAllCard(this.cardsList);
    this.count = 0;
  }

}
