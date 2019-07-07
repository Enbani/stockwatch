import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './common'

import { removeStock } from '../actions/stocksActions';

class Carosel extends Component {

  onCardClose(evt) {
    this.props.removeStock(evt.target.value)
  }

  caroselList() {
    let { stocksList } = this.props;
    console.log('this is stocksList: ', stocksList);

    let stocks = stocksList.map((stock, index) => {

      return(
        <Card
          key={stock._id}
          title={stock.symbol}
          body={stock.description}
          footer={stock.exchange}
          closeButtonValue={stock._id}
          onCloseClick={this.onCardClose.bind(this)}
          />
      )
    })
    return stocks;
  };

  render() {
    return(
      <div className='carosel-container'>
        {this.caroselList()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stocksList: state.stocks.stocksList
  }
}


export default connect(mapStateToProps, { removeStock })(Carosel);
