import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyledInput } from './common';

import { addStock } from '../actions/stocksActions';

class TickerSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: "",
      buttonDisabled: true
    };
  }

  onTickerChange(evt) {
    this.setState({
      ticker: evt.target.value,
      buttonDisabled: false
    });

    if(evt.target.value.length === 0) {
      this.setState({buttonDisabled: true})
    }

    console.log(this.state.ticker);
  }

  addTicker() {
    let { ticker } = this.state;
    this.props.addStock(ticker);
  }

  onKeyDown(evt) {
    if (evt.key === 'Enter') {
      this.addTicker();
    }
  }


  render() {
    return(
      <div className='ticker-search-container'>
        <StyledInput
          onChange={this.onTickerChange.bind(this)}
          onKeyPress={this.onKeyDown.bind(this)}
          inputType='text'
          label='Ticker (i.e. AAPL)'
          inputStyle='ticker-search-field'
          />
        <button
          type='button'
          disabled={this.state.buttonDisabled}
          className='styled-button'
          onClick={this.addTicker.bind(this)}
          >
          Add
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    stocksList: state.stocks.stocksList
  }
}

export default connect(mapStateToProps,{ addStock })(TickerSearch);
