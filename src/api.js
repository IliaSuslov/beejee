export const GetTasks = async (app) => {
    const TasksURL = app.url + `/?developer=IliaS&sort_field=${app.sort_field}&sort_direction=${app.sort_direction}&page=${app.page}`;
    const resp = await fetch(TasksURL, {
        method: 'GET',
    })
    return resp.json()
}

export const AddTask = async (app) => {
    const AddTask = app.url + '/create?developer=IliaS';

    const Taskform = new FormData();
    Taskform.append("username", app.username);
    Taskform.append("email", app.email);
    Taskform.append("text", app.text);

    const resp = await fetch(AddTask, {
        method: 'POST',
        body: Taskform
    })
    return resp.json()
}

export const EditTask = async (app) => {
    const AddTask = app.url + `/edit/${app.editID}?developer=IliaS`;
    console.log(app.token);
    const Taskform = new FormData();
    Taskform.append("text", app.text);
    Taskform.append("status", app.status);
    Taskform.append("token", app.token);

    const resp = await fetch(AddTask, {
        method: 'POST',
        body: Taskform
    })
    return resp.json()
}
export const Login = async (app) => {
    const loginURL = app.url + '/login?developer=IliaS';
    const Loginform = new FormData();
    Loginform.append("username", app.login)
    Loginform.append("password", app.password)

    const resp = await fetch(loginURL, {
        method: 'POST',
        body: Loginform,
    })
    return resp.json()
}