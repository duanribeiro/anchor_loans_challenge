// https://vuex.vuejs.org/en/mutations.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5

export default {
  logon (state, data) {
    state.auth_status = true
  },
  update_casado (state, data) {
    data['bid_offer'] == 'bid' ?
    state.casado['bid'] = data['value'] :
    state.casado['offer'] = data['value'] 
  },
  mutation_casado (state, data) {
    state.casado['bid'] = data.bid
    state.casado['offer'] = data.offer
  },
  mutation_curves (state, data) {
    state.curves = data.data
  },
  mutation_curves_update (state, data) {
    state.curves_update = data.data
  },
  mutation_curves_chart (state, data) {
    state.curves_chart = data.data
  },
  mutation_rawdata (state, data) {
    state.rawdata = data.data
  },
  mutation_fx (state, data) {
    state.fx = data.data
  },
  mutation_engine (state, data) {
    state.engine = data.data
    state.running_redis = data.data['Running_redis']
    state.running_database = data.data['Running_database']
    state.running_back = data.data['Running_back']
    state.status_data = data.data['StatusData']
    state.running = data.data['Running']
    state.oncall = data.data['onCall']
  },
  mutation_rawdata_chart (state, data) {
    state.rawdata_chart = data.data
  }
}
