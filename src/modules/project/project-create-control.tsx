import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { ProjectCreateModal } from "./project-create-modal";
import { Project } from "./project-types";

type ModalState = {
  isModalOpen: boolean;
};

type ProjectCreateControlProps = {
  createProject: (project: Readonly<Project>) => void;
};

function CreateProjectModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Create project</Button>;
}

function CloseProjectModalButton(props: { onClick: () => void }) {
  return <Button onClick={props.onClick}>Creating project...</Button>;
}

export class ProjectCreateControl extends Component<
  ProjectCreateControlProps,
  ModalState
> {
  constructor(props: ProjectCreateControlProps) {
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
        <ProjectCreateModal
          show={this.state.isModalOpen}
          onHide={this.handleModalHide}
          createProject={this.props.createProject}
        />
      </>
    );
  }
}
