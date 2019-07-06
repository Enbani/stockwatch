import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
// import Card from './common/card';
import { Card, Carosel } from './common';
// import actions
import { fetchStocks } from '../actions/stocksActions';


class Main extends Component {
  componentDidMount() {
    this.props.fetchStocks();
  }

  render() {
    return(
      <Carosel
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stocksList: state.stocks.stocksList
  }
}

export default connect(mapStateToProps,{ fetchStocks })(Main);
