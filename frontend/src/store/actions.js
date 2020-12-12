import state from './state'
import axios from 'axios'

export default {
  get_data_casado ({ commit }) {
    // socket.on('CASADO', function (response) {
    eventSource.addEventListener('message', response => {
      commit('update_casado', {"bid_offer": 'bid', "value": response.data.bid})
      commit('update_casado', {"bid_offer": 'offer', "value": response.data.offer})
    }, false)
  },
}
