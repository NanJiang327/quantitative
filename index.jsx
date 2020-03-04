// about.jsx
import React from "react";
import { DatePicker, message, Alert } from "antd";
import Collapse from "./collapse";
import "antd/dist/antd.css";

export default class App extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <Collapse />
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          <Alert
            message={`Selected Date: ${
              date ? date.format("YYYY-MM-DD") : "None"
            }`}
            type="success"
          />
        </div>
      </div>
    );
  }
}
