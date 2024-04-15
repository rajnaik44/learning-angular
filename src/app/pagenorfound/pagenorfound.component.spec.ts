import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenorfoundComponent } from './pagenorfound.component';

describe('PagenorfoundComponent', () => {
  let component: PagenorfoundComponent;
  let fixture: ComponentFixture<PagenorfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenorfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagenorfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
