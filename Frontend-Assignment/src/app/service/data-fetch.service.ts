import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import {ht} from '@angular/common/http'
import { userInfo } from '../interface/data';
@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<userInfo[]>(this.url);
  }
  getIdData(id) {
    return this.http.get<userInfo>(this.url + '/' + id);
  }
}
