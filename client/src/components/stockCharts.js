import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';


class StockChart extends Component {
  componentDidMount() {
    console.log(this.props.focusStock);
  };

  render(){
    // let { dates, prices } = this.props;
    // console.log(dates, prices);
    return(
      <div className='charts-container'>
        <Line
          data={{
            labels: this.props.dates,
            datasets: [{
            label: `${this.props.focusStock}`,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: this.props.prices,
            }]
          }}
          />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    history: state.stocks.history,
    focusStock: state.stocks.focusStock,
    dates: state.stocks.historyDates,
    prices: state.stocks.historyPrices
  }
};

export default connect(mapStateToProps,{})(StockChart);
