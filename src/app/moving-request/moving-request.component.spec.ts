import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoveRequestComponent } from './moving-request.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('MoveRequestComponent', () => {
  let component: MoveRequestComponent;
  let fixture: ComponentFixture<MoveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MoveRequestComponent],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: ActivatedRoute, useValue: {} } // ✅ Fix für "No provider for ActivatedRoute!"
      ]
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
    expect(component.moveRequest.firstName).toBeDefined();
    expect(component.moveRequest.lastName).toBeDefined();
    expect(component.moveRequest.oldAddress).toBeDefined();
    expect(component.moveRequest.newAddress).toBeDefined();
    expect(component.moveRequest.movingDate).toBeDefined();
  });

  it('should not submit move request if fields are empty', () => {
    spyOn(console, 'error');
    component.submitMoveRequest();
    expect(console.error).toHaveBeenCalledWith('All fields must be filled out.');
  });

  it('should navigate to home when goToHome is called', () => {
    component.goToHome();
    expect((component as any).router.navigate).toHaveBeenCalledWith(['/']);
  });
});
