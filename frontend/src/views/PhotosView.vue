<template>
  <div>
    <CardPhoto/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
      }
  },
  computed: {
    ...mapState(['rawdata', 'rawdata_chart']),
  }
}
</script>