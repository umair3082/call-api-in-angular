import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { genreDTO } from '../models/mymodel/mymodel.module';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  constructor(private Http:HttpClient) {


   }
getAll():Observable<genreDTO[]>{

// return [{id:1,name:'Umair'},{id:2,name:'Rehman'}]

return  this.Http.get<genreDTO[]>("https://dummy.restapiexample.com/api/v1/employees");
// return this.Http.get<genreDTO[]>("https://dummy.restapiexample.com/api/v1/employees");
}

}
