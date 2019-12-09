<template>
  <vs-prompt
    :active.sync="project.show"
    :title="project.info.name"
    color="#5D535E"
    buttons-hidden
    accept-text="View"
    cancel-text="Github"
    button-accept="relief"
    button-cancel="relief"
    @close="toggleProject"
    style="font-family: 'Raleway', sans-serif;"
  >
    <img :src="project.info.image" />

    <div class="f4-l f4-m f5">
      This project was written using
      <span
        v-for="(tech, index) in project.info.stack"
        :key="index"
        v-text="tech + (index + 1 === project.info.stack.length ? '.' : ', ')"
        class="b"
        style="color: #0BB399;"
      ></span>

      <p class="mt2">
        <strong>Details:</strong>
        {{ project.info.story }}
      </p>
    </div>
  </vs-prompt>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

const namespace: string = "dialog";

@Component
export default class ProjectDialog extends Vue {
  @Getter("project", { namespace }) public project: any;
  @Action("toggleProject", { namespace }) public toggleProject: any;
}
</script>
