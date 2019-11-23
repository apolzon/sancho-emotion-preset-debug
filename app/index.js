import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "sancho";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 css={{ color: "red" }}>Hello xWorld</h1>
        <Spinner />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
