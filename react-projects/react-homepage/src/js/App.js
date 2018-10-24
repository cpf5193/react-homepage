import React, { Component } from 'react';
import MenuBar from './menu-bar';
import '../less/App.less';
import '../less/menu-item.less';
import '../less/menu-bar.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar activeTab="home" />
      </div>
    );
  }
}

export default App;
