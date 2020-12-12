<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="margin: 0px"
          color="orange black--text"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Login
          <v-icon
            color="black"
            style="padding-left: 5px"
          >
            mdi-login
          </v-icon>
        </v-btn>
      </template>
    <v-card
      class="mx-auto main_card"
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
          @click="dialog = false">Close</v-btn>
        <v-btn
        class="orange--text"
          text
          @click="logon">Logon</v-btn>

      </v-card-actions>
    </v-card>
      </v-dialog>
  </v-row>
</template>

<script>

  export default {
    data: () => ({
      file: '',
      dialog: false,
      username: '',
      password: ''
    }),
    methods: {
      logon: () => {
        console.log(this.username, this.password)
      },
      upload: () => {
        console.log('e')
        this.file = this.$refs.file.files[0]
        if (this.file) {
            var formData = new FormData()
            formData.append('Content-Type', this.file.type)
            formData.append('file', this.file)
            
            this.$axios
            .post(`https://1mtvc0kke3.execute-api.us-east-1.amazonaws.com/dev/photos/upload_file`, formData)
            .then(response => {
              console.log('passou')
            })
            .catch(error => console.log('erro no login'))
        }
      }
    }
  }
</script>