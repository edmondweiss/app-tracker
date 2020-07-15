import React, { FC } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Project } from "./project-types";
import * as faker from "faker";
import { Field, Formik } from "formik";
import { FormikRenderProp } from "../../core/formik/formik-types";

type ProjectCreateModalProps = {
  createProject: (project: Readonly<Project>) => void;
  onHide: () => void;
  show: boolean;
};

export const ProjectCreateModal: FC<ProjectCreateModalProps> = (props) => {
  let handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void = () => {};

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
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            key: "",
            id: faker.random.uuid(),
            leadEngineer: "",
            createDate: new Date().toISOString().split("T")[0],
          }}
          onSubmit={(project) => {
            console.log("New project: ", project);
            props.createProject(project);
            props.onHide();
          }}
        >
          {(formik) => {
            handleSubmit = formik.handleSubmit;
            return (
              <Form>
                <Field name="name">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter project name"
                        {...field}
                      />
                    </Form.Group>
                  )}
                </Field>
                <Field name="key">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Key</Form.Label>
                      <Form.Control type="text" {...field} />
                    </Form.Group>
                  )}
                </Field>
                <Field name="leadEngineer">
                  {({ field, form, meta }: FormikRenderProp<string>) => (
                    <Form.Group>
                      <Form.Label>Lead Engineer</Form.Label>
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
        <Button onClick={() => handleSubmit()}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};
