import { addNewQuiz, addNewUser, getQuizByName, getQuizzes, getUsers, getUserWithId, login, logout } from '../controllers/controller'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)

        .post(addNewUser);

    app.route('/users/:userID')
        .get(getUserWithId);

    app.route('/login')
        .post(login);

    app.route('/logout')
        .delete(logout);

    app.route('/quiz')
        .get(getQuizzes)

        .post(addNewQuiz);

    app.route('/quizByName')
        .post(getQuizByName);
}

export default routes