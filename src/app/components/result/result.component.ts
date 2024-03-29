import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],

})
export class ResultComponent implements OnInit {
  
  quizData: any = []
  userResult = 0
  total:any

  constructor(private api:ApiService){ }
  
  getUserQuiz(){
    this.api.getQuiz().subscribe((res)=>{
      console.log(res)
      this.quizData = res
      console.log(this.quizData)
    })
  }

  ngOnInit(): void{
    this.getUserQuiz();
    this.subtotal
    this.total = sessionStorage.getItem('subtotal');
  }

  correctAns1 = 'd. <b>'
  correctAns2 = 'b. <br>'
  correctAns3 = 'c. <a href = www.thinkandlearn.com> thinkandlearn.com </a>'
  correctAns4 = 'a. <img src = “jtp.png” />'
  correctAns5 = 'b. <option>'
  subtotal: number = this.userResult
   
}
