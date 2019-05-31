<template>
  <div class="projectview pa-2">
    <v-card class="project-border" hover>
      <v-img :src="require(`@/assets/ProjectImages/${project.image}`)">
        <v-layout justify-center align-start>
          <v-chip 
            color="grey darken-4"
            dark
            class="font-weight-light subheading"
          >{{ project.name }}</v-chip>
        </v-layout>
      </v-img>

      <v-card-text>
        {{ project.shortDescription }}

        <br/>
        <span class="font-weight-bold">Role:</span>
        <span 
          v-for="(role, index) in project.roles" :key="index"
        >
          {{ role }}
        </span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <v-btn icon
            color="grey darken-4"
            slot="activator"
            dark
            :href="project.projectLink"
            target="_blank"
            class="mr-2"
          >
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <span>Project Repo</span>
        </v-tooltip>

        <v-btn
          color="info"
          @click="view"
        >
          Details
        </v-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

const namespace: string = 'projects';

@Component
export default class ProjectView extends Vue {
  @Prop() public project!: object;
  @Prop() public index!: number;
  @Action('viewProject', { namespace }) public viewProject: any;

  public view() {
    this.viewProject(this.index);
  }
}
</script>

<style lang="sass" scoped>
.card-border
  border-radius: 20px

.project-border
  border-radius: 2px 2px 20px 20px
</style>
