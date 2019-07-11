import React, { Component } from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';


// import components
import { Nav } from './common';
import TickerSearch from './tickerSearch';
import Carosel from './carosel';
import StockChart from './stockCharts';
// import actions
import { fetchStocks, connectToSocket } from '../actions';


class Main extends Component {
  componentDidMount() {
    // const { socket, stocksList } = this.props;
    // this.props.connectToSocket()
    this.connectSocket()
      .then((socket) => {
         socket.emit('fetchStocks',{}, (err) => {
           if (err) {
             console.log(err);
           }
        })
      })
    this.props.fetchStocks();


    // socket.emit('fetchStocks',{}, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // })
  }

  connectSocket() {
    return new Promise((resolve, reject) => {
      let socket = io('http://localhost:8080/', {
        transports: ['websocket']
      })

      socket.on('connect', () => {
        console.log('Connected to websocket');
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

export default connect(mapStateToProps,{ fetchStocks, connectToSocket })(Main);
