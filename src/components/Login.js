import React, { useState } from 'react'
import { Modal, InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import { useStoreon } from 'storeon/react'

function MyLogin() {
    const { dispatch, app } = useStoreon('app')
    const [show] = useState(app.loggedIn);
    return (
        <Modal show={show}
            onHide={() => dispatch('tasks/changed', { loggedIn: !app.loggedIn, error: "" })}
        >
            <Modal.Header closeButton>
                <Modal.Title>Логин</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Login"
                                aria-label="Login"
                                aria-describedby="basic-addon1"
                                onChange={(e) => dispatch('tasks/changed', { login: e.target.value })}
                            />
                            <Form.Text className="text-danger">{app.error["username"]}</Form.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Пароль</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                onChange={(e) => dispatch('tasks/changed', { password: e.target.value })}
                            />
                            <Form.Text className="text-danger">{app.error["password"]}</Form.Text>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { dispatch('tasks/changed', { loggedIn: !app.loggedIn, error: "" }); }}>
                    Закрыть
          </Button>
                <Button variant="primary" onClick={() => {
                    dispatch('login');
                }}>
                    Войти
          </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyLogin