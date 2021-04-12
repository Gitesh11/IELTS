import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../IProducts';
import{map} from 'rxjs/operators'
import { Observable } from 'rxjs';


function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  get nativeWindow() : any {
    return _window();
 }
  constructor(private http:HttpClient) { }
  getAllProperties() :Observable<IProducts[]>{
    return this.http.get('/Data/products.json').pipe(
      map(data=>{
        const productsArray:Array<IProducts>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            productsArray.push(data[id])
          }

        }
      
        return productsArray;
      })
    )
  }
}
