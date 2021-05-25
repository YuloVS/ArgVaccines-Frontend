<template>
  <v-app>
    <navbar @provinceChanged="routeTo"></navbar>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar},
  methods: {
    routeTo(province) {
      if(!province) return
      this.$router.push(province.replaceAll(" ", "_"))
    }
  }
}
</script>