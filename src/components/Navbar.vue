<template>
  <vs-navbar id="navbar" class="pa3" color="white" :collapse="false">
    <div slot="title" class="f3 fw8">
      Zeth Leonardo.
    </div>
    <vs-divider></vs-divider>

    <vs-navbar-item class="mr2" v-for="route in routes" :key="route.label">
      <vs-button
        type="relief"
        class="f5 fw7 w-100"
        :color="route.color"
        :disabled="$route.name === route.path"
        @click="goTo(route.path)"
      >
        {{ route.label }}
      </vs-button>
    </vs-navbar-item>

    <vs-navbar-item class="mr2" v-for="(btn, index) in btnRoutes" :key="index">
      <vs-button
        :icon="btn.icon"
        icon-pack="mdi"
        type="relief"
        radius
        :disabled="$route.name === btn.path"
        :color="btn.color"
        @click="btnGo(btn)"
      >
      </vs-button>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navbar extends Vue {
  public routes: object[] = [
    {
      label: "Home",
      color: "#5bc8ac",
      path: "home"
    },
    {
      label: "Projects",
      color: "#f18d9e",
      path: "projects"
    },
  ];

  public btnRoutes: object[] = [
    {
      icon: "mdi-face",
      path: "about",
      color: "#8D6380",
    },
    {
      icon: "mdi-github-circle",
      link: "https://github.com/x1zeth2x/",
      color: "#575757",
    },
  ]

  public btnGo(item: any) {
    item.link !== undefined ? window.open(item.link) : this.$router.push({ name: item.path });
  }

  public goTo(path: string) {
    this.$router.push({ name: path });
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
}
</style>
