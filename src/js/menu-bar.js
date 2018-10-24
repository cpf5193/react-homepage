import React from 'react';
import MenuItem from './menu-item';

export default class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTab || 'home'
    };
  }

  setActiveTab(tabId) {
    this.setState({ activeTab: tabId || 'home' });
  }

  activeTabEquals(id) {
    return this.state.activeTab === id;
  }

  getMenuItems() {
    return [
      { id: 'home', name: 'Home' },
      { id: 'other', name: 'Other' },
      { id: 'resume', name: 'Resume' },
      { id: 'about', name: 'About' },
      { id: 'projects', name: 'Projects' }
    ];
  }

  renderMenuItem(item, i) {
    return (
      <MenuItem key={i} id={item.id} name={item.name} isActive={this.activeTabEquals(item.id)} onClick={() => this.setActiveTab(item.id)} />
    );
  }

  render() {
    return (
      <div className="menu-bar">
        {this.getMenuItems().map((item, i) => this.renderMenuItem(item, i))}
      </div>
    );
  }
};
