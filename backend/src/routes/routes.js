import { addNewUser, getUsers, getUserWithId, login, logout } from '../controllers/controller'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)

        .post(addNewUser);

    app.route('/users/:userID')
        .get(getUserWithId);

    app.route('/login')
        .post(login);

    app.route('/logout')
        .delete(logout)
}

export default routes