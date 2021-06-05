import React, { Component } from 'react';

const styles = {
    tip: {
        position: 'relative',
        margin: '6px',
        left: '10%',
        color: 'blue',
        fontSize: '28px',
        marginTop: '8px'
    },
};

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todosPerPage, totalTodos, setCurrentPage } = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div>
                <ul className="pagination">
                    {pageNumbers.map(number => {
                        return (
                            <li className="page-item">
                                <a style={styles.tip} class="page-link" onClick={() => setCurrentPage(number)} href="#">{number}</a>
                            </li>);
                    })}
                </ul>
            </div>
        );
    }
}