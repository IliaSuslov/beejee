import React, { useState } from 'react'
import { Modal, FormControl, Form, Button } from 'react-bootstrap'
import { useStoreon } from 'storeon/react'

function Edit() {
    const { dispatch, app } = useStoreon('app')
    let EDIT = app.editID === false ? false : true
    const [show] = useState(EDIT);

    const statuses = [
        { key: 0, name: "задача не выполнена" },
        { key: 1, name: "задача не выполнена, отредактирована админом" },
        { key: 10, name: "задача выполнена" },
        { key: 11, name: "задача отредактирована админом и выполнена" },
    ]
    return (
        <Modal show={show} onHide={() => dispatch('tasks/changed', { editID: !app.editID, error: "", new: "false" })}>
            <Modal.Header closeButton>
                <Modal.Title>Изменить Таск</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="Text">
                        <FormControl
                            placeholder="Text"
                            aria-label="Text"
                            value={app.text}
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { text: e.target.value, new: "true" })}
                        />
                        <Form.Text className="text-danger">{app.error["text"]}</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control
                            as="select"
                            multiple={false}
                            onChange={(e) => dispatch('status/changed', { status: e.target.value })}
                        >
                            {
                                statuses.map(
                                    (s, i) => <option key={i}>
                                        {s.name}
                                    </option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Text className="text-danger">
                        {app.error["status"]}
                    </Form.Text>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    dispatch('tasks/changed', { editID: false, error: "", new: "false" })
                }}>
                    Закрыть
          </Button>
                <Button variant="primary" onClick={() => {
                    dispatch('edit/task');
                }}>
                    Сохранить
          </Button>
            </Modal.Footer>
        </Modal >
    );
}
export default Edit