import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    let className = `menu-item${this.props.isActive ? ' active' : ''}`;
    return (
      <span className={className} onClick={this.props.onClick}>
        {this.props.name}
      </span>
    );
  }
};
