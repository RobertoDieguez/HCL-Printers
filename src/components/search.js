import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Printer from "./printer";
import printers from "../data/printers.json";

export default props => {
  const [model, setModel] = useState("");
  const [foundPrinters, setFoundPrinters] = useState([]);
  const [notFound, setNotFound] = useState(false);

  return (
    <div>
      <Form
        inline
        onSubmit={e => {
          e.preventDefault();
          if (model) {
            setFoundPrinters(() => {
              let a = printers.printers.filter(p =>
                p.name.toUpperCase().includes(model.toUpperCase())
              );
              if (a.length === 0) {
                setNotFound(true);
              } else {
                setNotFound(false);
              }
              return a;
            });
          } else {
            alert("No input detected");
          }
        }}
      >
        <Form.Control
          type="text"
          value={model}
          placeholder="Search Model"
          className="mr-sm-2"
          onChange={e => setModel(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button
          variant="outline-primary"
          onClick={e => {
            setModel("");
            setFoundPrinters([]);
            setNotFound(false);
          }}
        >
          Clear
        </Button>
      </Form>
      {notFound ? (
        <Form.Text className="text-danger">Couldn't find printer</Form.Text>
      ) : null}
      {foundPrinters ? (
        <Table responsive>
          <tbody>
            {foundPrinters.map((p, id) => (
              <Printer key={id} name={p.name} ip={p.ip} />
            ))}
          </tbody>
        </Table>
      ) : null}
      <br />
    </div>
  );
};
