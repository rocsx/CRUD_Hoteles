//modulos angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

//componentes
import { AppComponent } from "./app.component";
import { AddHotelComponent } from "./add-hotel/add-hotel.component";
import { EditHotelComponent } from "./edit-hotel/edit-hotel.component";
import { ListHotelComponent } from "./list-hotel/list-hotel.component";

//servicios
import { HotelService } from "./service/hotel.service";
import { ReadOneComponent } from "./read-one/read-one.component";
import { DeleteHotelComponent } from "./delete-hotel/delete-hotel.component";

@NgModule({
  declarations: [
    AppComponent,
    AddHotelComponent,
    EditHotelComponent,
    ListHotelComponent,
    ReadOneComponent,
    DeleteHotelComponent
  ],
  imports: [
    FormGroup,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    Validators,
    FormBuilder
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
