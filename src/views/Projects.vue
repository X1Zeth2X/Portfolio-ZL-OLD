<template>
  <div id="projects" class="pt5 tc">
    <ProjectDialog />

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

    <section
      class="white pb5 h-100 "
      style="background-color: #FA6775"
      id="frontend"
    >
      <h1 class="f1-l f2 b mt6 pt5">#Frontend</h1>
      <p class="f2-l f2-m f3 w-60-m w-60-l w-90 desc pb4">
        Click on image for more info 😁
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

    <section
      class="white pb5 h-100"
      style="background-color: #FFD64D"
      id="backend"
    >
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

    <section class="white pb5 h-100" style="background-color: #9BC01C" id="ui">
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
import VueScrollTo from "vue-scrollto";

import InfoCard from "@/components/Projects/InfoCard.vue";
import ProjectDialog from "@/components/Dialogs/Project.vue";
import { Action } from "vuex-class";

import { Project } from "@/store/dialogs/types";

const scroller = VueScrollTo;

@Component({
  components: {
    InfoCard,
    ProjectDialog
  }
})
export default class Projects extends Vue {
  @Action("toggleContact", { namespace: "dialog" }) public contact: any;
  @Action("toggleProject", { namespace: "dialog" })
  public openProjectDialog: any;

  public mounted() {
    this.checkScroll();
  }

  public checkScroll() {
    setTimeout(() => {
      if (this.$route.query.view !== undefined) {
        scroller.scrollTo("#" + this.$route.query.view, 1000, {
          offset: -60
        });
      }
    }, 200);
  }

  public feProjects: Project[] = [
    {
      name: "Kagawasan",
      image: require("@/assets/images/fe/Kagawasan.png"),
      desc: "Konishi's frontend",
      view: "https://konishi.netlify.com/",
      github: "https://github.com/konishi-project/kagawasan",
      story:
        "It all began when I started contributing to Konishi, at first I was going to do \
      SSR but then I was told that CSR would be better so I learned Vue, Kagawasan had many \
      iterations before it, most of them got rewritten and replaced which eventually turned out \
      to the product it is today.",
      stack: ["Vue.js", "Vuetify", "TypeScript"]
    },
    {
      name: "Portfolio",
      image: require("@/assets/images/fe/Portfolio.png"),
      desc: "My current portfolio ^-^",
      view: "",
      github: "https://github.com/X1Zeth2X/Portfolio-ZL",
      story:
        "I badly needed a new portfolio because my old one was mainly off a Vuetify \
      template which felt generic in my opinion, so this time I wanted to write my own from the \
      ground up using the skills I learned from Kagawasan.",
      stack: ["Vue.js", "VueSax", "TypeScript"]
    },
    {
      name: "My old portfolio",
      image: require("@/assets/images/fe/OldPortfolio.png"),
      view: "http://x1zeth2x.herokuapp.com/",
      github: "https://github.com/X1Zeth2X/personalwebsite",
      desc: "Old dev portfolio *shrug*",
      story:
        "One of my very first projects. I had borrowed a template from Vuetify and then \
      made some minor adjustments to fit my needs.",
      stack: ["Vue.js", "Vuetify", "Javascript"]
    }
  ];

  public beProjects: Project[] = [
    {
      name: "Zimmerman",
      image: require("@/assets/images/be/Zimmerman.png"),
      desc: "Konishi's backend",
      view: "https://konishi-zimmerman.herokuapp.com/",
      github: "https://github.com/konishi-project/zimmerman",
      story:
        "This RESTFul API has many features that most social platforms have, \
      such as User CRUD, Post CRUD, Notifications,\
      Authentication with JWTs, and so much more.",
      stack: ["Flask Python", "PostGreSQL", "SQLAlchemy"]
    },
    {
      name: "Projectify's API",
      image: require("@/assets/images/be/Projectify.png"),
      view: "http://x1zeth2x.herokuapp.com/",
      github: "https://github.com/X1Zeth2X/projectify-api",
      desc: "Projectify's prototype API written in GOLang. ",
      story:
        "Currently a barebones REST server for the projectify platform, it has nothing much at the moment but it will later on \
      support the usual CRUD operations, Authentication (JWT), and more.",
      stack: ["GOlang", "Go-CHI", "GORM"]
    },
    {
      name: "REST Boilerplate",
      image: require("@/assets/images/be/Boilerplate.png"),
      desc: "REST API written in Python 3.6+ ",
      view: "",
      story:
        "A boilerplate that includes things like User login, registration, and \
      authentication with JWT. It is also scalable and efficient to boost developer \
      efficiency.",
      github: "https://github.com/X1Zeth2X/flask-restplus-boilerplate",
      stack: ["Flask Python", "PostGreSQL", "SQLAlchemy"]
    }
  ];

  public uiProjects: Project[] = [
    {
      name: "Portfolio Design",
      image: require("@/assets/images/ui/Portfolio.png"),
      desc: "Portfolio idea mockup design",
      view: "",
      github: "",
      story:
        "One of my early portfolio ideas that I designed but never really \
      came into fruition (in terms of turning into a website)",
      stack: ["Figma"]
    },
    {
      name: "Naql Mobile App",
      image: require("@/assets/images/ui/Naql.png"),
      view: "",
      github: "",
      story:
        "Naql is a bus assistant platform that monitors student's bus activity \
      and this is the student's card view which gets scanned.",
      desc: "Naql's student card view",
      stack: ["Figma", "Paper and Pencil"]
    },
    {
      name: "Kagawasan Banner",
      image: require("@/assets/images/ui/Kagawasan.png"),
      desc: "Kagawasan's display banner",
      view: "",
      github: "",
      story: "Just a cool banner for Kagawasan's github README.",
      stack: ["Figma"]
    }
  ];
}
</script>
