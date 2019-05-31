<template>
  <v-app :dark="darkMode">

    <v-btn
      dark
      color="teal"
      fixed
      bottom
      fab
      right
    ><v-icon>mdi-account-plus</v-icon>
    </v-btn>

    <v-content>
      <transition
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode',
    }),
  },
})
export default class App extends Vue {}
</script>

<style lang="sass" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
</style>