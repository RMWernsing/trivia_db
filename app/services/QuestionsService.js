import { AppState } from "../AppState.js";
import { Question } from "../models/QuestionModel.js";
import { Pop } from "../utils/Pop.js";

// @ts-ignore
const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 4000
})

class QuestionsService {


  async getQuestions() {
    const response = await questionsApi.get('?amount=21&category=15')
    console.log('got questions', response.data);

    const questions = response.data.results.map(pojo => new Question(pojo))
    AppState.questions = questions
    console.log('Questions', AppState.questions);
  }

  checkCorrectAnswer(guess, id) {
    const questions = AppState.questions
    const foundQuestions = questions.find(question => id == question.id)

    if (guess == foundQuestions.correctAnswer) {
      Pop.success(`You're a Genius!!!`)
    }
    else {
      Pop.toast(`You're dumb. go back to school.`)
    }
  }

}

export const questionsService = new QuestionsService()