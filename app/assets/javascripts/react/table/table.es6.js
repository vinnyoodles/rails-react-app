import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var products = [
    {
      id: 1,
      name: "Product1",
      price: 120
    },{
      id: 2,
      name: "Product2",
      price: 80
    },{
      id: 3,
      name: "Product3",
      price: 207
    },{
      id: 4,
      name: "Product4",
      price: 100
    },{
      id: 5,
      name: "Product5",
      price: 150
    },{
      id: 6,
      name: "Product1",
      price: 160
    }
    ];

    return (
      <BootstrapTable data={products} striped={true} hover={true} pagination>
        <TableHeaderColumn isKey={true} dataField="id">Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

module.exports = Table;

