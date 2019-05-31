<template>
  <div class="projects">
    <ViewProject />

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
            @click="$router.push({ name: 'about' })"
            slot="activator"
          >
            <v-icon>mdi-account-heart-outline</v-icon>
          </v-btn>
            <span>About me</span>
          </v-tooltip>
        </v-flex>

        <v-flex xs12 md4 class="text-xs-center">
          <h2 class="display-1 font-weight-bold">Projects</h2>
          <p class="title font-weight-light">
            These are most of my projects that show off my skills and capabilities. 😊😊
          </p>
        </v-flex>
      </v-layout>

      <v-divider v-show="$vuetify.breakpoint.xs"></v-divider>

      <v-layout row wrap align-start class="mt-5">
        <v-flex md4 xs12 v-for="(project, index) in projects" :key="index">
          <ProjectView 
            :project="project"
            :index="index"
          />
        </v-flex>

      </v-layout>

    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Import components
import ProjectView from '@/components/ProjectView.vue';
import ViewProject from '@/components/Dialogs/ViewProject.vue';

import { mapGetters, mapActions } from 'vuex';
import { Action } from 'vuex-class';

@Component({
  components: {
    ProjectView,
    // ViewProject is the fully detailed project in a dialog.
    ViewProject,
  },
  computed: {
    ...mapGetters({
      darkMode: 'theme/darkMode',
      projects: 'projects/projects',
    }),
  },
  methods: {
    ...mapActions({
      toggleTheme: 'theme/toggleTheme',
    }),
  },
})
export default class Home extends Vue {}
</script>