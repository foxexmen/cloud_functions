import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearDatoPage } from './crear-dato.page';

describe('CrearDatoPage', () => {
  let component: CrearDatoPage;
  let fixture: ComponentFixture<CrearDatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearDatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
