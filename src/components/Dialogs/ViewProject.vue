<template>
  <div class="viewproject">
    <v-dialog 
      fullscreen 
      persistent
      :value.sync="dialog"
      lazy
      transition="dialog-bottom-transition"
    >
    <v-toolbar dark color="indigo">
      <v-toolbar-side-icon>
        <v-btn icon @click="toggleDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>

      <v-toolbar-title>
        {{ project.name }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn icon
          :href="project.projectLink"
          target="_blank"
        >
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card>
      <v-card-text>

        <v-layout row wrap justify-center align-start>
          <v-flex md4 xs12>
            <v-card class="card-border">
              <v-img :src="require(`@/assets/ProjectImages/${project.image}`)"></v-img>

              <v-card-text>
                {{ project.fullDescription }}
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex offset-md1 md7 xs12 :class="{'mt-5': $vuetify.breakpoint.xs}">
            <h2 class="display-1 font-weight-black">Stack Used</h2>
            <p class="title font-weight-light mb-3">These were the technologies or languages used for it.</p>

            <v-expansion-panel
              expand
              focusable
            >
              <v-expansion-panel-content
                v-for="(stack, index) in project.stack"
                :key="index"
              >
                <div slot="header">
                  <v-icon class="mr-2">{{ stack.icon }}</v-icon>
                  <span class="subheading font-weight-light">{{ stack.name }}</span>
                </div>
                <v-card>
                  <v-card-text>
                    {{ stack.description }}
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

      	    <h2 class="display-1 mt-5 font-weight-black">What I learned</h2>
      	    <p class="title font-weight-light">Cool stuff that I learned along the way :D</p>

      	    <p>{{ project.learned }}</p>
            <p>In summary I learned the following:</p>
            <ol>
              <li v-for="(summary, index) in project.learnSummary" :key="index">
                {{ summary }}
              </li>
            </ol>
          </v-flex>

        </v-layout>

      </v-card-text>
    </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      dialog: 'projects/viewDialog',
      project: 'projects/currentView',
    }),
  },
  methods: {
    ...mapActions({
      toggleDialog: 'projects/toggleDialog',
    }),
  },
})
export default class ViewProject extends Vue {}
</script>

<style lang="sass">
.card-border
  border-radius: 20px
</style>
