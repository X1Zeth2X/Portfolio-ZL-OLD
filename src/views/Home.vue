<template>
  <div class="home text-xs-center">

    <v-img :src="require('@/assets/Personal/Background.jpg')"
      max-height="40vh"
      position="90% 75%"
      class="elevation-5"
      lazy-src
    >
      <div class="fill-height gradient"></div>
    </v-img>

    <v-avatar class="avatar elevation-10" size="150" color="white">
      <v-avatar size="145" color="yellow darken-2">
        <v-img 
          :src="require('@/assets/Personal/Me.png')"
        >
          <div class="fill-height gradient-avatar"></div>
        </v-img>
      </v-avatar>
    </v-avatar>

    <h2 class="display-1 font-weight-bold mt-3">Zeth Leonardo</h2>
    <p class="title font-weight-light mt-1">Hi! Welcome to my portfolio :)</p>

    <div class="mt-4">
      <v-btn color="info"
        @click="$router.push({ name: 'about' })"
      >About me</v-btn>
      <v-btn color="deep-orange darken-1" dark
        @click="$router.push({ name: 'projects' })"
      >Projects</v-btn>
    </div>

    <div class="mt-1">
      <v-btn 
        v-for="(social, index) in socialButtons"
        :key="index"
      	icon
      	class="elevation-5"
      	:color="social.color"
      	dark
        large
      ><v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {

  public socialButtons: object[] = [
    {
      label: 'Facebook',
      link: 'https://www.facebook.com',
      color: 'blue',
      icon: 'mdi-facebook',
    },
    {
      label: 'Github',
      link: 'https://www.github.com',
      color: 'grey darken-4',
      icon: 'mdi-github-circle',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com',
      color: 'indigo',
      icon: 'mdi-linkedin',
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com',
      color: 'deep-purple',
      icon: 'mdi-instagram',
    },
  ];

}
</script>

<style lang="sass" scoped>
.avatar
  margin-top: -70px

.gradient
  background-image: linear-gradient(to top right, rgba(153,51,153,.15), rgba(102,204,255,.2))

.gradient-avatar
  background-image: linear-gradient(to top right, rgba(0,0,0,.05), rgba(255,255,0,.08))
</style>