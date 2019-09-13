import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../components/button";
import { addNewUsers, deleteAllUsers } from "../../actions";

class CreateUser extends Component {
  state = {
    user: ""
  };

  enterValue = event => {
    this.setState({
      user: event.target.value
    });
  };

  render() {
    return (
      <form className="create-user">
        <input placeholder="Введите имя и фамилию" onChange={this.enterValue} />
        <div className="add-button-nav">
          <Link to="/">
            <Button
              props={{
                value: "Добавить",
                classes: "link-button",
                func: this.props.addNewUser,
                item: this.state.user
              }}
            />
          </Link>
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
