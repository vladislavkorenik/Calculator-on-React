import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/button";
import { addNewUsers, deleteAllUsers } from "../../actions";
import isName from "../../logic/isName";

class CreateUser extends Component {
  state = {
    user: "",
    redirect: false
  };

  enterValue = event => {
    this.setState({
      user: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!isName(this.state.user)) {
      alert("Неправильно введено имя или фамилия");
    } else {
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.onSubmit} className="create-user">
        <input placeholder="Введите имя и фамилию" onChange={this.enterValue} />
        <div className="add-button-nav">
          <Button
            props={{
              value: "Добавить",
              classes: "link-button",
              func: this.props.addNewUser,
              item: this.state.user,
              buttonType: "submit"
            }}
          />
          <Link to="/">
            <Button props={{ value: "Назад", classes: "link-button" }} />
          </Link>
        </div>
        <div className="delete-buttons">
          <Link to="/">
            <Button
              props={{
                value: "Удалить всех пользователей",
                classes: "link-button",
                func: this.props.deleteUsers
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
    addNewUser: username => {
      dispatch(addNewUsers(username));
    },
    deleteUsers: () => {
      dispatch(deleteAllUsers());
      localStorage.removeItem("users");
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateUser);
