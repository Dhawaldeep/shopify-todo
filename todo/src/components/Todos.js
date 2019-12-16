import React, { Component } from 'react'
import TodoItem from './TodoItem';
import  PropTypes from 'prop-types';

export default class Todos extends Component {
    render() {
        return this.props.todos.map(todo=>(
            // <h3 key={todo.id}>{todo.title}</h3>
            <TodoItem key={todo.id} delTodo={this.props.delTodo} markComplete={this.props.markComplete} todo={todo} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
