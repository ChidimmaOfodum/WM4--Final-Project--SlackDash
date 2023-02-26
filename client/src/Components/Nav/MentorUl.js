import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MentorUl = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Please type the channel name below</Form.Label>
              <Form.Control
                type="text"
                placeholder="#"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

			<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
				<li className="nav-item">
					<a href="#" onClick={handleShow}>Add a Cohort</a>
				</li>
				<li className="nav-item">Logout</li>
			</ul>
		</>
	);
};

export default MentorUl;
