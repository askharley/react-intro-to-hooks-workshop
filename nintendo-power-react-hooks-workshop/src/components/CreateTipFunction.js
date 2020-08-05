import React, { useState, useEffect } from "react";
import Header from "./common/Header";
import TextArea from "./common/TextArea";
import Footer from "./common/Footer";

export default function CreateTipFunction() {
  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    console.log(message);
    setMessageLength(message.length);
  }, [message]);

  const handleMessageChange = event => {
    const message = event.target.value;
    if (message.length > 50) {
      return alert("Please keep it under 50 characters.");
    }
    return setMessage(event.target.value);
  };

  const handleSubmit = () => {
    return alert(message);
  };

  return (
    <div>
      <Header />
      <TextArea value={message} onChange={handleMessageChange} />
      <Footer messageLength={messageLength} handleSubmit={handleSubmit} />
    </div>
  );
}
