import React from "react";
import Printer from "../components/printer";
import printers from "../data/printers.json";
import Search from "../components/search";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default props => {
  return (
    <div>
      <Search />
      <Table responsive>
        <thead>
          <tr>
            <th>
              <h4>Printer</h4>
            </th>
            <th>
              <h4>IPv4 Address</h4>
            </th>
            <th>
              <h4 style={{ display: "inline-block" }}>Status</h4>{" "}
              <Button
                variant="primary"
                onClick={e => window.location.reload(false)}
              >
                <img
                  src={require("../data/refresh_icon.png")}
                  style={{ width: "20px", height: "20px" }}
                  alt="Refresh"
                />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {printers.printers.map((printer, id) => {
            return <Printer key={id} name={printer.name} ip={printer.ip} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
