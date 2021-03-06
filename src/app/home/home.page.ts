import { SettingsService, SettingsInterface } from 'src/app/services/settings.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userConfig: SettingsInterface = {
    button: 'primary',
    themeCards: 'software'
  };

  constructor(private settingsService: SettingsService) {}

  async ionViewWillEnter(){
    this.userConfig = await (this.settingsService.getConfig());
  }

  async ngOnInit() {
    
  }

}
