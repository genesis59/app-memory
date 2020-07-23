import { MemosService, CardInterface } from './../../services/memos.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SettingsService, SettingsInterface } from 'src/app/services/settings.service';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.page.html',
  styleUrls: ['./memos.page.scss'],
})
export class MemosPage implements OnInit {
  public cardsList: CardInterface[];
  // Mémoire temp pour la première carte du couple cliqué
  public tempId: number = -1;
  public tempTitle: string;
  // Mémoire temp pour la deuxième carte du couple cliqué
  public tempId2: number = -1;
  public tempTitle2: string;
  // Permettre l'activation/désactivation de l'evenement click sur une image
  public disabled: boolean = false;
  // Compteur de couple de cartes trouvés
  public count: number = 0;

  public userConfig: SettingsInterface = {
    button: '',
    themeCards: ''
  };


  constructor(
    public memosservice: MemosService,
    public toast: ToastController,
    public settingsService: SettingsService
    ) { }

    

  // Toast vous avez gagné
  public async showResult(success) {
    const myToast = await this.toast.create({
      message: 'Bravo vous avez gagné !!!',
      duration: 3000,
      position: 'middle'
    });
    if (success == 6) {
      myToast.present();
    }

  }
  // Gestion des click sur les images
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
          // increment nombres de couples trouvés 
          this.count++;
          // Toast vous avez gagné
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
  // fonction afficher/masquer les cartes
  public afficheAllCard(list) {
    for (let i = 0; i < list.length; i++) {
      this.cardsList[i].face = !this.cardsList[i].face;
      setTimeout(() => { this.cardsList[i].face = !this.cardsList[i].face }, 2000);
    }

  }

  async ionViewWillEnter(){
    this.userConfig = await (this.settingsService.getConfig());
  }

  async ngOnInit() {
    this.cardsList = this.memosservice.getData();
    this.afficheAllCard(this.cardsList);
    this.count = 0;
  }

}
