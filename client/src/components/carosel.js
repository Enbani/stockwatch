import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './common'

import { removeStock, getHistorical } from '../actions/stocksActions';

class Carosel extends Component {

  onCardClose(evt) {
    this.props.removeStock(evt.target.value)
  }

  onCardClick(e) {
    const symbol = e.currentTarget.id;
    this.props.getHistorical(symbol);
  }

  caroselList() {
    let { stocksList } = this.props;
    console.log('this is stocksList: ', stocksList);

    if (stocksList !== null) {
    let stocks = stocksList.map((stock, index) => {

      return(
        <Card
          key={stock.symbol}
          cardId={stock.symbol}
          title={stock.symbol}
          body={stock.description}
          footer={stock.exchange}
          closeButtonValue={stock.symbol}
          onCloseClick={this.onCardClose.bind(this)}
          onCardClick={this.onCardClick.bind(this)}
          />
      )
    })
    return stocks;
  }
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


export default connect(mapStateToProps, { removeStock, getHistorical })(Carosel);
