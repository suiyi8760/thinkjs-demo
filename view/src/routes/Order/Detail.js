import React, { PureComponent } from 'react';

export default class OrderDetail extends PureComponent {
  render() {
    const { match } = this.props;
    console.log(this.props);
    return (<h1>Order Id:{match.params.id}</h1>)
  }
}
