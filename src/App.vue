<template>
  <v-app>
    <v-navigation-drawer disable-resize-watcher app class="hidden-sm-and-up" v-model="drawer">
      <v-toolbar flat color="primary">
        <v-toolbar-title>
          <img src="@/assets/potato_full.svg" class="d-flex" height="27px">
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-badge color="red" v-if="item.badge">
            <span slot="badge">{{ item.badge }}</span>
            <span>{{ item.title }}</span>
          </v-badge>
          <v-list-tile-content v-else>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>

    <v-toolbar fixed dark app class="transparent elevation-0" style="z-index: 3;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img src="@/assets/potato_full.svg" class="d-flex" height="27px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar fixed dark app style="z-index: 1; background: linear-gradient(to right, #8E2DE2, #4A00E0);"></v-toolbar>
    <v-footer color="primary" style="background: linear-gradient(to right, #8E2DE2, #4A00E0);" class="footer">
      <v-layout row wrap>
        <v-flex xs12>
          <div class="white--text ml-3 text-xs-center">
            Made with
            <v-icon color="red">favorite</v-icon> by Nico Franke • &copy;2018 POSP
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        menuItems: [
          {
            icon: 'home',
            title: 'Home',
            link: '/'
          },
          {
            icon: 'phone_android',
            title: 'Downloads',
            link: '/downloads'
          },
          {
            icon: 'fastfood',
            title: 'Recipes',
            link: '/recipes'
          },
          {
            icon: 'people',
            title: 'Team',
            link: '/team'
          }
        ]
      }
    }
  }
</script>