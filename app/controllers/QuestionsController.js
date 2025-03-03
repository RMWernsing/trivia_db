import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";

export class QuestionsController {
  constructor() {
    AppState.on('questions', this.drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {

    try {
      await questionsService.getQuestions()
      Pop.success('successful request of questions')
    } catch (error) {
      console.error('could not get questions from api', error)
      Pop.error(error, 'could not get questions')
    }
  }

  drawQuestions() {
    const questions = AppState.questions
    let questionCardContent = ''
    questions.forEach(question => questionCardContent += question.questionsTemplate)
    const questionCardElem = document.getElementById('questionCard')
    questionCardElem.innerHTML = questionCardContent
  }


} 