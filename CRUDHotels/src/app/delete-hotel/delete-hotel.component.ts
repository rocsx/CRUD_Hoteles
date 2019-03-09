import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HotelService } from '../service/hotel.service';
import { Observable} from 'rxjs';
import { Hotel } from '../model/hotel.model';


@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css'],
  providers: [HotelService]
})
export class DeleteHotelComponent {

    /*
        @Output will tell the parent component (AppComponent)
        that an event has happened (via .emit(), see readHotels() method below)
    */
   @Output() show_read_hotel_event = new EventEmitter();

   // @Input enable getting the Hotel_id from parent component (AppComponent)
   @Input() id_hotel;

   // initialize Hotel service
   constructor(private hotelService: HotelService){}

   // user clicks 'yes' button
   deleteHotel(){
       // delete data from database
       this.hotelService.deleteHotel(this.id_hotel)
           .subscribe(
                Hotel => {

                   // show an alert to tell the user if Hotel was created or not
                   console.log(Hotel);

                   // go back to list of Hotels
                   this.readHotels();
                },
                error => console.log(error)
            );
   }

   // user clicks the 'read Hotels' button
   readHotels(){
       this.show_read_hotel_event.emit({ title: "Lista Hoteles" });
   }


}

