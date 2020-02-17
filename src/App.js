import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import PrintersList from "./routes/printersList";
import Notes from "./routes/notes";
import Directory from "./routes/directory";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function App() {
  const [key, setKey] = useState("printers");

  return (
    <div>
      <img
        src={require("./data/hcl.png")}
        alt={<h1>HCL</h1>}
        style={{ width: "500px", height: "100px" }}
      />
      <Alert variant="danger">
        If the printer you need is down please go and connect an ethernet cable.{" "}
      </Alert>
      <Tabs id="main_menu" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="printers" title={<b>PRINTERS</b>}>
          <br />
          <PrintersList />
        </Tab>
        <Tab eventKey="notes" title={<b>ICSS NOTES TEMPLATE</b>}>
          <br />
          <Notes />
        </Tab>
        <Tab eventKey="directory" title={<b>DIRECTORY</b>}>
          <Directory />
        </Tab>
      </Tabs>
    </div>
  );
}
