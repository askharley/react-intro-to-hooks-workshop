import React from "react";
import { Button } from "react-bootstrap";

export default function Footer({ messageLength, handleSubmit }) {
  return (
    <div className="container-footer">
      <div>{messageLength}/50</div>
      <Button variant="dark" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
