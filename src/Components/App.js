import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../Actions/pollActions";
import { Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.setLoading();
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading!</h1>;
    } else {
      return (
        <div>
          <h1>Hi!</h1>
          <h2>Enter your name to start.</h2>
          <h2 className="subtle">Voting done simply in real-time</h2>

          <div>
            <div className="field">
              <input
                autoComplete="off"
                className="large ng-pristine ng-untouched ng-valid"
                id="username"
                name="user"
                placeholder="Enter your name"
                type="text"
                onChange={this.props.toggleStart}
                onKeyPress={this.props.toggleStart}
              />
            </div>
            <div id="error" />
            <div className="actions">
              <Link to="/poll">
                <input
                  id="submitButton"
                  disabled="disabled"
                  name="commit"
                  type="submit"
                  value="Start"
                />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  /*
		maps the state object to the props that will be passed 
		to the component.	
	*/
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  /*
		maps the dispatch action call to a function
		which will be passed a prop.
		calling the function dispatches action
	*/
  return {
    setLoading: () => {
      dispatch(Actions.loaded({ value: true }));
    },
    toggleStart: e => {
      const specialChars = [
        "+",
        "=",
        "*",
        "\\",
        "/",
        ",",
        ".",
        ";",
        ":",
        "?",
        "{",
        "}",
        "[",
        "]",
        "|",
        "(",
        ")"
      ];
      document.getElementById("error").innerHTML = "";
      if (e.key === " ") {
        e.preventDefault();
        document.getElementById("error").innerHTML =
          "<p><small> No spaces in username.</small></p >";
      } else {
        if (document.getElementById("username").value.length >= 20) {
          e.preventDefault();
          document.getElementById("error").innerHTML =
            "<p><small> Username has to less than 20 characters.</small></p >";
        } else {
          if (specialChars.includes(e.key)) {
            e.preventDefault();
            document.getElementById(
              "error"
            ).innerHTML = `<p><small> Username cannot contain ${
              e.key
            }. </small></p >`;
          } else {
            if (document.getElementById("username").value.length > 0) {
              document.getElementById("submitButton").disabled = false;
            } else {
              document.getElementById("submitButton").disabled = true;
            }
          }
        }
      }
    },
    submitUser: e => {
      dispatch(
        Actions.add.user({ user: document.getElementById("username").value })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
