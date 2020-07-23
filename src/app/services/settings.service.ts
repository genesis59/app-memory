import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const { Storage } = Plugins;

const STORAGE_KEY = 'configPerso';

export interface SettingsInterface {
  button: string;
  themeCards: string;
}


@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  public settings: SettingsInterface = {
    button: '',
    themeCards: ''
  };

  constructor() { }

  public save() {
    Storage.set({ key: STORAGE_KEY, value: JSON.stringify(this.settings) });
  }

  public async getConfig() {
    this.settings = JSON.parse((await Storage.get({ key: STORAGE_KEY })).value);
    if (!this.settings) {
      this.settings = { button: 'light', themeCards: 'software' };
    }
    return this.settings;
  }


}
