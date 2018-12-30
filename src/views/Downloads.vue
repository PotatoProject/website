<template>
  <v-app>
    <v-container fluid grid-list-md style="padding-top: 75px">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-2 v-for="device in devices" :key="device.id">
          <v-card hover :href="getSfLink(device.id)">
            <v-card-media height="250px" :src="getImgUrl(device.id)">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ device.name }}</div>
                <span class="grey--text">{{ device.maintainer }}</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'Downloads',
    data () {
      return {
        devices: [
          {
            id: 'bacon',
            name: 'OnePlus One',
            maintainer: 'Kshitij Gupta (AgentFabulous)',
          },
          {
            id: 'oneplus2',
            name: 'OnePlus 2',
            maintainer: 'Shreyansh Lodha',
          },
          {
            id: 'oneplus3',
            name: 'OnePlus 3/3T',
            maintainer: 'Nico Franke (ZerNico)',
          },
          {
          	id: 'enchilada',
          	name: 'OnePlus 6',
          	maintainer: 'Samriddha Basu (TheDorkKnightRises)',
          },
          {
            id: 'beryllium',
            name: 'Pocophone F1',
            maintainer: 'Kshitij Gupta (AgentFabulous)',
          },
          {
            id: 'kenzo',
            name: 'Xiaomi Redmi Note 3',
            maintainer: 'Absar Rahman',
          },
          {
            id: 'mido',
            name: 'Redmi Note 4',
            maintainer: 'Adesh Ikhar (Adesh15)',
          },
          {
            id: 'whyred',
            name: 'Xiaomi Redmi Note 5 Pro',
            maintainer: 'Raj Jadeja (rajadeja)',
          },
          {
            id: 'chiron',
            name: 'Xiaomi Mi Mix 2',
            maintainer: 'HrX (HrX03)',
          },
          {
            id: 'berkeley',
            name: 'Honor View 10',
            maintainer: 'David Sn (divadsn)',
          },
          {
            id: 'potter',
            name: 'Moto G5 Plus',
            maintainer: 'Hammered-Cannibal',
          },
          {
            id: 'sanders',
            name: 'Moto G5S Plus',
            maintainer: 'Dibyajyoti Samal (Dybios)',
          },
          {
            id: 'X00T',
            name: 'Asus Zenfone Max Pro M1',
            maintainer: 'Akash Khatri (MasterKhatri)',
          }
        ]
      }
    },
    methods: {
      getImgUrl(id) {
        return require('@/assets/phones/' + id + '.jpg')
      },
      getSfLink(id) {
        return 'https://sourceforge.net/projects/posp/files/' + id
      }
    }
  }
</script>

