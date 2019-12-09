<template>
  <vs-card class="w-100 mh2" actionable>
    <div slot="header" class="fw7 f3-l f3-m f4">{{ project.name }}</div>
    <span class="f4-l f4-m f5">{{ project.desc }}</span>

    <div slot="media" v-if="project.image" @click="viewProject">
      <img :src="project.image" class="mh-100" />
    </div>

    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <a :href="project.view" target="_blank" v-if="project.view">
          <vs-button type="relief" size="large" color="#98DBC6" class="b mr1"
            >View</vs-button
          >
        </a>

        <a :href="project.github" target="_blank" v-if="project.github">
          <vs-button type="relief" size="large" color="#98DBC6" class="b"
            >Github</vs-button
          >
        </a>
      </vs-row>
    </div>
  </vs-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Action } from "vuex-class";

const namespace: string = "dialog";

@Component
export default class InfoCard extends Vue {
  @Prop() project!: any;
  @Action("toggleProject", { namespace }) public showProject: any;

  public viewProject() {
    this.showProject(this.project);
  }
}
</script>
