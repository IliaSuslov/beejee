var fetch = require("node-fetch")
var FormData = require('form-data');

const baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2'

const AddTask = async (app) => {
    const AddTask = baseURL + '/?developer=Ilia?create';

    const Taskform = new FormData();
    Taskform.append("username", 'Test');
    Taskform.append("email", 'mail@mail.com');
    Taskform.append("text", 'test text');

    const resp = await fetch(AddTask, {
        method: 'POST',
        // headers: {
        //     // 'crossDomain': true,
        //     "MIME-type": "multipart/form-data",
        //     // "Content-type": false,
        //     // "Process-data": false,
        //     // "Data-type": 'json'
        // },
        data: Taskform
    })
    return resp
}
const test = () => {
    AddTask().then(console.log);
}
test()
