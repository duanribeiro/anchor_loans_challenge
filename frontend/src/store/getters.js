// https://vuex.vuejs.org/en/getters.html
// https://medium.com/@abuoop123/why-getters-mutations-actions-in-vuex-store-77069710d2d5

// authorized lets you know if the token is true or not
export default {
  authstatus: state => state.auth_status,
  casadoBid: state => state.casado['bid'] * 1000,
  casadoOffer: state => state.casado['offer'] * 1000,
}
