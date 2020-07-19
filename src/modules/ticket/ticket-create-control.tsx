import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import TicketCreateModal from "./ticket-create-modal";
import { Project } from "../project/project-types";

enum CreateTicketModalButtonLabel {
  CREATE = "Create ticket",
  CLOSE_MODAL = "Close modal",
}
type ModalState = {
  isModalOpen: boolean;
};

function CreateTicketModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Create ticket</Button>;
}

function CloseTicketModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Creating ticket...</Button>;
}

export default class TicketCreateControl extends Component<{}, ModalState> {
  constructor(props = {}) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.handleCreateTicketClick = this.handleCreateTicketClick.bind(this);
    this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
    this.handleModalHide = this.handleModalHide.bind(this);
  }

  handleCreateTicketClick() {
    this.setState({ isModalOpen: true });
  }

  handleCloseModalClick() {
    this.setState({ isModalOpen: false });
  }

  handleModalHide() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { isModalOpen } = this.state;
    let button;
    if (isModalOpen) {
      button = <CloseTicketModalButton onClick={this.handleCloseModalClick} />;
    } else {
      button = (
        <CreateTicketModalButton onClick={this.handleCreateTicketClick} />
      );
    }
    return (
      <>
        {button}
        <TicketCreateModal
          show={this.state.isModalOpen}
          onHide={this.handleModalHide}
        />
      </>
    );
  }
}
