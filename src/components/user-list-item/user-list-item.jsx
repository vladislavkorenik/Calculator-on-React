import React from 'react';

import { Link } from 'react-router-dom';

const UserListItem = ({ props:{ user } }) => {
    return (
        <Link to = '/calculator'><li>{ user }</li></Link>
    );
}

export default UserListItem