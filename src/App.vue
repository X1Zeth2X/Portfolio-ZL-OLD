<template>
  <div id="app">
    <Navbar class="pb3" />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  /* 
  Font Weights:
    100,300,400,700,900
  Color scheme: 
    Aquamarine - 98DBC6, 
    Turquoise - 5BC9AC, 
    Canary Yellow - E6D72A,
    Pink Tulip - F18D9E
  */
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 5rem;

  .desc {
    margin: 0 auto;
    word-wrap: break-word;
  }

  .btn-radius {
    border-radius: 0.5em;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}
</style>
