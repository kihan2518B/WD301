import React from "react";
// import ReactDOM from "react-dom/client";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    let Date = this.state.date.toLocaleTimeString()
    return (
      <div>
        <h1>Hello</h1>
        <p>It is {Date}</p>
      </div>
    )
  }
}

export default Clock
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);
