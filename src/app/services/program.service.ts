import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Program} from "../models/university";

@Injectable({providedIn: 'root'})
export class ProgramService {

  constructor(private http: HttpClient) {
  }

  getProgramsList(filters: string = "") {
    return this.http.get<Program[]>("http://api.24hour.yazdanra.com/programs?" + filters)
  }

  getProgram(id: string = "") {
    return this.http.get<Program>("http://api.24hour.yazdanra.com/programs/" + id)
  }

}
