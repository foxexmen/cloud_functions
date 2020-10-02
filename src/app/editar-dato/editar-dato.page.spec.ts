import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarDatoPage } from './editar-dato.page';

describe('EditarDatoPage', () => {
  let component: EditarDatoPage;
  let fixture: ComponentFixture<EditarDatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
