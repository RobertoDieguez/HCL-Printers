import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default props => {
  return (
    <Modal
      {...props}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Request Use</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide} type="submit">
          <a href={props.link} target="_blank">
            Submit
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
