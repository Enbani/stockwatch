import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchStocks } from '../actions/stocksActions';


class Main extends Component {
  componentDidMount() {
    this.props.fetchStocks();
  }

  render() {
    console.log(this.props.stocksList)
    return(
      <h1>Helloooo</h1>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stocksList: state.stocks.stocksList
  }
}

export default connect(mapStateToProps,{ fetchStocks })(Main);
