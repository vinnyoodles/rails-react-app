import React from 'react';
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedModelIndex: -1,
      filterState: false,
      positionLeft: 0,
      positionTop: 0
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
          selectedModelIndex: index,
          filterState: !this.state.filterState,
          positionLeft: position.left,
          positionTop: position.bottom
        });
      } else {
        window.location.href = '/' + this.props.itemsPluralized[index];
      }
  }

  closeFilter() {
    this.setState({
      selectedModelIndex: -1,
      filterState: false
    })
  }

  _renderItems() {
    let items = [];
    for (let i = 0; i < this.props.items.length; i ++) {
      let selected = window.location.pathname.substring(1) === this.props.itemsPluralized[i] ? ' selected ' : '' ;
      let filtered = selected && this.props.filtered ? ' filtered ' : '';
      let filterOpen = this.state.filterState && i == this.state.selectedModelIndex ? ' open ' : '';
      items.push(
        <li key={i} className={selected + ' ' + i} onClick={this.handleClick}>
          <span className={selected + ' ' + i}>
            {this.props.items[i]}
          </span>
          <div className={'sidebar-filter-container ' + selected + ' ' + i}>
            <i className={'sidebar-filter-icon fa fa-filter fa-lg' + filterOpen + filtered + ' ' + i}></i>
          </div>
        </li>);
    }
    return items;
  }

  _isHome() {
    return window.location.pathname === '/';
  }

  _renderFilterMenu() {
    return <app.FilterList
      attributes={this.props.keys[this.state.selectedModelIndex]}
      types={this.props.types[this.state.selectedModelIndex]}
      model={this.props.itemsPluralized[this.state.selectedModelIndex]}
      positionLeft={this.state.positionLeft}
      positionTop={this.state.positionTop}
      closeFilter={this.closeFilter}
      />
  }

  render() {
    let items = this._renderItems();
    let isHome = this._isHome() ? 'selected' : '';
    let filterMenu = this.state.filterState ? this._renderFilterMenu() : <div/>;
    return(
    <div className={'sidebar-wrapper'}>
      <ul className='sidebar-nav'>
      <li className={isHome}>
        <a href='/' className={'home-link'}>Home<i className={'fa fa-lg fa-home'}/></a>
      </li>
      {items}
      </ul>
      {filterMenu}
    </div>)
  }
}
module.exports = Sidebar;
