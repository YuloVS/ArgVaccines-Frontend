<template>
  <div class="home">
    <h1 class="text-h4 font-weight-medium" v-text="message"></h1>
    <v-row>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-light">Vacunas utilizadas</h2>
        <vaccines />
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-light">Vacunacion por rango etario</h2>
        <vaccines-by-age-range/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-light">Vacunacion por genero</h2>
        <vaccines-by-gender/>
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-light">Vacunacion por rango etario</h2>
      </v-col>
    </v-row>
    <v-overlay
        :absolute="false"
        :value="false">
      <img class="mr-7" src="../assets/loading.gif" alt="Cargando...">
    </v-overlay>

  </div>
</template>

<script>

import Vaccines from "@/components/Vaccines";
import VaccinesByAgeRange from "@/components/VaccinesByAgeRange";
import VaccinesByGender from "@/components/VaccinesByGender";
export default {
  name: 'Home',
  components: {VaccinesByGender, VaccinesByAgeRange, Vaccines},
  computed: {
    message() {
      let province = this.$route.path.replaceAll("/", "").replaceAll("_", " ")
      return province.length > 0 ? "Datos de " + province : "Datos generales"
    }
  }
}
</script>
