import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPaperComponent } from './graph-paper.component';

describe('GraphPaperComponent', () => {
  let component: GraphPaperComponent;
  let fixture: ComponentFixture<GraphPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
