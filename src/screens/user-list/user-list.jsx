import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import InputPlace from "../../components/input-place";
import { editUser, deleteUser, chooseUser } from "../../actions";
import "./user-list.css";

class UserList extends Component {
  state = {
    id: ""
  };

  editUser = userId => {
    this.setState({
      id: userId
    });
  };

  render() {
    const arr = this.props.users.map(item => (
      <li key={item.id}>
        {this.state.id === item.id ? (
          <InputPlace />
        ) : (
          <Link to="/calculator" onClick={() => this.props.chooseUser(item.id)}>
            {item.user}
          </Link>
        )}
        <div>
          <Button
            props={{
              value: this.state.id === item.id ? "Применить" : "Изменить",
              classes: "user-list-button",
              func:
                this.state.id === item.id
                  ? this.props.acceptUser
                  : this.editUser,
              item: item.id
            }}
          />
          <Button
            props={{
              value: "Удалить",
              classes: "user-list-button",
              func: this.props.deleteUser,
              item: item.id
            }}
          />
        </div>
      </li>
    ));
    return (
      <div className="user-list">
        <Link to="/create-user">Добавить пользователя</Link>
        <ul className="user">{arr}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => {
      dispatch(deleteUser(id));
    },
    acceptUser: arr => {
      dispatch(editUser(arr));
    },
    chooseUser: value => {
      dispatch(chooseUser(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
