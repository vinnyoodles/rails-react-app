import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={"wrapper"}>
        <h2>Hello World!</h2>
        <span>I dream of being a Rails and React app :)</span>
      </div>
    );
  }
}

module.exports = App;
