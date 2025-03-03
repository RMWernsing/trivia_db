import { generateId } from "../utils/GenerateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.allAnswers = data.incorrect_answers
    this.allAnswers.push(this.correctAnswer)
    // this.allAnswers.splice(Math.round(Math.random), this.correctAnswer)
    this.allAnswers.sort(() => Math.random() - .5)
  }


  get answersButtons() {
    let content = ''
    this.allAnswers.forEach(answer => content += `<button onclick="app.questionsController.checkAnswer('${answer}', '${this.id}')" type="button" class="btn btn-light mx-1 mt-2">${answer}</button>`)

    return content
  }

  get questionsTemplate() {
    return `
    <div class="col-md-4">
      <div class="my-3 bg-dark text-light p-3 rounded">
        <p class="text-capitalize">
          question 1: ${this.category} - ${this.difficulty}
        </p>
        <p class="fs-5">
          ${this.question}
        </p>
        <div class="d-flex justify-content-center">
          ${this.answersButtons}
        </div>
      </div>
    </div>
    `
  }
}
