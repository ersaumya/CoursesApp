import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
@Injectable()
export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
       if(route.data["preload"]){
           return load();
       }
       else{
           of(null);
       }
  }
}