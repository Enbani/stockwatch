import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
import { Card, Nav } from './common';
import TickerSearch from './tickerSearch';
import Carosel from './carosel';
import StockChart from './stockCharts';
// import actions
import { fetchStocks } from '../actions/stocksActions';


class Main extends Component {
  componentDidMount() {
    this.props.fetchStocks();
  }

  render() {
    return(
      <div className='page'>
        <Nav
          title='Stock-Watch Demo'
          titleStyle='nav-title'
        />
        <TickerSearch/>
        <Carosel
        />
      <StockChart/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stocksList: state.stocks.stocksList
  }
}

export default connect(mapStateToProps,{ fetchStocks })(Main);
