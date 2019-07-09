import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';


class StockChart extends Component {
  render(){
    return(
      <div className='charts-container'>
        <Bar
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
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
    focusStock: state.stocks.focusStock
  }
};

export default connect(mapStateToProps,{})(StockChart);
