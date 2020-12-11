// https://vuex.vuejs.org/en/actions.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5
import state from './state'
import axios from 'axios'

// const io = require('socket.io-client')
const API_HOST =  process.env['VUE_APP_RFXPLATFORM_HOST_API'] ? process.env['VUE_APP_RFXPLATFORM_HOST_API'] : "localhost"
const API_PORT =  process.env['VUE_APP_RFXPLATFORM_PORT_APIWORKING'] ? process.env['VUE_APP_RFXPLATFORM_PORT_APIWORKING'] : "26000"
// const staging = 'http://octatunrfx:26000'
// const ngrokApi = 'https://2e2eebaea505.ngrok.io'

// const socket = io.connect(`${WEBSOCKET_HOST}:${WEBSOCKET_PORT}`)
// const socket = io.connect(ngrokApi)

// socket.on('connect', function (e) {
//   state.websocket_status = true
// })

// var reconnectionTry = 0
// socket.on('connect_error', function (e) {
//   state.websocket_status = false
//   reconnectionTry++
//   console.log('Reconnection attempt #' + reconnectionTry)
// })

const eventSource = new EventSource(`http://${API_HOST}:${API_PORT}/rfx/datafeed`);

// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
  get_data_casado ({ commit }) {
    // socket.on('CASADO', function (response) {
    eventSource.addEventListener('message', response => {
      commit('update_casado', {"bid_offer": 'bid', "value": response.data.bid})
      commit('update_casado', {"bid_offer": 'offer', "value": response.data.offer})
    }, false)
  },
  get_data_curves ({ commit }) {
    // socket.on('CURVES', function (response) {
    eventSource.addEventListener('message', event => {

      const eventData = JSON.parse(event.data)

      commit('mutation_curves', {data: eventData['CURVES']})
    }, false)
  },
  get_data_curves_update ({ commit }) {
    // socket.on('CURVES_UPDATE', function (response) {
    eventSource.addEventListener('message', event => {

      const eventData = JSON.parse(event.data)
      
      commit('mutation_curves_update', {data: eventData['CURVES_UPDATE']})
    }, false)
  },
  get_data_curves_chart ({ commit }) {
    // socket.on('CURVES_CHART', function (response) {
    eventSource.addEventListener('message', event => {

      const eventData = JSON.parse(event.data)

      commit('mutation_curves_chart', {data: eventData['CURVES_CHART']})
    }, false)
  },
  get_data_rawdata ({ commit }) {
    // socket.on('RAWDATA', function (response) {
    eventSource.addEventListener('message', event => {
      const eventData = JSON.parse(event.data)

      let data = eventData['RAWDATA']

      const currencies = ['DI_PRE', 'DOL_FRC', 'EUR', 'EUR_Futures', 'JPY', 'JPY_Futures', 'USD']
      
      for (let currencie of currencies) {
        data[currencie].forEach(item => {
          var date = new Date(`${item["HRS"]} UTC`);
  
          let time = date.toString().split(' ')[4]
          let day = date.toLocaleDateString('pt-BR')
  
          item["HRS"] = `${day}, ${time}`
        })
      }
      commit('mutation_rawdata', {data: data})
      commit('mutation_casado', eventData['CASADO'])
    }, false)
  },
  get_data_fx ({ commit }) {
    // socket.on('FX', function (response) {
    eventSource.addEventListener('message', event => {
      
      const eventData = JSON.parse(event.data)

      commit('mutation_fx', {data: eventData['FX']})
    }, false)
  },
  get_data_engine ({ commit }) {
    // socket.on('ENGINE', function (response) {
    eventSource.addEventListener('message', event => {

      const eventData = JSON.parse(event.data)

      commit('mutation_engine', {data: eventData['ENGINE']})
    }, false)
  },
  get_data_rawdata_chart ({ commit }) {
    eventSource.addEventListener('message', event => {
    // socket.on('RAWDATA_CHART', function (response) {
      const eventData = JSON.parse(event.data)

      commit('mutation_rawdata_chart', eventData['RAWDATA_CHART'])
    })
  },
  async update_casado ({ commit }, data) {
    try {
      const url = `http://${API_HOST}:${API_PORT}/rfx/cockpit/casado?casado_bid=${data.casado_bid}&casado_offer=${data.casado_offer}`
      
      await axios.put(url)
    } catch (ex) {
      console.log(ex)
    }
  },
  // SOCKET EMIT
  // submit_casado ({ commit }, data) {
  //   commit('update_casado', data)
    
  //   socket.emit('SUBMIT_CASADO', {
  //     msg: data['value'],
  //     key: data['bid_offer'],
  //   })
  // },
  // submit_engine_parameter (state, data) {
  //   socket.emit('SUBMIT_ENGINE_PARAMETER', {
  //     msg: data['msg'],
  //     key: data['key']
  //   })
  // },
  // submit_curves_markups (state, data) {
  //   socket.emit('SUBMIT_CURVES_MARKUPS', {
  //     msg: data['msg'],
  //     key: data['key']
  //   })
  // },
  // submit_include_vertice (state, data) {
  //   socket.emit('SUBMIT_INCLUDE_VERTICE', {
  //     msg: data['msg'],
  //     key: data['key']
  //   })
  // },
}
