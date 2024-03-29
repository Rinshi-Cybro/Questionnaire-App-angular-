import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private Url:any='http://localhost:3000/quiz';

  constructor(private http: HttpClient) { }

  postQuiz(data:any){

    return this.http.post<any>(`${this.Url}`,data)
    // return this.http.post<any>('http://localhost:3000/quiz', data);
  }

  getQuiz(){
    
    return this.http.get<any>(`${this.Url}`)
    // return this.http.get<any>('http://localhost:3000/quiz')
  }

}
