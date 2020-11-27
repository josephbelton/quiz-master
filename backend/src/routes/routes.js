import { addNewQuiz, addNewUser, deleteUsers, getQuizByName, getQuizzes, getUsers, getUserWithId, deleteQuizzes, login, logout } from '../controllers/controller'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        .delete(deleteUsers)
        .post(addNewUser);

    app.route('/users/:userID')
        .get(getUserWithId);

    app.route('/login')
        .post(login);

    app.route('/logout')
        .delete(logout);

    app.route('/quiz')
        .get(getQuizzes)
        .delete(deleteQuizzes)
        .post(addNewQuiz);

    app.route('/quizByName')
        .post(getQuizByName);
}

export default routes