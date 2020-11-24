import { addNewUser, getUsers, getUserWithId, login } from '../controllers/controller'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)

        .post(addNewUser);

    app.route('/users/:userID')
        .get(getUserWithId);

    app.route('/login')
        .post(login);
}

export default routes