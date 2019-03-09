import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddHotelComponent } from "./add-hotel.component";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
describe("AddHotelComponent", () => {
  let component: AddHotelComponent;
  let fixture: ComponentFixture<AddHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddHotelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
