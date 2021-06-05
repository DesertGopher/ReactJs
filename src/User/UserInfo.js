import React, { Component } from 'react';
document.body.style = 'background: linear-gradient(to bottom right, #B0B6FF, #F9F273) no-repeat';
const styles = {
    main: {
        position: 'relative',
        fontSize: '30px'
    },
}

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        if (user != undefined) {
            return (
                <div>
                    <ul>
                    <p style={styles.main}>{user.name} 
                    <p>ID:{user.id}</p>
                    </p>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                    </ul>
                    <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}</p>
                    <ul>
                        <li>Zipcode: {user.address.zipcode}</li>
                        <li>GeoLocation: lat {user.address.geo.lat}, lng {user.address.geo.lng}</li>
                    </ul>
                    <p>Occupation: {user.company.name}</p>
                    <ul>
                        {user.company.catchPhrase}
                        <p>{user.company.bs}</p>
                    </ul>
                </div>
            );
        }
        return (
            <div>
            </div>
        )
    }
}
