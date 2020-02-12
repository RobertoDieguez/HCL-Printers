import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default props => {
  return (
    <Row>
      <Form.Label column sm="2">
        <b>{props.label}</b>
      </Form.Label>
      <Col>
        <Form.Control
          type="text"
          value={props.text}
          size="sm"
          onChange={e => props.change(e.target.value)}
        />
      </Col>
    </Row>
  );
};
