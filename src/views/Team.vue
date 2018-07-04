<template>
  <v-app>
    <v-container fluid grid-list-md style="padding-top: 75px">
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="text-xs-center display-1">Founders</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 pa-2 v-for="founder in founders" :key="founder.id">
          <v-card hover>
            <v-card-media height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(founder.id)" />
              </v-avatar>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ founder.name }}</div>
                <span class="grey--text">{{ founder.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <template  v-for="link in founder.links" >
                <v-btn icon :href="link.link" :key="link.icon">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="text-xs-center display-1">Core Team</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 pa-2 v-for="member in members" :key="member.id">
          <v-card hover>
            <v-card-media height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(member.id)" />
              </v-avatar>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ member.name }}</div>
                <span class="grey--text">{{ member.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <template  v-for="link in member.links" >
                <v-btn icon :href="link.link" :key="link.icon">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="text-xs-center display-1">Designers</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 pa-2 v-for="designer in designers" :key="designer.id">
          <v-card hover>
            <v-card-media height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(designer.id)" />
              </v-avatar>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ designer.name }}</div>
                <span class="grey--text">{{ designer.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <template  v-for="link in designer.links" >
                <v-btn icon :href="link.link" :key="link.icon">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Downloads",
  data() {
    return {
      founders: [
        {
          id: "AgentFabulous",
          name: "Kshitij Gupta",
          rank: "Found and Lead developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/AgentFabulous"},
            {icon: "mdi-instagram", link: "https://instagram.com/agent_fabulous"} 
          ]
        },
        {
          id: "ZerNico",
          name: "Nico Franke",
          rank: "Co-founder and developer/contributor",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/ZerNico"},
            {icon: "mdi-instagram", link: "https://instagram.com/z3rnico"},
            {icon: "mdi-twitter", link: "https://twitter.com/Z3rNico"}, 
            {icon: "mdi-google-plus", link: "https://plus.google.com/103487503581748563170"}
          ]
        }
      ],
      members: [
        {
          id: "Adesh15",
          name: "Adesh Ikhar",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/Adesh15"},
            {icon: "mdi-google-plus", link: "https://plus.google.com/112917473520794326399"}
          ]
        },
        {
          id: "akhilnarang",
          name: "Akhil Narang",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: ""},
            {icon: "mdi-instagram", link: "https://instagram.com/akhilnarang"},
            {icon: "mdi-twitter", link: "https://twitter.com/akhiln24"}, 
            {icon: "mdi-google-plus", link: "https://plus.google.com/+AkhilNarang"}
            
          ]
        },
        {
          id: "JagravNaik",
          name: "Jagrav Naik",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/JagravNaik"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/jagrav_/"},
            {icon: "mdi-twitter", link: "https://twitter.com/JagravN"},
            {icon: "mdi-google-plus", link: "https://plus.google.com/+JagravNaik"}
          ]
        },
        {
          id: "ShreyanshLodha",
          name: "Shreyansh Lodha",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/ShreyanshLodha"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/shreyanshlodha/"},
            {icon: "mdi-twitter", link: "https://twitter.com/_ShreyanshLodha"}
          ]
        },
        {
          id: "deletescape",
          name: "Till Kottmann",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: ""},
          ]
        }
      ],
      designers: [
        {
          id: "McAwesomePL",
          name: "Karol Szcześniak",
          rank: "Graphic designer",
          links: [
            {icon: "mdi-google-plus", link: "https://plus.google.com/+KarolSzcze%C5%9Bniak"}
          ]
        },
        {
          id: "JoshuaBaldassarre",
          name: "Joshua Baldassarre",
          rank: "Graphic designer",
          links: [
            {icon: "mdi-twitter", link: "https://twitter.com/joshbaldassarre"}
          ]
        }
      ]
    };
  },
  methods: {
    getImgUrl(id) {
      return require("../assets/members/" + id + ".jpg");
    }
  }
};
</script>