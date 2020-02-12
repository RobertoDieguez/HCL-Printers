import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import InputForm from "../components/input";
import DropdownForm from "../components/dropdown";

export default props => {
  const initialState = {
    name: "",
    final: "Solved",
    server: "Didn't check"
  };
  const [data, setData] = useState(initialState);

  const [showCopy, setShowCopy] = useState(false);

  return (
    <Form>
      <InputForm
        label="Closing log as per"
        text={data.name}
        change={value => setData({ ...data, name: value })}
      />

      <DropdownForm
        label="Final Outcome"
        menu={[
          "Solved",
          "Refer to IT provider",
          "Refer to self-help support",
          "Escalation to TSR4",
          "No response from customer",
          "Solution Offered",
          "Service Call",
          "Solved by customer",
          "Duplicated log",
          "Deep Dive escalation"
        ]}
        change={value => setData({ ...data, final: value })}
        value={data.final}
      />

      <DropdownForm
        label="Xerox Communication Server"
        menu={["Didn't check", "Connected", "No connected"]}
        change={value => setData({ ...data, server: value })}
        value={data.server}
      />

      <CopyToClipboard
        text={
          "- Closing log as per: " +
          data.name +
          "\n" +
          "- Final Outcome: " +
          data.final +
          "\n" +
          "- Device Connected: " +
          data.server
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
