import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Edit from './Edit'
import { useStoreon } from 'storeon/react'

const Task = () => {
    const { dispatch, app } = useStoreon('app')
    const { tasks, token, editID } = app

    let checkStatus = (status) => {
        switch (status) {
            case 0:
                return "задача не выполнена";
            case 1:
                return "задача не выполнена, отредактирована админом";
            case 10:
                return "задача выполнена";
            case 11:
                return "задача отредактирована админом и выполнена";
            default:
                return status;
        }
    }
    return (
        <>
            { tasks.map((v, i) =>
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Username: {v.username}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email: {v.email}</Card.Subtitle>
                        <Card.Text>
                            Text: {v.text} <br />
                    Status: {checkStatus(v.status)}
                        </Card.Text>
                        {token ? <Button onClick={() => {
                            dispatch('tasks/changed', { editID: v.id, text: v.text, status: v.status })
                        }} style={{ verticalAlign: 'top' }}>Edit</Button> : null}
                    </Card.Body>
                </Card>
            )}
            { editID ? <Edit /> : null}
        </>
    )
}

export default Task