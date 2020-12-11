<template>
  <transition mode="out-in">
    <router-view style="background-color:#1e1e1e"/>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.get_data_curves()
    this.get_data_curves_update()
    this.get_data_curves_chart()
    this.get_data_rawdata()
    this.get_data_fx()
    this.get_data_engine()
    this.get_data_rawdata_chart()
    this.get_data_casado()

  },
  methods: {
    ...mapActions([
      'get_data_casado',
      'get_data_curves', 
      'get_data_curves_update', 
      'get_data_curves_chart', 
      'get_data_rawdata', 
      'get_data_fx', 
      'get_data_engine', 
      'get_data_rawdata_chart'
    ]),
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
