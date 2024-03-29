import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public quizForm!: FormGroup
  subtotal: number = 0;

  constructor(private fb:FormBuilder, private route:Router,
    private api:ApiService){
    this.quizForm = this.fb.group({
      user: ['', Validators.required],
      opt1: ['', Validators.required],
      opt2: ['', Validators.required],
      opt3: ['', Validators.required],
      opt4: ['', Validators.required],
      opt5: ['', Validators.required],
      subtotal: [null]
    })
    sessionStorage.clear()
  }

  users: any = ['', 'User-1', 'User-2', 'User-3', 'User-4', 'User-5']
  qstn1: any = ['a. <a>', 'b. <pre>', 'c. <br>', 'd. <b>']
  qstn2: any = ['a. <a>', 'b. <br>', 'c. <b>', 'd. <pre>']
  qstn3: any = ['a. <a link = www.thinkandlearn.com> thinkandlearn.com </a>', 'b. <a> www.thinkandlearn.com <thinkandlearn.com /a>', 'c. <a href = www.thinkandlearn.com> thinkandlearn.com </a>', 'd. <a url = “www.thinkandlearn.com” thinkandlearn.com /a>']
  qstn4: any = ['a. <img src = “jtp.png” />', 'b. <img href = “jtp.png” />', 'c. <img link = “jtp.png” />', 'd. <img url = “jtp.png” />']
  qstn5: any = ['a. <list>', 'b. <option>', 'c. <dropdown>', 'd. <select>']

  nextButtonClicked = false;

  q1show = false
  q2show = false
  q3show = false
  q4show = false
  q5show = false

  click() {
    this.quizForm
  }

  q1start() {
    this.q1show = !this.q1show
    this.nextButtonClicked = true
  }

  q2start() {
    this.q1show = !this.q1show
    this.q2show = !this.q2show
  }

  q3start() {
    this.q2show = !this.q2show
    this.q3show = !this.q3show
  }

  q4start() {
    this.q3show = !this.q3show
    this.q4show = !this.q4show
  }

  q5start() {
    this.q4show = !this.q4show
    this.q5show = !this.q5show
  }

  // function to calculate the subtotal
  calculateSubtotal() {
    let subtotal:any = 0;
    const answers = [this.quizForm.value.opt1, this.quizForm.value.opt2, this.quizForm.value.opt3, this.quizForm.value.opt4, this.quizForm.value.opt5];

    // Assign points based on the correct answers for each question
    if (answers[0] === 'd. <b>') {
      subtotal += 10;
    }

    if (answers[1] === 'b. <br>') {
      subtotal += 10;
    }

    if (answers[2] === 'c. <a href = www.thinkandlearn.com> thinkandlearn.com </a>') {
      subtotal += 10;
    }

    if (answers[3] === 'a. <img src = “jtp.png” />') {
      subtotal += 10;
    }

    if (answers[4] === 'b. <option>') {
      subtotal += 10;
    }

    this.subtotal = subtotal;
    sessionStorage.setItem('subtotal', subtotal);

  }

  onSubmit(){
    this.calculateSubtotal();
    this.api.postQuiz(this.quizForm.value).subscribe((res)=>{
      alert('You have completed the Quiz')
      console.log('Form value:', this.quizForm.value);
      this.route.navigate(['result'])
    })
  }

}
