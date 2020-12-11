<template>
  <v-btn
  x-small
  style="width:120px"
  fab
  >
  Upload Photo
    <v-icon
    style="padding-left:10px">
      mdi-cloud-upload
    </v-icon>
  </v-btn>
</template>

<script>

export default {
  data () {
    return {
      // VUE_APP_DATABASE_API_IP: process.env['VUE_APP_DATABASE_API_IP'] ?
      //                          process.env['VUE_APP_DATABASE_API_IP'] :
      //                          'localhost',
      // VUE_APP_DATABASE_API_PORT: process.env['VUE_APP_DATABASE_API_PORT'] ?
      //                     process.env['VUE_APP_DATABASE_API_PORT'] :
      //                     '5003',
      show: false,
      username: '',
      password: '',
      new_password: '',
      dialog: false
    }
  },
  methods: {
    submit () {
      if (this.password == '@BC*2020') {
        // this.dialog = true
        this.$store.commit('logon', { 'username': 'username' })
        this.$router.push('/raw_data')
      } else {
        // this.$axios
        //   .post(`http://${this.VUE_APP_DATABASE_API_IP}:${this.VUE_APP_DATABASE_API_PORT}/auth/login`, {
        //     'username': this.username,
        //     'password': this.password
        //   })
        //   .then(response => {
        //     this.$store.commit('logon', { 'username': response['data']['username'] })
        //     this.$router.push('/raw_data')
        //   })
        //   .catch(error => {
        //     console.log('erro no login')
        //   })
      }
    },
    new_user () {
      // this.$axios
      //   .post(`http://${this.VUE_APP_DATABASE_API_IP}:${this.VUE_APP_DATABASE_API_PORT}/users/`, {
      //     'username': this.username,
      //     'password': this.new_password
      //   })
      //   .then(response => {
      //     this.$store.commit('logon', { 'username': response['data']['username'] })
      //     this.$router.push('/raw_data')
      //   })
      //   .catch(error => console.log('erro no login'))
    }
  }
}
</script>

<style lang="scss" scoped>
.main_card {
    margin-top: 100px;
}
</style>
