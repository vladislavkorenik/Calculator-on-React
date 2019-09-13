import React, { Component } from "react";

import HistoryList from "../history-list";
import Button from "../button";

export default class History extends Component {
  state = {
    visibility: false
  };

  showHistory = () => {
    this.setState(state => {
      return {
        visibility: !state.visibility
      };
    });
  };

  item = {
    value: "История",
    func: this.showHistory,
    classes: "common-button"
  };

  render() {
    return (
      <div className="history">
        <div className="button-container">
          <Button props={this.item} />
        </div>
        <HistoryList
          visibility={this.state.visibility}
          clearAll={this.props.clearAll}
          list={this.props.list}
        />
      </div>
    );
  }
}
