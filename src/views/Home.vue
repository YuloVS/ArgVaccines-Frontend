<template>
  <div class="home">
    <h1 class="text-h4 font-weight-medium" v-text="message"></h1>
    <vaccines />
  </div>
</template>

<script>

import Vaccines from "@/components/Vaccines";
export default {
  name: 'Home',
  components: {Vaccines},
  computed: {
    message() {
      let province = this.$route.path.replaceAll("/", "").replaceAll("_", " ")
      return province.length > 0 ? "Datos de " + province : "Datos generales"
    }
  }
}
</script>
