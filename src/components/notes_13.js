import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default props => {
  const initialState = "";
  const [data, setData] = useState(initialState);

  const [showCopy, setShowCopy] = useState(false);

  return (
    <Form>
      <Row>
        <Form.Label column sm="2">
          <b>Resolution Details</b>
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={data}
            size="sm"
            as="textarea"
            onChange={e => setData(e.target.value)}
          />
        </Col>
      </Row>
      <CopyToClipboard text={"- Resolution Details: " + data}>
        <Button onClick={e => setShowCopy(!showCopy)}>Copy</Button>
      </CopyToClipboard>
      <Button
        variant="outline-primary"
        onClick={e => {
          setShowCopy(false);
          setData(initialState);
        }}
      >
        Clear
      </Button>
      {showCopy ? (
        <Form.Text className="text-success">Copied to clipboard</Form.Text>
      ) : null}
    </Form>
  );
};
