export class Question {
  constructor(data) {
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


  get answers() {
    let answer = ''
    this.allAnswers.forEach(answer => answer += `<button>${this.allAnswers}</button>`)

    return answer
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
        <div>
          ${this.allAnswers}
        </div>
      </div>
    </div>
    `
  }
}
