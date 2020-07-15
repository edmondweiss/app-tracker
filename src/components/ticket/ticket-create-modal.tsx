import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import TextEditor from "../text-editor/text-editor";
import { Field, Formik } from "formik";
import { FormikRenderProp } from "../../core/formik/formik-types";

// TODO: Move types to an isolated directory/file.

type Assignee = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleNames: ReadonlyArray<string>;
  readonly fullName: string;
  readonly createDate: string;
};

type Priority = {
  readonly id: string;
  readonly name: string;
  readonly createDate: string;
};

type Label = {
  readonly id: string;
  readonly name: string;
  readonly createDate: string;
};

type Ticket = {
  readonly projectId: string;
  readonly typeId: string;
  readonly summary: string;
  readonly dueDate: string;
  readonly description: string;
  readonly assigneeId: string;
  readonly priorityId: string;
  readonly labels: [];
};

// TODO: Add validation using Yup schema.
const TicketCreateModal = (props: any) => {
  let handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void = () => {};

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="create-ticket-modal"
      centered
      id="create-ticket-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="create-ticket-modal">Create ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            projectId: "",
            typeId: "",
            summary: "",
            dueDate: "",
            description: "",
            assigneeId: "",
            priorityId: "",
            labels: [],
          }}
          onSubmit={(values) => {
            // Quill component includes paragraph tags which need to be removed
            // to extract text content.
            values.description = values.description.replace(/^<p>|<\/p>$/g, "");
            console.log(values);
          }}
        >
          {(formik) => {
            handleSubmit = formik.handleSubmit;
            return (
              <Form onSubmit={formik.handleSubmit}>
                <Field name="projectId">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Project</Form.Label>
                      <Form.Control as="select" {...field}></Form.Control>
                    </Form.Group>
                  )}
                </Field>
                <Field name="typeId">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Type</Form.Label>
                      <Form.Control as="select" {...field}></Form.Control>
                    </Form.Group>
                  )}
                </Field>
                <Field name="summary">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Summary</Form.Label>
                      <Form.Control type="text" {...field} />
                    </Form.Group>
                  )}
                </Field>
                <Field name="dueDate">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Due date</Form.Label>
                      <Form.Control type="date" {...field} />
                    </Form.Group>
                  )}
                </Field>
                <Field name="description">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <TextEditor
                        onChange={field.onChange(field.name)}
                        value={field.value}
                        name="description"
                        onBlur={field.onBlur}
                      />
                    </Form.Group>
                  )}
                </Field>
                <Field name="assigneeId">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Assignee</Form.Label>
                      <Form.Control as="select" {...field}></Form.Control>
                    </Form.Group>
                  )}
                </Field>
                <Field name="priorityId">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Priority</Form.Label>
                      <Form.Control as="select" {...field}></Form.Control>
                    </Form.Group>
                  )}
                </Field>
                <Field name="labels">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Labels</Form.Label>
                      <Form.Control type="text" {...field} />
                    </Form.Group>
                  )}
                </Field>
              </Form>
            );
          }}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleSubmit();
            props.onHide();
          }}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketCreateModal;
