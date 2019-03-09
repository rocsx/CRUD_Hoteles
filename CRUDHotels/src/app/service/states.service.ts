import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { StatesModel } from "../model/states.model";

@Injectable()

// Service for categories data.
export class StatesService {
  // We need Http to talk to a remote server.
  constructor(private _http: Http) {}
  baseUrl: string = "http://localhost:8080/CRUD/CRUDHotels/deploy/api/states/";

  // Get list of categories from database via api.
  readStates(): Observable<StatesModel[]> {
    return this._http
      .get(this.baseUrl + "read.php")
      .pipe(map((res: Response) => res.json()));
  }
}
