import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    };
  }
  increment = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };
  componentDidMount() {}
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h1>{this.state.value}</h1>
        <button onClick={this.increment}>Click</button>
        <ChildApp value1={value} />
      </div>
    );
  }
}

class ChildApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newValue: this.props.value1
    };
  }

  render() {
    console.log(this.state.newValue);
    return <>{this.state.newValue}</>;
  }
}
