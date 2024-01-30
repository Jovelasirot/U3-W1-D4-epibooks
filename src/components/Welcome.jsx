import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Welcome = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton onHide={handleCloseModal}>
              <Modal.Title>Welcome to EpiBooks</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>The best library on the web.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseModal}>
                Let's start
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
};

export default Welcome;
