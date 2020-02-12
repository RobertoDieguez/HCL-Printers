import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

export default props => {
  return (
    <Row>
      <Form.Label column sm="2">
        <b>{props.label}</b>
      </Form.Label>
      <Col>
        <Dropdown>
          <Dropdown.Toggle variant="primary">{props.value}</Dropdown.Toggle>
          <Dropdown.Menu>
            {props.menu.map((element, id) => {
              return (
                <Dropdown.Item key={id} onClick={e => props.change(element)}>
                  {element}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};
