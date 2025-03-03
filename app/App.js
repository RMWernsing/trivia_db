import { ExampleController } from './controllers/ExampleController.js';
import { QuestionsController } from './controllers/QuestionsController.js';


class App {

  questionsController = new QuestionsController

}

window['app'] = new App()


