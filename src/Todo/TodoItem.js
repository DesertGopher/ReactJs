import React, { Component } from 'react';
import '../index.css';

const styles = {
    delete: {
        position: 'sticky',
        left: '100%'
    },
    span: {
        width: '1500px',
        left: '5px'
    }
};

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { checked, todo, deleteTodo } = this.props;

        const classes = []
        if (todo.complete) {
            classes.push('done');
        }
        return (
            <li className="list-group-item">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => {
                        checked(todo.id);
                    }}
                />
                <span className={classes} style={styles.span}>{todo.title}</span>
                <button style={styles.delete} className="btn btn-outline-danger" onClick={() => { deleteTodo(todo.id) }}>Delete</button>
            </li>
        );
    }
}