import * as React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/index.jsx";

/* global Word, require */

export default class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isOfficeInitialized: PropTypes.bool,
};
