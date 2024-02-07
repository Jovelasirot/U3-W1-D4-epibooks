import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Welcome = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div
          className="modal show"
          style={{ display: "flex", position: "initial" }}
        >
          <Modal.Dialog className="w-100">
            <Modal.Header closeButton onHide={handleCloseModal}>
              <Modal.Title>Welcome to EpiBooks</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>The best library on the web.</p>
              <p>You can find your favorite book here no cap.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="warning"
                className="text-light"
                onClick={handleCloseModal}
              >
                Let's start
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        <h2 className="text-center mb-4 ">Go to your favorite book Genre</h2>
      )}
    </>
  );
};

export default Welcome;
