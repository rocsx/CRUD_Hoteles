import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Hotel } from "../model/hotel.model";

@Injectable()
export class HotelService {
  constructor(private _http: Http) {}
  baseUrl: string = "http://localhost:8080/CRUD/CRUDHotels/deploy/api/hotels/";

  // Get list of products from remote server.
  getHotel(): Observable<Hotel[]> {
    return this._http
      .get(this.baseUrl + "read.php")
      .pipe(map((res: Response) => res.json()));
  }

  // Send hotels data to remote server to create it.
  createHotel(hotel): Observable<Hotel> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(this.baseUrl + "create.php", hotel, options)
      .pipe(map((res: Response) => res.json()));
  }

  // Get a hotels details from remote server.
  readOneHotel(id_hotel): Observable<Hotel> {
    return this._http
      .get(this.baseUrl + "read_one.php?id_hotel=" + id_hotel)
      .pipe(map((res: Response) => res.json()));
  }

  updateHotel(Hotel): Observable<Hotel> {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this._http
      .post(this.baseUrl + "update.php", Hotel, options)
      .pipe(map((res: Response) => res.json()));
  }

  // Send hotels ID to remote server to delete it.
  deleteHotel(id_hotel) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this._http
      .post(this.baseUrl + "delete.php", { id_hotel: id_hotel }, options)
      .pipe(map((res: Response) => res.json()));
  }
}
