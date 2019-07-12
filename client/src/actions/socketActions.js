import { ADD_SOCKET_TO_STORE } from './actionTypes';
import io from 'socket.io-client';

export const addSocket = (socket) => {
  return {
    type: ADD_SOCKET_TO_STORE,
    payload: socket
  }
};
//
export const connectToSocket = () => {
  return (dispatch) => {
    let socket = io('http://localhost:8080/', {
      transports: ['websocket']
    })

    socket.on('connect', () => {
      console.log('Connected to websocket');
      dispatch({type: ADD_SOCKET_TO_STORE, payload: socket})
      console.log(socket)
    })
  }
}
