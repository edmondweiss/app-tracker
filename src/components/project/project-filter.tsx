import React, { ChangeEvent, FC } from "react";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import { FormikRenderProp } from "../../core/form/formik-types";
import { ProjectFilterProps } from "./project-types";

type ProjectFilterValues = {
  searchValue: string;
};

export const ProjectFilter: FC<ProjectFilterProps> = ({ onFilter }) => {
  let submitForm = () => Promise.resolve();

  const handleFilterChange = async (e: ChangeEvent) => {
    await submitForm();
  };

  const handleFormSubmit = (values: ProjectFilterValues) => {
    onFilter(values.searchValue);
  };

  return (
    <>
      <Formik
        initialValues={{
          searchValue: "",
        }}
        onSubmit={handleFormSubmit}
      >
        {(formik) => {
          submitForm = formik.submitForm;
          return (
            <Form>
              <Field name="searchValue">
                {({
                  field: { onChange, onBlur, name },
                }: FormikRenderProp<string>) => (
                  <Form.Control
                    type="text"
                    name={name}
                    onBlur={onBlur}
                    onChange={(e) => {
                      onChange(e);
                      handleFilterChange(e);
                    }}
                  />
                )}
              </Field>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
