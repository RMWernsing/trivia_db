import { AppState } from "../AppState.js";
import { Question } from "../models/QuestionModel.js";

// @ts-ignore
const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 4000
})

class QuestionsService {

  async getQuestions() {
    const response = await questionsApi.get('?amount=20&category=15')
    console.log('got questions', response.data);

    const questions = response.data.results.map(pojo => new Question(pojo))
    AppState.questions = questions
    console.log('Questions', AppState.questions);
  }

}

export const questionsService = new QuestionsService()