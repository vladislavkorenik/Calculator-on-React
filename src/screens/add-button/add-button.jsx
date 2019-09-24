import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/button";
import "./add-button.css";
import { addNewButton, deleteButtons } from "../../actions";
import isNumeric from "../../logic/isNumeric";

class AddButton extends Component {
  state = {
    number: "",
    redirect: false
  };

  enterValue = event => {
    this.setState({
      number: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!isNumeric(this.state.number)) {
      alert("В следующий раз введите цифру");
    } else {
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/calculator" />;
    }
    return (
      <form onSubmit={this.onSubmit} className="add-button">
        <input placeholder="Введите число" onChange={this.enterValue} />
        <div className="add-button-nav">
          <Button
            props={{
              value: "Добавить",
              classes: "link-button",
              func: this.props.addNewButton,
              item: this.state.number,
              buttonType: "submit"
            }}
          />
          <Link to="/calculator">
            <Button props={{ value: "Назад", classes: "link-button" }} />
          </Link>
        </div>
        <div className="delete-buttons">
          <Link to="/calculator">
            <Button
              props={{
                value: "Удалить все кнопки",
                classes: "link-button",
                func: this.props.deleteButtons
              }}
            />
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewButton: number => {
      dispatch(addNewButton(number));
    },
    deleteButtons: () => {
      dispatch(deleteButtons());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
