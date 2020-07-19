import React, { Component } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  state = {
    hasError: false,
    message: "",
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true, message: error.message });
  }

  render() {
    // TODO: Implement error page.
    const errorView = <h1>{this.state.message}</h1>;
    if (this.state.hasError) {
      return errorView;
    }
    return this.props.children;
  }
}
