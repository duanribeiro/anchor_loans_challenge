<template>
  <v-app-bar
    id="core-toolbar"
    app
    style="background: #424242;"
    flat
    dense
  >
    <v-flex>
      <v-toolbar-title class="orange--text">
        My Wedding Gallery
      </v-toolbar-title>
    </v-flex>
    <v-spacer />
    
    <ButtonUploadPhoto/>
    <ButtonLogin/>

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
