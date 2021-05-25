<template>
  <div class="home px-md-15 py-md-1">
    <h1 class="text-h4 font-weight-medium" v-text="message"></h1>
    <v-row>
      <v-col>
        <h2 class="text-h5 font-weight-medium">Vacunación por día</h2>
        <vaccines-per-day/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium">Vacunas utilizadas</h2>
        <vaccines />
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium">Vacunación por rango etario</h2>
        <vaccines-by-age-range/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium">Vacunación por genero</h2>
        <vaccines-by-gender/>
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium">Vacunación por condición</h2>
        <vaccines-by-condition/>
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
import VaccinesByCondition from "@/components/VaccinesByCondition";
import VaccinesPerDay from "@/components/VaccinesPerDay";
export default {
  name: 'Home',
  components: {VaccinesPerDay, VaccinesByCondition, VaccinesByGender, VaccinesByAgeRange, Vaccines},
  computed: {
    message() {
      let province = this.$route.path.replaceAll("/", "").replaceAll("_", " ")
      return province.length > 0 ? "Datos de " + province : "Datos generales"
    }
  }
}
</script>
