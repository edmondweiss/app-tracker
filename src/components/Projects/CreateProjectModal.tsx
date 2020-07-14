import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function CreateProjectModal(props: any) {
  function handleSubmit() {
    props.onHide();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="create-project-modal"
      centered
      id="create-project-modal"
    >
      <Modal.Header>
        <Modal.Title>Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}
