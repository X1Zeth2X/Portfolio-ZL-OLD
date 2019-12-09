<template>
  <vs-card actionable>
    <div slot="header" class="f3-m f3-l f4 fw9">
      <vs-icon :icon="skill.icon" style="font-size: 20px;"></vs-icon>
      {{ skill.label }}
    </div>

    <span
      class="f4 fw7"
      v-for="(tech, index) in skill.stacks"
      :key="index"
      v-text="tech + (index + 1 === skill.stacks.length ? '.' : ', ')"
    />

    <p class="f5 pv3">
      {{ skill.desc }}
    </p>

    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button
          type="relief"
          size="large"
          color="#98DBC6"
          @click="$router.push({ name: 'projects' })"
        >
          <strong style="color: #363237;"> {{ skill.label }} Projects </strong>
        </vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DetailCard extends Vue {
  @Prop() skill!: any;
}
</script>
