import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemosPage } from './memos.page';

describe('MemosPage', () => {
  let component: MemosPage;
  let fixture: ComponentFixture<MemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
