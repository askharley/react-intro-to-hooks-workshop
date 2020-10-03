import React from "react";
import { ListGroup } from "react-bootstrap";

export default function ProfileTips({ tips }) {
  return (
    <ListGroup className="m-4">
      {tips.map((tip, index) => {
        return (
          <ListGroup.Item key={index} variant="info">
            {tip.message}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
