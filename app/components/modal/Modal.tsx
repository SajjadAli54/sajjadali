import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import "./Modal.css"; // Add custom CSS if needed for more styling

interface ModalProps {
  title: string;
  subtitle: string;
  cancel: string;
  ok: string;
  show: boolean;
  handleClose: () => void;
  handleYes: () => void;
}

const MyModal: React.FC<ModalProps> = ({
  title,
  subtitle,
  ok,
  cancel,
  show,
  handleClose,
  handleYes,
}: ModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      animation
      dialogClassName={"modalDialog"}
    >
      <Modal.Header closeButton>
        <Modal.Title className={"modalTitle"}>
          <FaCheckCircle className={"icon"} />
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={"modalBody"}>{subtitle}</Modal.Body>
      <Modal.Footer className={"modalFooter"}>
        <Button
          variant="outline-danger"
          onClick={handleClose}
          className={`btn cancelBtn`}
        >
          <FaTimesCircle className="me-2" />
          {cancel}
        </Button>
        <Button variant="success" onClick={handleYes} className={`btn okBtn`}>
          <FaCheckCircle className="me-2" />
          {ok}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
