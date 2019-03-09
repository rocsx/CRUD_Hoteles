import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // properties for child components
  title = "Hotel Detalles";
  id_hotel;

  // properties used to identify what views to show
  show_read_hotel_html = true;
  show_create_hotel_html = false;
  show_read_one_hotel_html = false;
  show_update_hotel_html = false;
  show_delete_hotel_html = false;

  showCreateHotel($event) {
    // set title
    this.title = $event.title;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_hotel_html = true;
  }
  showReadHotel($event) {    // set title
    this.title = $event.title;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_hotel_html = true;
  }

  hideAll_Html() {
    this.show_read_hotel_html = false;
    this.show_read_one_hotel_html = false;
    this.show_create_hotel_html = false;
    this.show_update_hotel_html = false;
    this.show_delete_hotel_html = false;
  }


  showReadOneHotel($event) {
    // set title and hotels ID
    this.title = $event.title;
    this.id_hotel = $event.id_hotel;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_hotel_html = true;
  }

  showDeleteHotel($event) {
    // set title and hotels ID
    this.title = $event.title;
    this.id_hotel = $event.id_hotel;
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_hotel_html = true;
  }

  // show the 'update hotels form'
  showUpdateHotel($event){
    // set title and hotels ID
    this.title=$event.title;
    this.id_hotel=$event.id_hotel;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_update_hotel_html=true;
  }


}
