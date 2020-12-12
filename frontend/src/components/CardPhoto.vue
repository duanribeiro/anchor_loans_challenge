<template>
  <v-card
    class="mx-auto"
  >
    <v-container v-if="photos" fluid>
      <v-row dense>
        <v-col
          v-for="photo in photos"
          :key="photo.url"
          :cols="4"
        >
          <v-card>
            <v-img
              :src="photo.url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title/>
            </v-img>

            <v-card-actions>
                <v-btn
                icon
                @click="addLike(photo.url)">
                    <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
                    <v-div> {{ photo.likes }}</v-div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data(){
      return {
        photos: [],
        dialog: false
      }
    },
    mounted (){
      this.$axios.get(`https://1mtvc0kke3.execute-api.us-east-1.amazonaws.com/dev/photos/list_files`)
      .then(response => {
        response.data.map(photo => {
          this.photos.push({
            url: photo.url,
            verified: photo.verified,
            likes: photo.likes ,
            comments_length: photo.comments.length,
            comments: photo.comments})
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    methods: {
      openDialog () {
        this.dialog = !this.dialog
      },
      addLike (photo_url) {
          this.$axios
              .post(`https://1mtvc0kke3.execute-api.us-east-1.amazonaws.com/dev/photos/add_like`, {
                photo_url: photo_url
              })
              .then(response => {
                window.location.reload()
              })
              .catch(error => console.log(error))
      }
  }
  }
</script>