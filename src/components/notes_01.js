import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import InputForm from "../components/input";

export default props => {
  const initialState = {
    csr_input: "",
    rsa_input: ""
  };
  const [data, setData] = useState(initialState);
  const [showCopy, setShowCopy] = useState(false);

  return (
    <Form>
      <InputForm
        label="CSR Input"
        text={data.csr_input}
        change={value => setData({ ...data, csr_input: value })}
      />

      <InputForm
        label="RSA Input"
        text={data.rsa_input}
        change={value => setData({ ...data, rsa_input: value })}
      />

      <CopyToClipboard
        text={
          "- CSR INPUT: " +
          data.csr_input +
          "\n" +
          "- RSA INPUT: " +
          data.rsa_input
        }
      >
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
