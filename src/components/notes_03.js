import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import InputForm from "../components/input";
import DropdownForm from "../components/dropdown";

export default props => {
  const initialState = {
    name: "",
    email: "",
    issue: "Printing",
    error_message: "",
    iot_ip: "",
    iot_software: "",
    scanning_protocol: "",
    server_ip: "",
    dns: "",
    share: "",
    encryption: "",
    client_os: "",
    server_os: "",
    driver: "",
    protocol: "",
    notes: "",
    ddcl: "Didn't check",
    next: ""
  };
  const [data, setData] = useState(initialState);

  const [showCopy, setShowCopy] = useState(false);

  return (
    <Form>
      <InputForm
        label="Contact Name"
        text={data.name}
        change={value => setData({ ...data, name: value })}
      />

      <InputForm
        label="Customer Email Address"
        text={data.email}
        change={value => setData({ ...data, email: value })}
      />

      <DropdownForm
        label="Log Issue"
        menu={[
          "Printing",
          "Scan to file",
          "Scan to email",
          "Connectivity",
          "Hardware Issue",
          "Accounting",
          "Software",
          "Fax"
        ]}
        change={value => setData({ ...data, issue: value })}
        value={data.issue}
      />

      <InputForm
        label="Error Message/FC"
        text={data.error_message}
        change={value => setData({ ...data, error_message: value })}
      />

      <InputForm
        label="IOT/DFE IP Address"
        text={data.iot_ip}
        change={value => setData({ ...data, iot_ip: value })}
      />

      <InputForm
        label="IOT/DFE Software Version"
        text={data.iot_software}
        change={value => setData({ ...data, iot_software: value })}
      />

      <DropdownForm
        label="Scanning Protocol"
        menu={["N/A", "SMB", "FTP", "SFTP", "Email", "USB", "Fax"]}
        change={value => setData({ ...data, scanning_protocol: value })}
        value={data.scanning_protocol}
      />

      <InputForm
        label="Server IP/Hostname"
        text={data.server_ip}
        change={value => setData({ ...data, server_ip: value })}
      />

      <InputForm
        label="DNS"
        text={data.dns}
        change={value => setData({ ...data, dns: value })}
      />

      <InputForm
        label="Share Name"
        text={data.share}
        change={value => setData({ ...data, share: value })}
      />

      <DropdownForm
        label="Encryption Type"
        menu={[
          "N/A",
          "No Encryption",
          "STARTTLS (if available)",
          "SSL/TLS",
          "SNMPS"
        ]}
        change={value => setData({ ...data, encryption: value })}
        value={data.encryption}
      />

      <InputForm
        label="Client OS"
        text={data.client_os}
        change={value => setData({ ...data, client_os: value })}
      />

      <InputForm
        label="Server OS"
        text={data.server_os}
        change={value => setData({ ...data, server_os: value })}
      />

      <InputForm
        label="Driver Type/Version"
        text={data.driver}
        change={value => setData({ ...data, driver: value })}
      />

      <InputForm
        label="Protocol"
        text={data.protocol}
        change={value => setData({ ...data, protocol: value })}
      />

      <InputForm
        label="General Notes"
        text={data.notes}
        change={value => setData({ ...data, notes: value })}
      />

      <DropdownForm
        label={
          <a
            href="https://xapp2.support.xerox.com/DDCL/DeviceEvent/LoginS3.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connectivity to DDCL
          </a>
        }
        menu={["Didn't check", "Yes", "No"]}
        change={value => setData({ ...data, ddcl: value })}
        value={data.ddcl}
      />

      <InputForm
        label="Next Steps"
        text={data.next}
        change={value => setData({ ...data, next: value })}
      />

      <CopyToClipboard
        text={
          (data.name ? `- Contact Name: ${data.name}\n` : "") +
          (data.email ? `- Customer Email Address: ${data.email}\n` : "") +
          (data.issue ? `- Log Issue: ${data.issue}\n` : "") +
          (data.error_message
            ? `- Error Message/FC: ${data.error_message}\n`
            : "") +
          (data.iot_ip ? `- IOT/DFE IP Address: ${data.iot_ip}\n` : "") +
          (data.iot_software
            ? `- IOT/DFE IP Software: ${data.iot_software}\n`
            : "") +
          (data.scanning_protocol
            ? `- Scanning Protocol: ${data.scanning_protocol}\n`
            : "") +
          (data.server_ip ? `- Server IP/Hostname: ${data.server_ip}\n` : "") +
          (data.dns ? `-DNS: ${data.dns}\n` : "") +
          (data.encryption ? `- Encryption Type: ${data.encryption}\n` : "") +
          (data.client_os ? `- Client OS: ${data.client_os}\n` : "") +
          (data.server_os ? `- Server OS: ${data.server_os}\n` : "") +
          (data.driver ? `- Driver Type/Version: ${data.driver}\n` : "") +
          (data.protocol ? `- Protocol: ${data.protocol}\n` : "") +
          (data.notes ? `- General Notes: ${data.notes}\n` : "") +
          (data.ddcl ? `- Connectivity to DDCL: ${data.ddcl}\n` : "") +
          (data.ddcl ? `- Next Steps: ${data.next}\n` : "")
        }
      >
        <Button onClick={e => setShowCopy(!showCopy)}>Copy</Button>
      </CopyToClipboard>
      <Button
        variant="outline-primary"
        onClick={e => {
          setShowCopy(false);
          setData(initialState);
          console.log(data);
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
