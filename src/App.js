import './App.css';
import { useStoreon } from 'storeon/react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from './components/Task'
import Modal from './components/Modal'
import Login from './components/Login'
import MyPag from './components/Pagination'
import Sort from './components/Sorting';

function App() {
  const { dispatch, app } = useStoreon('app')
  useEffect(() => {
    dispatch('get/tasks')
  }, [app.total_tasks_count, app.sort_direction, app.page, app.sort_field, app.status, dispatch])

  console.log(app);

  return (
    <div>
      { app.tasks && app.total_task_count > "0" ? <Tasks /> : <h3>No Tasks</h3>}
      { app.add
        ? <Modal title={"Создать Таск"} />
        : <Button style={{ margin: 5 }}
          variant="success"
          onClick={() => dispatch('tasks/changed', { add: !app.add })} >
          Add Task
           </Button>}
      { app.loggedIn
        ? <Login />
        : !app.token ? <Button style={{ margin: 5 }}
          onClick={() => dispatch('tasks/changed', { loggedIn: !app.loggedIn })} >
          Login
         </Button> : <Button
          onClick={() => dispatch('tasks/changed', { token: "", login: "", password: "" })}
        >Logout</Button>}

      <Sort />
      { app.page ? <MyPag /> : null}
    </div >
  );
}

export default App;
