import ReactQuill from "react-quill";
import React from "react";
import { FieldInputProps } from "formik/dist/types";

const TextEditor = (props: FieldInputProps<string>) => {
  return (
    <ReactQuill
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default TextEditor;
