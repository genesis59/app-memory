import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemosPageRoutingModule } from './memos-routing.module';

import { MemosPage } from './memos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemosPageRoutingModule
  ],
  declarations: [MemosPage]
})
export class MemosPageModule {}
