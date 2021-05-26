<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggle=!toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none; color: black">
          <span>VACUNAS</span>
          <span style="color: #028baa">ARGENTINA</span>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="toggle" bottom app>
      <v-list nav>
        <v-list-item class="mb-0">
          <v-autocomplete class="mt-3"
                          auto-select-first
                          rounded
                          solo
                          placeholder="Provincia"
                          :items="this.provinces"
                          item-text="name"
                          item-value="name"
                          v-model="province"
          ></v-autocomplete>
        </v-list-item>
        <v-list-item class="mb-0">
          <v-select
                    auto-select-first
                    rounded
                    solo
                    placeholder="Vacunacion / Residencia"
                    :items="this.provinces"
                    item-text="name"
                    item-value="name"
          ></v-select>
        </v-list-item>
        <v-list-item class="" v-for="province in this.provinces" :key="province.id">
          <v-btn rounded color="cyan darken-1"
                 class="ma-auto"
                 block
                 outlined
                 dark
                 @click="toggle=!toggle"
                 router :to="selectProvince(province.name)">{{ province.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  data(){
    return {
      toggle: false,
      provinces: [],
      province: null
    }
  },
  created() {
    Window.axios.get("api/provinces")
        .then((response) => {
          this.provinces = response.data
        })
        .catch(function (error){
          alert(error)
        })
  },
  watch: {
    province() {
      this.$emit("provinceChanged", this.province)
    }
  },
  methods: {
    selectProvince(province) {
      return province.replaceAll(" ", "_")
    }
  }
}
</script>

<style scoped>

</style>