<template>
  <vs-prompt
    :active.sync="contact"
    title="Get in contact"
    button-cancel="flat"
    button-accept="relief"
    accept-text="Send"
    color="#5D535E"
    @close="close"
  >
    <div class="f5">
      <a href="mailto:zeth.leonardo@protonmail.com" target="_blank">
        <vs-button
          type="relief"
          icon="email"
          class="mr2"
          color="#EC96A4"
        ></vs-button>
      </a>
      <a href="https://goo.gl/maps/wzgdaDHXMY2zanNU8" target="_blank">
        <vs-button type="relief" color="#CD7576" class="b">Location</vs-button>
      </a>
      <a href="https://github.com/x1zeth2x/" target="_blank">
        <vs-button type="relief" class="ml2 b" color="#5D535E"
          >Github</vs-button
        >
      </a>
    </div>

    <vs-divider></vs-divider>

    <div class="f5">
      <vs-input
        v-for="info in contacts"
        :key="info.label"
        :placeholder="info.label"
        :icon-after="true"
        :icon="info.icon"
        v-model="info.val"
        class="mv2"
      ></vs-input>

      <vs-textarea
        label="Subject"
        counter="500"
        v-model="subject"
      ></vs-textarea>
    </div>
  </vs-prompt>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

const namespace: string = "dialog";

@Component
export default class Contact extends Vue {
  @Action("toggleContact", { namespace }) public close: any;
  @Getter("contact", { namespace }) public contact: any;

  public email: string = "";
  public fullName: string = "";
  public company: string = "";
  public subject: string = "";

  public contacts: object = [
    {
      label: "Full Name",
      icon: "person",
      val: this.fullName
    },
    {
      label: "Email",
      icon: "email",
      val: this.email
    },
    {
      label: "Company Name or Link",
      icon: "apartment",
      val: this.company
    }
  ];
}
</script>

<style lang="scss" scoped>
.vs-input {
  width: 100%;
}
</style>
