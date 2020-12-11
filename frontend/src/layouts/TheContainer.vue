<template>
  <v-app
    id="dashboard-view"
    app
    style="background: #343434;">
    <TheHeader/>

    <v-main class="my-4">
      <router-view />
    </v-main>

    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
