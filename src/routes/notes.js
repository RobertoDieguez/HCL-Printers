import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Note01 from "../components/notes_01";
import Note03 from "../components/notes_03";
import Note13 from "../components/notes_13";
import Note25 from "../components/notes_25";

export default props => {
  const [reset, setReset] = useState(false);

  return (
    <div style={{ width: "75%", margin: "auto" }}>
      <Button
        variant="outline-primary"
        onClick={e => {
          window.location.reload(false);
        }}
      >
        RESET
      </Button>
      <br />
      <h1 align="center">01 Screen</h1>
      <Note01 reset={reset} />
      <br />
      <h1 align="center">03 Screen</h1>
      <Note03 />
      <br />
      <h1 align="center">13 Screen</h1>
      <Note13 />
      <br />
      <h1 align="center">25 Screen</h1>
      <Note25 />
    </div>
  );
};
