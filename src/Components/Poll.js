import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../Actions/pollActions";

class Poll extends Component {
  render() {
    return (
      <div>
        <h1>Start polling {this.state.user}</h1>
        <h2 className="subtle">Voting done simply in real-time</h2>

        <div>
          <div className="field">
            <input
              autoComplete="off"
              className="large ng-pristine ng-untouched ng-valid"
              id="question_title"
              name="question"
              placeholder="Add your question here"
              type="text"
            />
          </div>
          <h3>Add your options below:</h3>

          <div className="field">
            <input
              autoComplete="off"
              id="options"
              name="options"
              placeholder="Option 1"
              type="text"
              className="ng-pristine ng-untouched ng-valid"
            />
          </div>

          <small>
            <a href="#">Options</a>
            <br />
          </small>

          <div id="options">
            <hr />

            <p>
              <small>Sorry! This URL is taken.</small>
            </p>
          </div>

          <div className="notice" />

          <br />

          <div className="actions" />

          <br />
          <small className="subtle">or</small>
          <br />

          <small>
            View an example <a href="/ukb2NQtysb6QUEw4HFF_NQ">Question</a> and{" "}
            <a href="/ukb2NQtysb6QUEw4HFF_NQ/results">Results</a>
          </small>

          <small>
            View an example <a href="/8uRC7FnV-7zOVyvxkgSO7Q">Question</a> and{" "}
            <a href="/8uRC7FnV-7zOVyvxkgSO7Q/results">Results</a>
          </small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
