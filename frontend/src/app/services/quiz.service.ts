import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { QuizModel } from '../models/quizModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ResultModel } from '../models/resultModel';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrl = " https://localhost:44396/api/recipes/getbyid?id="
  constructor(private httpClient: HttpClient) { }

  getSingleREcipe(id: number):Observable<ResultModel> {

    return this.httpClient.get<ResultModel>(this.apiUrl + id)
  }
  getQuizzes() {
    let quiz1: QuizModel[] = [{
      question: "q1?",
      answer: [{ option: "answre1", correct: false },
      { option: "answre2", correct: false },
      { option: "answre3", correct: false },
      { option: "answre4", correct: true },
      ]
    },{
      question: "q2?",
      answer: [{ option: "answre1", correct: false },
      { option: "answre2", correct: false },
      { option: "answre3", correct: false },
      { option: "answre4", correct: true },
      ]
    },{
      question: "q3?",
      answer: [{ option: "answre1", correct: false },
      { option: "answre2", correct: false },
      { option: "answre3", correct: false },
      { option: "answre4", correct: true },
      ]
    },{
      question: "q4?",
      answer: [{ option: "answre1", correct: false },
      { option: "answre2", correct: false },
      { option: "answre3", correct: false },
      { option: "answre4", correct: true },
      ]
    },
    ];
return quiz1;
  }
}
