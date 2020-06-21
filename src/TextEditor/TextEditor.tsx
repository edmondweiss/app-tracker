import ReactQuill from "react-quill";
import React from "react";

export default class TextEditor extends React.Component<{}, any> {
  constructor(props = {}) {
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
    return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
  }
}
