import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemModalsComponent } from './item-modals.component';

describe('ItemModalsComponent', () => {
  let component: ItemModalsComponent;
  let fixture: ComponentFixture<ItemModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
