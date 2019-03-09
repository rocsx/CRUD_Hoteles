import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter
} from "@angular/core";
import { Observable } from "rxjs";

import { HotelService } from "../service/hotel.service";
import { CitiesService } from "../service/cities.service";
import { StatesService } from "../service/states.service";

import { StatesModel } from "../model/states.model";
import { Cities } from "../model/cities.model";
import { Hotel } from "../model/hotel.model";

@Component({
  selector: "app-read-one",
  templateUrl: "./read-one.component.html",
  styleUrls: ["./read-one.component.css"],
  providers: [CitiesService, StatesService]
})
export class ReadOneComponent implements OnInit {
  @Output()
  show_read_hotel_event = new EventEmitter();

  // @Input means it will accept value from parent component (AppComponent)
  @Input()
  id_hotel;
  // obj hotel
  hotel: Hotel;
  // list of cities
  cities: Cities[];
  // list of states
  states: StatesModel[];

  // initialize hotel service
  constructor(
    private HotelService: HotelService,
    private citiesService: CitiesService,
    private statesService: StatesService
  ) {}

  // user clicks the 'read hotel' button
  readHotel() {
    this.show_read_hotel_event.emit({ title: "Listado Hoteles" });
  }

  // call the record when 'hotel' was changed
  ngOnChanges() {
    this.HotelService.readOneHotel(this.id_hotel).subscribe(
      hotel => (this.hotel = hotel)
    );
    console.log(this.hotel);
    this.citiesService
      .readCities()
      .subscribe(cities => (this.cities = cities["records"]));
    // read states from database
    this.statesService
      .readStates()
      .subscribe(states => (this.states = states["records"]));
  }

  ngOnInit() {}
}
