<template>
  <div>
    <v-card
      class="mx-auto main_card"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">LOGIN</div>
          <v-form>
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    color="warning"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    color="warning"
                    label="Password"
                    @keyup.enter="submit"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          text
          @click="submit">Logon</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog
      v-model="dialog"
      width="300"
    >
      <v-card>
        <v-card-title class="headline">Atualizar Senha</v-card-title>
        <v-card-text>
          Como é seu primeiro acesso ao sistema por favor atualize sua senha.
        </v-card-text>
        <v-container>
          <v-text-field
            v-model="new_password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            style="width: 300px"
            name="input-10-1"
            color="warning"
            label="Nova Senha"
          />
        </v-container>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="orange darken-1"
            text
            @click="new_user"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
