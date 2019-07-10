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
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: this.props.prices,
            }]
          }}
          options={{
            title: {
              display: true,
              text: `${this.props.focusStock}`,
              fontSize: 28
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Price (USD)'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Date'
                }
              }]
            },
            layout: {
              padding : {
                left: 10,
                right: 10,
                bottom: 10,
                top: 10
              }
            }
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
