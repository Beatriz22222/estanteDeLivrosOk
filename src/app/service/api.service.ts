import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaxValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private chave ="AIzaSyB_uitXP6GE0n_WBNkjGwgLgQQkXcXovn0"
private caminhoPadrao="https://www.googleapis.com/books/v1/volumes?q=search+terms"


constructor(private http:HttpClient){}

searchBooks( query:string, startIndex:number=0,language: string = 'pt-BR'): Promise<any>  {

  const maxResults = 20; 
  const url = `${this.caminhoPadrao}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=${language}&key=${this.chave}`;
  return axios.get(url);
}
}