import React, { Component } from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';


// import components
import { Nav } from './common';
import TickerSearch from './tickerSearch';
import Carosel from './carosel';
import StockChart from './stockCharts';
// import actions
import { fetchStocks, connectToSocket, addStocksList } from '../actions';


class Main extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     socket: ''
  //   };
  // }

  state = {
    socket: ''
  }

  componentDidMount() {
    this.props.fetchStocks();

    this.connectSocket()
      .then((socket) => {
        socket.on('updateStocks', (data) => {
          console.log(data);
          this.props.addStocksList(data)
        })

        setInterval(() => {
          let { stocksList } = this.props;

          if (stocksList !== null) {
            let stocks = stocksList.map((stock) => {
              return stock.symbol
            }).join()

            socket.emit('fetchStocks',{stocks}, (err) => {
              if (err) {
                console.log(err);
              }
            })
          }
        }, 60000)
      })
  }

  connectSocket() {
    return new Promise((resolve, reject) => {
      let socket = io('http://localhost:8080/', {
        transports: ['websocket']
      })

      socket.on('connect', () => {
        console.log('Connected to websocket');
        this.setState({
          socket
        })
        resolve(socket)
      })
    })
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
    stocksList: state.stocks.stocksList,
    socket: state.socket.socket
  }
}

export default connect(mapStateToProps,{
  fetchStocks,
  connectToSocket,
  addStocksList
 })(Main);
