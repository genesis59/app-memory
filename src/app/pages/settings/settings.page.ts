import { Component, OnInit } from '@angular/core';
import { SettingsService, SettingsInterface } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public userConfig: SettingsInterface = {
    button: 'primary',
    themeCards: 'software'
  };

  constructor(public settingsService: SettingsService) { }

  async ionViewWillEnter() {
    this.userConfig = await (this.settingsService.getConfig());
  }

  async ngOnInit() {
    
  }

}
