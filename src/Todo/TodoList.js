import React, { Component } from 'react';
import Pagination from './Pagination';
import TodoItem from './TodoItem';
document.body.style = 'background: linear-gradient(to bottom right, #B0B6FF, #F9F273) no-repeat';

const styles = {
    formStyle: {
        position: 'relative',
        margin: '2px'
    },

    input: {
        width: '1169px',
        height: '40px',
    },

    add: {
        position: 'absolute',
        height: '38px',
        width: '72px',
        margin: '1px'
    },

    container: {
        position: 'relative',
        marginLeft: '100px',
    },

    tip: {
        position: 'relative',
        margin: '20px',
        left: '30%'
    },
};

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: '',
            currentPage: 1,
            todosPerPage: 10
        };
        this.onCheckedTodo = this.onCheckedTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    onCheckedTodo(id) {
        let todos = this.state.todos.map((value) => {
            if (value.id === id) {
                value.complete = !value.complete;
            }
            return value;
        })
        this.setState({ todos });
    }

    addTodo(event) {
        event.preventDefault();
        if (this.state.inputValue <= 0) {
            alert('Заполните значение');
        }
        else {
            let todos = this.state.todos.concat([{
                title: this.state.inputValue,
                id: Math.floor(Math.random() * 1000),
                complete: false
            },
            ]);
            this.setState({ todos })
        }
    }

    deleteTodo(id) {
        let todos = this.state.todos.filter(val => {
            return val.id !== id;
        })
        this.setState({ todos: todos });
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => this.setState({ todos: res }));
    }

    setCurrentPage(a) {
        this.setState({ currentPage: a });
    }


    render() {
        const { todos } = this.state;
        const lastTodoIndex = this.state.currentPage * this.state.todosPerPage;
        const firstTodoIndex = lastTodoIndex - this.state.todosPerPage;
        const currentTodos = todos.slice(firstTodoIndex, lastTodoIndex);

        return (
            <div className="container row" style={styles.container}>
                <ul className="list-group">
                    <form style={styles.formStyle} onSubmit={this.addTodo}>
                        <input style={styles.input} placeholder='type here...' onChange={(event) => { this.setState({ inputValue: event.target.value }) }} />
                        <button style={styles.add} className="btn btn-success" type="submit">Add</button>
                    </form>
                    {currentTodos.map((val) => {
                        return <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} deleteTodo={this.deleteTodo} />;
                    })}
                    <Pagination todosPerPage={this.state.todosPerPage} totalTodos={this.state.todos.length} setCurrentPage={this.setCurrentPage} />
                </ul>
            </div>
        );
    }
}