<template>
  <div id="home" class="pt5 tc">
    <section id="intro" class="grey">
      <h1 class="f1-l f2 b">Greetings 👋</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc">
        I'm an aspiring software developer that enjoys to tinker, innovate, and
        solve modern problems with modern solutions/technologies .
      </p>

      <div class="mt4 f3">
        <vs-button
          size="large"
          type="relief"
          class="btn-radius fw7"
          color="#F18D9E"
          @click="contact"
          >Get in touch</vs-button
        >
      </div>
    </section>

    <section class="white pb5" style="background-color: #f18d9e;">
      <h1 class="f1-l f2 b mt6 pt5">Skills 🧰</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc">
        Frontend, Backend, UI/UX designer.
      </p>

      <div
        class="pt4 gray mw7-l desc tl ph2"
        v-for="skill in skills"
        :key="skill.label"
      >
        <DetailCard :skill="skill" />
      </div>

      <div class="mt4 f3">
        <vs-button
          size="large"
          type="relief"
          class="btn-radius fw7"
          color="#5bc8ac"
          @click="contact"
          >Contact me</vs-button
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import DetailCard from "@/components/Home/DetailCard.vue";
import { Action } from "vuex-class";

@Component({
  components: {
    DetailCard
  }
})
export default class Home extends Vue {
  @Action("toggleContact", { namespace: "dialog" }) public contact: any;

  public skills: object[] = [
    {
      label: "Frontend",
      id: "frontend",
      icon: "mdi-view-quilt",

      desc:
        "When I began my journey into this field one of the things I kept wondering about was how \
      people made web applications so fluent and smooth, the possibility of creating such beautiful apps\
      is something that keeps me wanting to get better and better everyday.",

      stacks: [
        {
          name: "Vue.js",
          icon: "mdi-vuejs",
          color: "#30956B"
        },
        {
          name: "HTML",
          icon: "mdi-language-html5",
          color: "#D98653"
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
          color: "#0C69B5"
        },
        {
          name: "TypeScript",
          icon: "mdi-language-typescript",
          color: "#2D7AB9"
        }
      ]
    },
    {
      label: "Backend",
      id: "backend",
      icon: "mdi-code-tags",

      desc:
        "Thinking about it, I find myself more of a backend person since I mainly enjoy problem solving and \
      the logistics behind the solution like diving deep into different methods and continuously asking myself questions on how to \
      improve the products that I make and its impact.",

      stacks: [
        {
          name: "Flask",
          icon: "mdi-flask-round-bottom",
          color: "#565656"
        },
        {
          name: "Django",
          icon: "mdi-language-python",
          color: "#DDD73C"
        },
        {
          name: "PostGreSQL",
          icon: "mdi-database",
          color: "#543CDD"
        },
        {
          name: "GOLang",
          icon: "mdi-language-go",
          color: "#76C6E7"
        }
      ]
    },
    {
      label: "UI/UX Designing",
      id: "ui",
      icon: "mdi-palette",

      desc:
        "As mentioned above, I like beautiful apps which I think involves a lot of UI/UX, I wouldn't claim that I'm\
      really good when it comes to designing but I am getting better with my craft, as someone once said\
      'Good artists copy while Great artists steal'.",

      stacks: [
        {
          name: "Figma",
          icon: "mdi-material-design",
          color: "#DE6244"
        },
        {
          name: "Paper and Pencil",
          icon: "mdi-pencil-box-multiple",
          color: "#AB59C2"
        }
      ]
    }
  ];
}
</script>
