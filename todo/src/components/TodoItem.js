import React, { Component } from 'react';
import  PropTypes from 'prop-types';

export default class TodoItem extends Component {
    getStyle = ()=>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed? 'line-through': 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div>
                <p style={this.getStyle()} >
                    <input onChange={this.props.markComplete.bind(this, id)} type="checkbox"/> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
