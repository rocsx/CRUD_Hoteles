import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { HotelService } from "../service/hotel.service";
import { CitiesService } from "../service/cities.service";
import { StatesService } from "../service/states.service";

import { StatesModel } from "../model/states.model";
import { Cities } from "../model/cities.model";

@Component({
  selector: "app-add-hotel",
  templateUrl: "./add-hotel.component.html",
  styleUrls: ["./add-hotel.component.css"],
  providers: [HotelService, CitiesService, StatesService]
})
export class AddHotelComponent {
  // our angular form
  create_hotel_form: FormGroup;

  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output()
  show_read_hotel_event = new EventEmitter();

  // list of cities
  cities: Cities[];
  // list of states
  states: StatesModel[];

  status1: string[];
  //list of stars
  stars: number[];

  // initialize 'hotels service', 'category service' and 'form builder'
  constructor(
    private hotelService: HotelService,
    private citiesService: CitiesService,
    private statesService: StatesService,
    formBuilder: FormBuilder
  ) {
    // based on our html form, build our angular form
    this.create_hotel_form = formBuilder.group({
      id_hotel: [],
      hotel: ["", Validators.required],
      description: ["", Validators.required],
      id_city: ["", Validators.required],
      id_state: ["", Validators.required],
      stars: ["", Validators.required],
      status: ["", Validators.required]
    });
  }

  // user clicks 'create' button
  createHotel() {
    // send data to server
    this.hotelService.createHotel(this.create_hotel_form.value).subscribe(
      hotels => {
        // show an alert to tell the user if hotels was created or not
        console.log(hotels);

        // go back to list of products
        this.readHotels();
      },
      error => console.log(error)
    );
  }

  // user clicks the 'read products' button
  readHotels() {
    this.show_read_hotel_event.emit({ title: "Detalles Hoteles" });
  }

  // what to do when this component were initialized
  ngOnInit() {
    this.citiesService
      .readCities()
      .subscribe(cities => (this.cities = cities["records"]));
    // read states from database
    this.statesService
      .readStates()
      .subscribe(states => (this.states = states["records"]));

    this.status1 = ["Activo", "Inactivo"];
    //read stars from variable
    this.stars = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  }
}
