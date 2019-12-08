<template>
  <div id="projects" class="pt5 tc">
    <section id="intro" class="grey">
      <h1 class="f1-l f2 b">Projects 📁</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc">
        "Talk is cheap. Show me the code."
        <br />
        - <strong>Linus Stallman</strong>
      </p>

      <div class="mt4 f3">
        <vs-button
          size="large"
          type="relief"
          class="btn-radius fw7"
          color="#F18D9E"
          @click="contact"
          >Let's work together!</vs-button
        >
      </div>
    </section>

    <section class="white pb5 h-100 " style="background-color: #FA6775">
      <h1 class="f1-l f2 b mt6 pt5">#Frontend</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc pb4">
        Click for more info 😁
      </p>
      <div class="w-90 gray desc">
        <vs-row vs-w="12">
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="4"
            vs-sm="12"
            v-for="project in feProjects"
            :key="project.name"
          >
            <InfoCard :project="project" />
          </vs-col>
        </vs-row>
      </div>
    </section>

    <section class="white pb5 h-100" style="background-color: #FFD64D">
      <h1 class="f1-l f2 b mt0 pt5">#Backend</h1>
      <div class="w-90 gray desc">
        <vs-row vs-w="12">
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="4"
            vs-sm="12"
            v-for="project in beProjects"
            :key="project.name"
          >
            <InfoCard :project="project" />
          </vs-col>
        </vs-row>
      </div>
    </section>

    <section class="white pb5 h-100" style="background-color: #9BC01C">
      <h1 class="f1-l f2 b mt0 pt5">#UI/UX</h1>
      <div class="w-90 gray desc">
        <vs-row vs-w="12">
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="4"
            vs-sm="12"
            v-for="project in uiProjects"
            :key="project.name"
          >
            <InfoCard :project="project" />
          </vs-col>
        </vs-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import InfoCard from "@/components/Projects/InfoCard.vue";
import { Action } from 'vuex-class';

@Component({
  components: {
    InfoCard
  }
})
export default class Projects extends Vue {
  @Action('openContact', { namespace: 'dialog' }) public contact: any;

  public feProjects: object[] = [
    {
      name: "Kagawasan",
      image: require("@/assets/images/fe/Kagawasan.png"),
      desc: "Konishi's frontend",
      view: "https://konishi.netlify.com/",
      github: "https://github.com/konishi-project/kagawasan",
      stack: ["Vue.js"]
    },
    {
      name: "Portfolio",
      image: require("@/assets/images/fe/Portfolio.png"),
      desc: "My current portfolio ^-^",
      view: "",
      github: "https://github.com/X1Zeth2X/Portfolio-ZL",
      stack: ["Vue.js"]
    },
    {
      name: "My old portfolio",
      image: require("@/assets/images/fe/OldPortfolio.png"),
      view: "http://x1zeth2x.herokuapp.com/",
      github: "https://github.com/X1Zeth2X/personalwebsite",
      desc: "Konishi's frontend",
      stack: ["Vue.js"]
    }
  ];

  public beProjects: object[] = [
    {
      name: "Zimmerman",
      image: require("@/assets/images/be/Zimmerman.png"),
      desc: "Konishi's backend",
      view: "https://konishi-zimmerman.herokuapp.com/",
      github: "https://github.com/konishi-project/zimmerman",
      stack: ["Flask Python", "PostGreSQL", "SQLAlchemy"]
    },
    {
      name: "Projectify's API",
      image: require("@/assets/images/be/Projectify.png"),
      view: "http://x1zeth2x.herokuapp.com/",
      github: "https://github.com/X1Zeth2X/projectify-api",
      desc: "Projectify's prototype API written in GOLang. ",
      stack: ["Vue.js"]
    },
    {
      name: "REST Boilerplate",
      image: require("@/assets/images/be/Boilerplate.png"),
      desc: "REST API written in Python 3.6+ ",
      view: "",
      github: "https://github.com/X1Zeth2X/flask-restplus-boilerplate",
      stack: ["Vue.js"]
    }
  ];

  public uiProjects: object[] = [
    {
      name: "Portfolio Design",
      image: require("@/assets/images/ui/Portfolio.png"),
      desc: "Portfolio idea mockup design",
      view: "",
      github: "",
      stack: ["Figma"]
    },
    {
      name: "Naql Mobile App",
      image: require("@/assets/images/ui/Naql.png"),
      view: "",
      github: "",
      desc: "Naql's student card view",
      stack: ["Figma", "Paper and Pencil"]
    },
    {
      name: "Kagawasan Banner",
      image: require("@/assets/images/ui/Kagawasan.png"),
      desc: "Kagawasan's display banner",
      view: "",
      github: "",
      stack: ["Figma"]
    }
  ];
}
</script>
