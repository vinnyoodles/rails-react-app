import React from 'react';
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedModelIndex: -1,
    }

    this.handleClick = this.handleClick.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
  }

  handleClick(e) {
    let items = e.target.className.split(' ');
    let index = items[items.length - 1];
    if (e.target.tagName.toLowerCase() === 'i') {
      let position = ReactDOM.findDOMNode(e.target).getBoundingClientRect();
      this.setState({
          selectedModelIndex: index
        });
      } else {
        window.location.href = '/' + this.props.itemsPluralized[index];
      }
  }

  closeFilter() {
    this.setState({
      selectedModelIndex: -1
    });
  }

  _renderItems() {
    let items = [];
    for (let i = 0; i < this.props.items.length; i ++) {
      let selected = window.location.pathname.substring(1) === this.props.itemsPluralized[i] ? ' selected ' : '' ;
      items.push(
        <li key={i} className={selected + ' ' + i} onClick={this.handleClick}>
          <span className={selected + ' ' + i}>
            {this.props.items[i]}
          </span>
          <div className={'sidebar-filter-container ' + selected + ' ' + i}/>
        </li>);
    }
    return items;
  }

  _isHome() {
    return window.location.pathname === '/';
  }


  render() {
    let items = this._renderItems();
    let isHome = this._isHome() ? 'selected' : '';
    return(
    <div className={'sidebar-wrapper'}>
      <ul className='sidebar-nav'>
      <li className={isHome}>
        <a href='/' className={'home-link'}>Home<i className={'fa fa-lg fa-home'}/></a>
      </li>
      {items}
      </ul>
    </div>)
  }
}
module.exports = Sidebar;
