import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import TextEditor from "../TextEditor/TextEditor";

export default function CreateTicketModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="create-ticket-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project</Form.Label>
            <Form.Control as="select"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Due date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <TextEditor />
          </Form.Group>
          <Form.Group>
            <Form.Label>Assignee</Form.Label>
            <Form.Control as="select"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Labels</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}
