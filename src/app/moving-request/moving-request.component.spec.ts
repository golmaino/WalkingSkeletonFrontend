import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoveRequestComponent } from './moving-request.component';
import { FormsModule } from '@angular/forms';

describe('MoveRequestComponent', () => {
  let component: MoveRequestComponent;
  let fixture: ComponentFixture<MoveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MoveRequestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default move request attributes', () => {
    expect(component.oldAddress).toBeDefined();
    expect(component.newAddress).toBeDefined();
    expect(component.movingDate).toBeDefined();
  });

  it('should not submit move request if fields are empty', () => {
    spyOn(console, 'error');
    component.submitMoveRequest();
    expect(console.error).toHaveBeenCalledWith('All fields must be filled out.');
  });
});
