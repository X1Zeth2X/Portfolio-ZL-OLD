import { ProjectState } from './types';
import { RootState } from '@/store/types';
import { Module } from 'vuex';

import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state: ProjectState = {
  currentView: null,
  viewDialog: false,
  projects: [
    {
      name: 'Zimmerman',
      image: 'Zimmerman.jpg',
      shortDescription: 'Konishi\'s RESTful API written in Python and Flask.',

      fullDescription: 'Konishi is a free and open source social networking platform\
      that aims to have a similar experience with the core features of Facebook and its groups.\
      Unlike Facebook, Konishi does not do anything malicious to the user data and it is transparent\
      on what it does behind the scenes.\ The backend is called Zimmerman and it is written using Python (3).\
      It uses REST technology for its APIs and JSON Web Tokens (JWT). Zimmerman aims to be simple for people to\
      contribute, learn, and expand it.',

      projectLink: 'https://github.com/x1zeth2x/zimmermanv2',

      learned: 'As lead developer of the Konishi Project, throughout the process of creating Zimmerman I have\
      learned the fundamentals of backend technologies and how they all worked. I also learned how the REST\
      system works as well as JSON Web Tokens. When I started, I didn\'t really know much about backend web\
      development so initially Zimmerman was a mess but as I continued to learn and work with it, I came to\
      understand how to organize files, proper structure, how to make applications more scalable. Another thing\
      that I learned is how to test code to make sure they run as expected and work well with the design.',

      learnSummary: [
        'Create REST APIs',
        'Consume API routes',
        'Utilizing JWTs',
        'Writing Unit Tests',
        'Designing Scalable Backend System',
        'Proper file structure',
      ],

      roles: [
        'Backend developer',
      ],
      stack: [
        {
          name: 'Python',
          icon: 'mdi-language-python',
          description: 'Python 3 was used to create Zimmerman. It uses Flask (A micro web framework)\
          and the Flask-RESTPlus extension for its APIs, and a bunch of other stuff to work with\
          the database, testings, etc.',
        },
        {
          name: 'PostGreSQL',
          icon: 'mdi-database',
          description: 'PostGreSQL was used for storing user, post, and most social networking data in\
          general ;) I chose it over MySQL because for some of the benefits and features it offers over\
          MySQL.',
        }
      ],
    },
  ],
};

const namespaced: boolean = true;

export const projects: Module<ProjectState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
