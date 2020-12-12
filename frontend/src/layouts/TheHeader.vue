<template>
  <v-app-bar
    id="core-toolbar"
    app
    style="background: #424242;"
    flat
    dense
  >
    <v-row style="padding-top: 20px">
      <v-col cols="8">
        <v-toolbar-title class="orange--text">
          My Wedding Gallery
        </v-toolbar-title>
      </v-col>
      <v-col cols="3">
        <S3FileUploader/>
      </v-col>
      <v-col cols="1">
        <ButtonLogin/>
      </v-col>  
    <v-spacer />
    </v-row>

  </v-app-bar>
</template>

<script>

export default {

  methods: {
    changePage (page) {
      this.$router.push(`/${page}`)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/styles/index.scss";

</style>
