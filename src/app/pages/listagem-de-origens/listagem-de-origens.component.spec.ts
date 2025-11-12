import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeOrigensComponent } from './listagem-de-origens.component';

describe('ListagemDeOrigensComponent', () => {
  let component: ListagemDeOrigensComponent;
  let fixture: ComponentFixture<ListagemDeOrigensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDeOrigensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDeOrigensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
