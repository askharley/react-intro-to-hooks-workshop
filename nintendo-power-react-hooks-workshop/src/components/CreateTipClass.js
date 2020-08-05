import React from "react";
import Header from "./common/Header";
import TextArea from "./common/TextArea";
import Footer from "./common/Footer";

export default class CreateTipClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", messageLength: 0 };
  }

  handleMessageChange = event => {
    const message = event.target.value;
    if (message.length > 50) {
      return alert("Please keep it under 50 characters.");
    }

    console.log(message);

    this.setState({
      message: message,
      messageLength: message.length
    });
  };

  handleSubmit = () => {
    return alert(this.state.message);
  };

  render() {
    return (
      <div>
        <Header />
        <TextArea
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <Footer
          messageLength={this.state.messageLength}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
