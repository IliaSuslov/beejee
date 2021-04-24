import React, { useState } from 'react'
import { Modal, InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import { useStoreon } from 'storeon/react'

function MyModal({ title }) {
    const { dispatch, app } = useStoreon('app')
    const [show] = useState(app.add);
    return (
        <Modal show={show} onHide={() => dispatch('tasks/changed', { add: false, error: "" })}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { username: e.target.value })}
                        />
                        <Form.Text className="text-danger">{app.error["username"]}</Form.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { email: e.target.value })}
                        />
                    </InputGroup>
                    <Form.Text className="text-danger">
                        {app.error["email"]}
                    </Form.Text>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Text"
                            aria-label="Text"
                            aria-describedby="basic-addon1"
                            onChange={(e) => dispatch('tasks/changed', { text: e.target.value })}
                        />
                    </InputGroup>
                    <Form.Text className="text-danger">{app.error["text"]}</Form.Text>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    dispatch('tasks/changed', { add: false, error: "" });
                }}>
                    Закрыть
          </Button>
                <Button variant="primary" onClick={() => {
                    dispatch('add/task');
                }}>
                    Сохранить
          </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyModal