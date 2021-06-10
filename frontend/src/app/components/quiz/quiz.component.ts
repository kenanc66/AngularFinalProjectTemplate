import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { QuizModel } from 'src/app/models/quizModel';
import { ResultModel } from 'src/app/models/resultModel';
import { QuizService } from 'src/app/services/quiz.service';
//import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
 
  
  quizzes: QuizModel[] = [];
  currentQuiz = 0;
  totalAnswer=0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  result = false;
  resultText="";
  final=false;
  products: Product;
  constructor( private quizService:QuizService ) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }

  onAnswer(option: boolean) {
   this.totalAnswer++;
    if (this.currentQuiz !== this.quizzes.length-1) {
      this.currentQuiz++;
    }
         
    if (option) {
      this.correctAnswer++;
    } else {
      this.incorrectAnswer++;
    }  
    if (this.totalAnswer===4) {
      this.result==true;
      if (this.correctAnswer==0) {
        this.quizService.getSingleREcipe(5006).subscribe(response=>{    
          this.products=response.data;
        console.log(this.products) })
      }else if (this.correctAnswer==1) {
        this.quizService.getSingleREcipe(5016).subscribe(response=>{    
          this.products=response.data })
          console.log(this.products)
      }
      else if (this.correctAnswer==2) {
        this.quizService.getSingleREcipe(5008).subscribe(response=>{    
          this.products=response.data })
          console.log(this.products)
      }
      else if (this.correctAnswer==3) {
        this.quizService.getSingleREcipe(5007).subscribe(response=>{    
          this.products=response.data })
          console.log(this.products)
      }
      else if (this.correctAnswer==4) {
        this.quizService.getSingleREcipe(5010).subscribe(response=>{    
          this.products=response.data })
          console.log(this.products)
      }
      // this.resultText="sonuşç2"
      this.final =true;
    }
    
  }

  showResult() {
    // if (this.currentQuiz == this.quizzes.length) 
    
      this.result = true;
    
  }
  

}
