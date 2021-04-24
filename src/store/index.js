import { createStoreon } from 'storeon'
import { GetTasks, AddTask, EditTask, Login } from '../api'

const State = {
    url: 'https://uxcandy.com/~shapoval/test-task-backend/v2',
    login: "",
    password: "",
    username: "",
    email: "",
    text: "",
    sort_field: "username",
    sort_direction: "asc",
    page: 1,
    add: false,
    loggedIn: false,
    editID: false,
    error: "",
    limit: 3
}

export const app = store => {
    store.on('@init', () => ({ app: State }))
    store.on('tasks/changed', ({ app }, payload) => ({
        app: { ...app, ...payload }
    }))
    store.on('get/tasks', ({ app }) => {
        try {
            GetTasks(app).then(data => store.dispatch('tasks/changed', data.message));
        } catch (err) {
            console.log(err);
        }
    })
    store.on('sort/change', ({ app }) => {
        const dir = () => {
            if (app.sort_direction === "asc") { return "desc" }
            else { return "asc" }
        }
        let res = dir();
        return { app: { ...app, sort_direction: res } }
    })
    store.on('add/task', ({ app }) => {
        try {
            AddTask(app)
                .then(res =>
                    res.status !== "ok" ? store.dispatch('tasks/changed', { error: res.message, status: res.status })
                        : store.dispatch('tasks/changed', { add: false, username: "", email: "", text: "", error: "" }
                        ))
            store.dispatch('get/tasks')
        } catch (err) {
            console.log(err);
        }
    })
    store.on('edit/task', ({ app }) => {
        try {
            EditTask(app).then(res =>
                res.status !== "ok" ? store.dispatch('tasks/changed', { error: res.message, status: res.status })
                    : store.dispatch('tasks/changed', { editID: false, text: "", status: "", error: "" }
                    ))
            store.dispatch('get/tasks')
        } catch (err) {
        }
    })
    store.on('login', ({ app }) => {
        try {
            Login(app).then(res =>
                res.status !== "ok" ? store.dispatch('tasks/changed', { error: res.message, status: res.status })
                    : store.dispatch('tasks/changed', { token: res.message.token, loggedIn: !app.loggedIn, error: "" }
                    ))
        }
        catch (err) {
            console.log(err);
        }
    })
}
export default createStoreon([
    app,
]);