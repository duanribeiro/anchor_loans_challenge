<template>
  <transition mode="out-in">
    <router-view style="background-color:#1e1e1e"/>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
  *{ text-transform: none !important; }
  th {
    height: 30px !important;
  }
  td {
    height: 30px !important;
  }
</style>
