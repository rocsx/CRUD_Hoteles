import {  Component,  OnChanges,  Input,  Output,  EventEmitter} from "@angular/core";
import {  FormGroup,  FormControl,  Validators,  FormBuilder} from "@angular/forms";
import { Observable } from "rxjs";


import { HotelService } from "../service/hotel.service";
import { CitiesService } from "../service/cities.service";
import { StatesService } from "../service/states.service";

import {StatesModel} from "../model/states.model";
import { Cities } from "../model/cities.model";
import { Hotel } from "../model/hotel.model";

@Component({
  selector: "app-edit-hotel",
  templateUrl: "./edit-hotel.component.html",
  styleUrls: ["./edit-hotel.component.css"],
  providers: [HotelService, CitiesService,StatesService]
})

export class EditHotelComponent implements OnChanges {

  // our angular form
  update_hotel_form: FormGroup;

  @Output()
  show_read_hotel_event = new EventEmitter();
  @Input()
  id_hotel;

  // list of cities
  cities: Cities[];
  // list of states
  states: StatesModel[];
  //list of status
  status1: string[];
  //list of stars
  stars: number[];

  // initialize hotel, cities & states services
  constructor(
    private hotelService: HotelService,
    private citiesService: CitiesService,
    private statesService: StatesService,
    private formBuilder: FormBuilder
  ) {
    // build angular form
    this.update_hotel_form = this.formBuilder.group({
      hotel: ["", Validators.required],
      description: ["", Validators.required],
      id_city: ["", Validators.required ],
      id_state: ["", Validators.required ],
      stars:["", Validators.required ],
      status: ["", Validators.required ]
    });
  }

  // user clicks 'update' button
  updateHotel() {
    // add hotel_id in the object so it can be updated
    this.update_hotel_form.value.id_hotel = this.id_hotel;
    // send data to server
    this.hotelService.updateHotel(this.update_hotel_form.value).subscribe(
      hotel => {
        // go back to list of products
        this.readHoteles();
      },
      error => console.log(error)
    );
  }

  // user clicks the 'read hotels' button
  readHoteles() {
    this.show_read_hotel_event.emit({ title: "Listado Hoteles" });
  }

  // call the record when 'hotel_id' was changed
  ngOnChanges() {
    // read one hotel record
    this.hotelService.readOneHotel(this.id_hotel).subscribe(hotel => {
      // put values in the form
      this.update_hotel_form.patchValue({
        hotel: hotel.hotel,
        description: hotel.description,
        id_state: hotel.id_state,
        id_city: hotel.id_city,
        stars: hotel.stars,
        status: [hotel.status]
      });
    });
  }

  // read cities from database
  ngOnInit() {
    // read cities from database
    this.citiesService.readCities().subscribe(cities => (this.cities = cities["records"]));
    // read states from database
    this.statesService.readStates().subscribe(states => this.states=states['records']);
    //read status from variable
    this.status1 = ['Activo', 'Inactivo'];
    //read stars from variable
    this.stars = [1,1.5,2,2.5,3,3.5,4,4.5,5];
  }
}
