import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";
import NoMatch from "./NoMatch";

export const ALL = "all";
export const ACTIVE = "active";
export const COMPLETED = "completed";

class App extends Component {
  renderTodoListAndFooter = displayFilter => {
    return (
      <React.Fragment>
        <Header />
        <TodoList displayFilter={displayFilter}/>
        <Footer />
      </React.Fragment>
    );
  };

  render() {
    return (
      <section className="todoapp">
        <Switch>
          <Route
            exact
            path="/"
            render={() => this.renderTodoListAndFooter(ALL)}
          />
          <Route
            exact
            path="/active"
            render={() => this.renderTodoListAndFooter(ACTIVE)}
          />
          <Route
            exact
            path="/completed"
            render={() => this.renderTodoListAndFooter(COMPLETED)}
          />
          <Route component={NoMatch} />
        </Switch>
      </section>
    );
  }
}

export default connect()(App);
