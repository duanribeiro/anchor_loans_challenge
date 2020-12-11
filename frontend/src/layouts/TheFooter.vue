<template>
  <v-footer
    id="core-footer"
    app
    absolute
  >
    <!-- <ServicesLoaderCurvesFx v-if="this.$route.path=='/curves' || this.$route.path=='/fx'"/>
    <ServicesLoader v-else/> -->

    <v-spacer/>
    <span class="font-weight-light copyright">
      Desenvolvido por
      <a
        href="https://www.linkedin.com/in/duan-ribeiro/"
        target="_blank">Duan Ribeiro</a>
    </span>
    &nbsp;&nbsp;&nbsp;
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.progress_margin {
  margin-left: 10px;
}
#core-footer {
  z-index: 0;
}
</style>
