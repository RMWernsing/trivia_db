import { AppState } from "../AppState.js";
import { Question } from "../models/QuestionModel.js";
import { Pop } from "../utils/Pop.js";

// @ts-ignore
const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 4000
})

class QuestionsService {

  checkCorrectAnswer(guess, id) {
    const question = AppState.questions

    if (guess == question.correctAnswer) {
      Pop.success(`You're a Genius!!!`)
    }
    else {
      return Pop.toast(`You're dumb. go back to school.`)
    }
  }

  async getQuestions() {
    const response = await questionsApi.get('?amount=21&category=15')
    console.log('got questions', response.data);

    const questions = response.data.results.map(pojo => new Question(pojo))
    AppState.questions = questions
    console.log('Questions', AppState.questions);
  }

}

export const questionsService = new QuestionsService()