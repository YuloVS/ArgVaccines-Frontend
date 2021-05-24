<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggle=!toggle"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none; color: black">
          <span>VACUNAS</span>
          <span class="light-blue--text">ARGENTINA</span>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="toggle" bottom app>
      <v-list nav>
        <v-list-item v-for="province in this.provinces" :key="province.id">
          <v-btn rounded color="light-blue darken-1" dark router :to="selectProvince(province.name)">{{ province.name }}</v-btn>
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
    }
  },
  created() {
    Window.axios.get("http://argvaccines.test/api/provinces")
        .then((response) => {
          this.provinces = response.data
        })
        .catch(function (error){
          alert(error)
        })
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