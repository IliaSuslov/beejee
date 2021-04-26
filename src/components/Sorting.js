import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { useStoreon } from 'storeon/react'

const Sort = () => {
    const { dispatch, app } = useStoreon('app')
    return (
        <div>
            <h4>Сортировка</h4>
            < Button
                style={{ margin: 5 }}
                onClick={() => dispatch('sort/change')}
            >{app.sort_direction === "asc" ? "ASC" : "DESC"}
            </Button>

            <Dropdown style={{ margin: 5 }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch('tasks/changed', { sort_field: "id" })}>ID</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch('tasks/changed', { sort_field: "username" })}>Username</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch('tasks/changed', { sort_field: "email" })}>Email</Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch('tasks/changed', { sort_field: "status" })}>Status</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div >

    )
}

export default Sort