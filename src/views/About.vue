<template>
  <div class="pt5 tc">
    <section id="intro" class="grey">
      <h1 class="f1-l f2 b">Zeth Magno Leonardo</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc">
        I had nothing interesting to write here at the time, so just think of
        this as a pretty interesting introduction 🤔
      </p>

      <div class="mt4 f3">
        <vs-button
          size="large"
          type="relief"
          class="btn-radius fw7"
          color="#F18D9E"
          @click="contact"
          >Get in contact</vs-button
        >
      </div>
    </section>

    <section class="white pb5" style="background-color: #f18d9e;">
      <h1 class="f1-l f2 b mt6 pt5">Cool Story 📜</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc">
        You'll get to know more about me soon!
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

@Component
export default class About extends Vue {
  @Action("toggleContact", { namespace: "dialog" }) public contact: any;
}
</script>
