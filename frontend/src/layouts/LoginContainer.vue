<template>
  <v-app
    id="dashboard-view"
    style="background: #343434;"
    app
    dark
  >
    <v-main class="my-4">
      <router-view />
    </v-main>

    <TheFooter/>
  </v-app>
</template>

<script>
import TheFooter from './TheFooter'

export default {
  name: 'LoginContainer',
  components: {
    TheFooter
  }
}
</script>
