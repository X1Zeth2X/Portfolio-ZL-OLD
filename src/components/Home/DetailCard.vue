<template>
  <a @click="goToProjects(skill.id)">
    <vs-card actionable>
      <div slot="header" class="f3-m f3-l f4 fw9">
        <vs-icon
          :icon="skill.icon"
          icon-pack="mdi"
          style="font-size: 20px;"
        ></vs-icon>
        {{ skill.label }}
      </div>

      <vs-chip
        class="b"
        v-for="(tech, index) in skill.stacks"
        :key="index"
        icon="mdi-account"
        icon-pack="mdi"
        style="font-size: 1.5em;"
      >
        <vs-avatar
          :icon="tech.icon"
          icon-pack="mdi"
          :color="tech.color"
        ></vs-avatar>
        {{ tech.name }}
      </vs-chip>

      <vs-divider></vs-divider>

      <p class="f4-l f4-m f5 pv3">
        {{ skill.desc }}
      </p>

      <div slot="footer">
        <vs-row vs-justify="flex-end">
          <vs-button
            type="relief"
            size="large"
            color="#98DBC6"
            @click="goToProjects(skill.label)"
          >
            <strong style="color: #363237;">
              {{ skill.label }} Projects
            </strong>
          </vs-button>
        </vs-row>
      </div>
    </vs-card>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DetailCard extends Vue {
  @Prop() skill!: any;

  public goToProjects(type: string) {
    this.$router.push({
      name: "projects",
      query: {
        view: type
      }
    });
  }
}
</script>
