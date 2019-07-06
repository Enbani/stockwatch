import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from './'

class Carosel extends Component {

  caroselList() {
    let { stocksList } = this.props;
    console.log('this is stocksList: ', stocksList);

    let stocks = stocksList.map((stock, index) => {
      let key = `card-${index}`;
      return(
        <Card
          key={key}
          title={stock.symbol}
          body={stock.description}
          footer={stock.exchange}
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


export default connect(mapStateToProps, {})(Carosel);
