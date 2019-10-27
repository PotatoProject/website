<template>
  <v-app>
    <v-container fluid grid-list-md style="padding-top: 75px">
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="text-xs-center display-1">Lead Developers</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 lg2 pa-2 v-for="founder in founders" :key="founder.id">
          <v-card hover height="100%" class="flexcard">
            <v-img height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(founder.id, founder.gravatar, founder.hash)" />
              </v-avatar>
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ founder.name }}</div>
                <span class="grey--text">{{ founder.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <template  v-for="link in founder.links" >
                <v-btn icon :href="link.link" target="_blank" :key="link.icon">
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
          <v-card hover height="100%" class="flexcard">
            <v-img height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(member.id, member.gravatar, member.hash)" />
              </v-avatar>
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ member.name }}</div>
                <span class="grey--text">{{ member.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <template  v-for="link in member.links" >
                <v-btn icon :href="link.link" target="_blank" :key="link.icon">
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
          <v-card hover height="100%" class="flexcard">
            <v-img height="200px" src="">
              <v-avatar size="160px" style=" display: block; margin: 0 auto; padding-top: 20px;">
                <img :src="getImgUrl(designer.id, designer.gravatar, designer.hash)" />
              </v-avatar>
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ designer.name }}</div>
                <span class="grey--text">{{ designer.rank }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon disabled></v-btn>
              <template  v-for="link in designer.links" >
                <v-btn icon :href="link.link" target="_blank" :key="link.icon">
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
          rank: "Founder and Lead Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/AgentFabulous"},
            {icon: "mdi-instagram", link: "https://instagram.com/agent_fabulous"} 
          ]
        },
        {
          id: "ZerNico",
          name: "Nico Franke",
          rank: "Co-founder and Lead Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/ZerNico"},
            {icon: "mdi-instagram", link: "https://instagram.com/z3rnico"},
            {icon: "mdi-twitter", link: "https://twitter.com/Z3rNico"}
          ]
        },
        {
          id: "ShreyanshLodha",
          name: "Shreyansh Lodha",
          rank: "Lead Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/ShreyanshLodha"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/shreyanshlodha/"},
            {icon: "mdi-twitter", link: "https://twitter.com/_ShreyanshLodha"}
          ]
        },
        {
          id: "rajadeja",
          name: "Raj Jadeja",
          rank: "Lead Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/rajadeja"},
            {icon: "mdi-instagram", link: "https://instagram.com/raj__jadeja"}
          ]
        },
      ],
      members: [
        {
          id: "akhilnarang",
          name: "Akhil Narang",
          rank: "Developer",
          gravatar: true,
          hash: "bee0242eef6e2aa4862c3b957d601ee5",
          links: [
            {icon: "mdi-github-circle", link: ""},
            {icon: "mdi-instagram", link: "https://instagram.com/akhilnarang"},
            {icon: "mdi-twitter", link: "https://twitter.com/akhiln24"}
            
          ]
        },
        {
          id: "hrx",
          name: "HrX",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/HrX03"},
            {icon: "mdi-instagram", link: "https://instagram.com/b_b_biancoboi"},
            {icon: "mdi-twitter", link: "https://twitter.com/HrX2003"},
            {icon: "mdi-reddit", link: "https://www.reddit.com/user/Loller06"}
          ]
        },
        {
          id: "JagravNaik",
          name: "Jagrav Naik",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/JagravNaik"},
            {icon: "mdi-instagram", link: "https://www.instagram.com/jagrav_/"},
            {icon: "mdi-twitter", link: "https://twitter.com/JagravN"}
          ]
        },
        {
          id: "deletescape",
          name: "Till Kottmann",
          rank: "Developer",
          links: [
            {icon: "mdi-github-circle", link: "https://github.com/deletescape"},
            {icon: "mdi-instagram", link: "https://instagram.com/deletescape"},
            {icon: "mdi-twitter", link: "https://twitter.com/deletescape"}
          ]
        }
      ],
      designers: [
        {
          id: "JoshuaBaldassarre",
          name: "Joshua Baldassarre",
          rank: "Graphic Designer",
          links: [
            {icon: "mdi-twitter", link: "https://twitter.com/joshbaldassarre"}
          ]
        },
        {
          id: "McAwesomePL",
          name: "Karol Szcześniak",
          rank: "Graphic Designer",
          links: [
          ]
        },
        {
          id: "Valvze",
          name: "Parth Shah",
          rank: "Animator",
          links: [
            {icon: "mdi-instagram", link: "https://instagram.com/partholemeu"},
            {icon: "mdi-youtube", link: "https://www.youtube.com/channel/UCdcqOdNQKuq0FYH_6XETGyw"}
          ]
        }
      ]
    };
  },
  methods: {
    getImgUrl(id, gravatar, hash) {
      if (gravatar === true) {
        return "https://www.gravatar.com/avatar/" + hash + ".jpg?s=400"
      }
      else {
        return require("../assets/members/" + id + ".jpg");
      }
    }
  }
};
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>