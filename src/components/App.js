import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component {
  renderTodoListAndFooter = displayFilter => {
    return (
      <React.Fragment>
        <Header />
        <TodoList displayFilter={displayFilter} />
        <Footer displayFilter={displayFilter} />
      </React.Fragment>
    );
  };

  render() {
    return (
      <section className="todoapp">
        {this.renderTodoListAndFooter(this.props.filter)}
      </section>
    );
  }
}

export default connect(state => ({ filter: state.filter }))(App);
