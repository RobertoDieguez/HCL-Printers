import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export default props => {
  const [status, setStatus] = useState();

  useEffect(() => {
    fetch("http://10.72.125.180:4000/ping/" + props.ip)
      .then(response => {
        response.json().then(data => {
          if (data) {
            setStatus("UP");
          } else {
            setStatus("DOWN");
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <tr>
      <th>{props.name}</th>
      <th>
        <a href={`//${props.ip}`} target="_blank" rel="noopener noreferrer">
          {props.ip}
        </a>
      </th>
      <th>
        {status ? (
          status === "UP" ? (
            <font color="green">UP</font>
          ) : (
            <font color="red">DOWN</font>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </th>
    </tr>
  );
};
