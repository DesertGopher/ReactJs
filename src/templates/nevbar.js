import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    button: {
        position: 'relative',
        width: '80px',
        height: '40px',
        marginLeft: '10px',
    },

    text: {
        position: 'relative', 
        marginTop: '-8px',
        color: 'blue'
    },
};

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item; btn btn-outline-warning" style={styles.button}>
                            <Link to="/" style={styles.text} class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item; btn btn-outline-warning" style={styles.button}>
                            <Link to="/todos" style={styles.text} class="nav-link">Todos</Link>
                        </li>
                        <li class="nav-item; btn btn-outline-warning" style={styles.button}>
                            <Link to="/users" style={styles.text} class="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}