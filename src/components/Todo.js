import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodo } from '../actions/TodoActions';

class Todo extends Component {

  componentDidMount() {
    this.props.getTodo();
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.refs.name.value)
    this.refs.name.value = '';
    this.forceUpdate();
  };
  

  render() {
    let todo = this.props.todo.todoList;
    let todoItems = todo.map((todo, index) => {
      return(
        <button type="button" className="btn btn-primary todobutton" key={index}>{todo}</button>
        )
      }
    );
    return (
      <div className="center">
          <div className="container">
              <div className="jumbotron">
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label>What needs to be done?</label>
                        <input type="text" className="form-control" ref="name"/>
                      </div>
                      <div className="submit">
                        <button type="submit" className="btn btn-primary float-left submitbutton">ADD</button>
                      </div>
                    </form>
              </div>
              {todoItems}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, {addTodo, getTodo})(Todo);