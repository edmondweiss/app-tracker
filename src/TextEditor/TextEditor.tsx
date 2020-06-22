import ReactQuill from "react-quill";
import React from "react";
import { FieldInputProps } from "formik/dist/types";

export default class TextEditor extends React.Component<
  FieldInputProps<string>,
  any
> {
  constructor(props: FieldInputProps<string>) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({ text: value });
  }

  render() {
    return (
      <ReactQuill
        value={this.props.value}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
      />
    );
  }
}
