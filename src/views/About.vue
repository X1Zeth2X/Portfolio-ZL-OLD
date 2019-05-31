<template>
  <div class="about">
    <v-container>
      <v-layout row wrap align-start>
        <v-flex xs12 md4 :class="{ 'text-xs-center pb-3': $vuetify.breakpoint.xs }">
          <v-btn round large
            color="blue"
            class="elevation-5"
            dark
            @click="$router.push({ name: 'home' })"
          >
            Back
          </v-btn>
          <v-tooltip bottom>
          <v-btn icon large
            class="elevation-5"
            @click="$router.push({ name: 'projects' })"
            slot="activator"
          >
            <v-icon>mdi-folder-multiple-outline</v-icon>
          </v-btn>
            <span>Projects</span>
          </v-tooltip>
       </v-flex>

        <v-flex xs12 md4 class="text-xs-center">
          <h2 class="display-1 font-weight-bold">About Me</h2>
          <p class="title font-weight-light">
            Hey there! I just want to say it's nice having
            you around. 😁😁

          </p>
        </v-flex>
      </v-layout>

      <v-divider v-show="$vuetify.breakpoint.xs"></v-divider>

      <v-layout row wrap align-start class="mt-5">
        <v-flex md4 xs12>
          <v-card style="border-radius: 20px;">
            <v-img :src="require('@/assets/Personal/About.jpg')">
              <v-layout row wrap align-baseline justify-center>
              One of my hobbies is photography (sample above). My other
              hobbies are creating art, handcraft, playing sports, rock climbing, 
              exploration, reading through documentations then getting confused 
              and understanding it.
               
              </v-layout>
            </v-img>
            <v-card-text>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md7 offset-md1 xs12 :class="{'mt-5 text-xs-center': $vuetify.breakpoint.xs}">

          <h3 class="subheading font-weight-black">Story time :)</h3>
          <p class="subheading">
            Nearly a year ago, I began my journey as a developer.
            I've mainly contributed to different projects (most of them free and open source), 
            worked on small webapps
            for clients, and collaborated with very awesome and talented people to
            create, design, and expand applications that help people and impact their
            lives.
          </p>

          <h3 class="subheading font-weight-black">Characteristics</h3>
          <p class="subheading">
            In general I am usually down to earth or "chill" guy, constantly curious, and committed into
            improving myself as person and as a developer. I really enjoy building things in general
            and seeing projects, ideas, plans come to life. Working with others, hearing them out, and
            stepping up is one of the main things I am confident about myself. Above all else, I like to
            keep myself humble.
          </p>

          <h3 class="subheading font-weight-black">Problem solving!</h3>
          <p class="subheading">
            Some of the things I really enjoy doing is brainstorming and finding practical solutions to problems,
            I'm a simple person and I like keeping things simple so that the people around me can easily understand
            and come up with ways to solve problems and create solutions. I learn ideas and concepts pretty fast too.
          </p>

          <v-layout row wrap align-start justify-space-around>
            <v-flex md4 xs12 class="pr-1">
              <v-card class="skill-card mb-3" hover>
                <v-card-title class="body-2">
                  Designer
                  <v-spacer></v-spacer>
                  <v-icon>mdi-pen</v-icon>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="text-xs-center">
                  I really care about the designs of the products I work with,
                  making sure that it is clean, thoughtful, and consistent.

                  <br>
                  <v-chip light class="mt-3">Things I enjoy designing</v-chip>
                  <div>
                    UI, UX, Web, Mobile, Logos, Art.
                  </div>

                  <br>
                  <v-chip light>Design tools</v-chip>
                  <div>
                    Figma, Inkscape, and the good ol' trio (Pencil, Paper, Pen)
                  </div>

                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md4 xs12 class="pr-1">
              <v-card dark color="blue darken-3" class="skill-card mb-3" hover>
                <v-card-title class="body-2">
                  Frontend developer
                  <v-spacer></v-spacer>
                  <v-icon>mdi-code-tags</v-icon>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="text-xs-center">
                  I enjoy coding from scratch, utilizing frontend
                  tools and frameworks, and seeing ideas come to life.

                  <br>
                  <v-chip light class="mt-3">Languages</v-chip>
                  <div>
                    HTML, CSS, Sass, Javascript or Typescript, Vue.js
                  </div>

                  <br>
                  <v-chip light>Tools</v-chip>
                  <div>
                    VSCode, Bulma, Vue.js, Codepen, GitHub, GitLab, Loonix Terminal ;)
                  </div>

                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md4 xs12>
              <v-card color="yellow lighten-3 grey--text text--darken-4" class="skill-card" hover>
                <v-card-title class="body-2">
                  Backend developer
                  <v-spacer></v-spacer>
                  <v-icon>mdi-code-braces</v-icon>
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="text-xs-center">
                  I like to write efficient, clean programs/applications, and
                  applying modern solutions to problems.

                  <br>
                  <v-chip light class="mt-3">Languages</v-chip>
                  <div>
                    Flask, Golang, Django
                  </div>

                  <br>
                  <v-chip light>Tools</v-chip>
                  <div>
                    VSCode w/Extensions, Vim, GNU/Linux, My trusty ThinkPad.
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
.skill-card
  border-radius: 2px 2px 20px 20px
</style>
