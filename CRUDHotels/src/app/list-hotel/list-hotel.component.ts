import {Router} from "@angular/router";
import {HotelService} from "../service/hotel.service";
import {Hotel} from "../model/hotel.model";
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: "app-list-hotel",
  templateUrl: "./list-hotel.component.html",
  styleUrls: ["./list-hotel.component.css"],
  providers: [HotelService]
})
export class ListHotelComponent implements OnInit {
  // store list of Hotels
  hotels: Hotel[];

  // initialize HotelService to retrieve list Hotels in the ngOnInit()
  constructor(private hotelService: HotelService) {
  }

  @Output()
  show_create_hotel_event = new EventEmitter();
  @Output()
  show_read_one_hotel_event = new EventEmitter();
  @Output()
  show_update_hotel_event = new EventEmitter();
  @Output()
  show_delete_hotel_event = new EventEmitter();

  // methods that we will use later
  // when user clicks the 'create' button
  createHotel() {
    // tell the parent component (AppComponent)  
    this.show_create_hotel_event.emit({
      title: "Crear Hotel"
    });
  }

  readOneHotel(id_hotel) {
    console.log("rp comp readOneHotel");
    // tell the parent component (AppComponent)
    this.show_read_one_hotel_event.emit({
      id_hotel: id_hotel,
      title: "Detalle De Hotel"
    });
  }

  updateHotel(id_hotel) { 
    // tell the parent component (AppComponent)
    this.show_update_hotel_event.emit({
      id_hotel: id_hotel,
      title: "Editar Hotel"
    });
  }

  // when user clicks the 'delete' button
  deleteHotel(id_hotel) { 
    // tell the parent component (AppComponent)
    this.show_delete_hotel_event.emit({
      id_hotel: id_hotel,
      title: "Eliminar Hotel"
    });
  }

  // Read Hotels from API.
  ngOnInit() {
    this.hotelService.getHotel()
      .subscribe(hotels => (this.hotels = hotels["records"]));
  }
}
