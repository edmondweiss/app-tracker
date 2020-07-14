import React from "react";
import Button from "react-bootstrap/Button";
import CreateTicketModal from "../CreateTicketModal/CreateTicketModal";
import CreateProjectModal from "./CreateProjectModal";

type ModalState = {
  isModalOpen: boolean;
};

function CreateProjectModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Create project</Button>;
}

function CloseProjectModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Creating project...</Button>;
}

export default class CreateProjectsControl extends React.Component<
  {},
  ModalState
> {
  constructor(props = {}) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.handleCreateProjectClick = this.handleCreateProjectClick.bind(this);
    this.handleCloseProjectClick = this.handleCloseProjectClick.bind(this);
    this.handleModalHide = this.handleModalHide.bind(this);
  }

  handleCreateProjectClick() {
    this.setState({ isModalOpen: true });
  }

  handleCloseProjectClick() {
    this.setState({ isModalOpen: false });
  }

  handleModalHide() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    let button;
    if (isModalOpen) {
      button = (
        <CloseProjectModalButton onClick={this.handleCloseProjectClick} />
      );
    } else {
      button = (
        <CreateProjectModalButton onClick={this.handleCreateProjectClick} />
      );
    }
    return (
      <>
        {button}
        <CreateProjectModal
          show={this.state.isModalOpen}
          onHide={this.handleModalHide}
        />
      </>
    );
  }
}
