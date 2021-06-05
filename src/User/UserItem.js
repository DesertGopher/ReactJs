import React, { Component } from 'react';
document.body.style = 'background: linear-gradient(to bottom right, #B0B6FF, #F9F273) no-repeat';


export default class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { user, currentUser, setCurrentUser } = this.props;
        if (currentUser === user.id) {
            return (
                <li className="list-group-item active" onClick={() => setCurrentUser(user.id)}>{user.id}. {user.name}</li>
            );
        }
        else {
            return (
                <li className="list-group-item" onClick={() => setCurrentUser(user.id)}>{user.id}. {user.name}</li>
            );
        }
    }
}
