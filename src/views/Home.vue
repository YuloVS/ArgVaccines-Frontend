<template>
  <div class="home px-md-15 py-md-1">
    <h1 class="text-h4 font-weight-medium text-center" v-text="message"></h1>
    <p class="pa-2 text-subtitle-1 text-center pt-0 mb-1" style="color: #028baa">
      <v-icon color="#028baa">mdi-needle</v-icon>
      {{ this.quantity }} vacunas aplicadas a oriundos
    </p>
    <v-row>
      <v-col>
        <h2 class="text-h5 font-weight-medium text-center">Vacunación por día</h2>
        <vaccines-per-day/>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium text-center">Vacunas utilizadas</h2>
        <vaccines />
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium text-center">Vacunación por rango etario</h2>
        <vaccines-by-age-range/>
      </v-col>
    </v-row>
    <v-row class="mt-md-8">
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium text-center">Vacunación por genero</h2>
        <vaccines-by-gender/>
      </v-col>
      <v-col md="6" :cols="12">
        <h2 class="text-h5 font-weight-medium text-center">Vacunación por condición</h2>
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
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    message() {
      let province = this.$route.path.replaceAll("/", "").replaceAll("_", " ")
      return province.length > 0 ? province : "Datos generales"
    }
  },
  watch: {
    $route () {
      this.getQuantity()
    }
  },
  mounted() {
    this.getQuantity()
  },
  methods: {
    getQuantity() {
      let params = {};
      let url = "api/v1/vaccines-quantity";
      let province = this.$route.fullPath.replaceAll("/", "").replaceAll("_", " ")
      if (province.length > 0)
      {
        params = {
          params: {
            province: province
          }
        }
      }
      else {
        params = {
          params: {
            province: "Nacion"
          }
        }
      }
      this.$axios.get(url, params)
          .then((response) => {
            this.quantity = response.data
          })
    }
  }
}
</script>
