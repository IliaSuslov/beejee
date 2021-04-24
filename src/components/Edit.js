import React, { useState } from 'react'
import { Modal, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { useStoreon } from 'storeon/react'

function Edit() {
    const { dispatch, app } = useStoreon('app')
    let EDIT = app.editID === false ? false : true
    const [show] = useState(EDIT);
    // console.log(app.token);
    return (
        <Modal show={show} onHide={() => dispatch('tasks/changed', { editID: !app.editID, error: "" })}>
            <Modal.Header closeButton>
                <Modal.Title>Изменить Таск</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <FormControl
                            placeholder="Text"
                            aria-label="Text"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { text: e.target.value })}
                        />
                        <Form.Text className="text-danger">{app.error["text"]}</Form.Text>
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Status"
                            aria-label="Status"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { status: e.target.value })}
                        />
                    </InputGroup>
                    <Form.Text className="text-danger">
                        {app.error["status"]}
                    </Form.Text>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    dispatch('tasks/changed', { editID: false, error: "" })
                }}>
                    Закрыть
          </Button>
                <Button variant="primary" onClick={() => {
                    dispatch('edit/task');
                }}>
                    Сохранить
          </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Edit