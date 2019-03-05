<template>
  <v-app>
    <v-container fluid grid-list-md style="padding-top: 75px">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 pa-2>
          <v-card
            dense
            floating
          >
            <v-text-field
              style="padding-left: 15px"
              v-model="search"
              hide-details
              prepend-icon="search"
              label="Search..."
              single-line
              solo
              flat
            ></v-text-field>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2 v-for="device in filteredDevices" :key="device.id" >
          <v-card hover :href="getSfLink(device.id)">
            <v-img height="250px" :src="getImgUrl(device.id)">
            </v-img>
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
        search: '',
        devices: [
          {
            id: 'bacon',
            name: 'OnePlus One',
            maintainer: 'Kshitij Gupta (AgentFabulous)',
          },
          {
            id: 'onyx',
            name: 'OnePlus X',
            maintainer: 'Kushagra Vipradas (kushagra57)',
          },
          {
            id: 'oneplus2',
            name: 'OnePlus 2',
            maintainer: 'Shreyansh Lodha',
          },
          {
            id: 'oneplus3',
            name: 'OnePlus 3/3T',
            maintainer: 'Jagrav Naik',
          },
          {
            id: 'enchilada',
            name: 'OnePlus 6',
            maintainer: 'Samriddha Basu (TheDorkKnightRises)',
          },
          {
            id: 'fajita',
            name: 'OnePlus 6T',
            maintainer: 'Ujwal P (ujwalp15)',
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
            maintainer: 'Rahul Mishra (beingmishra)',
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
            id: 'dipper',
            name: 'Xiaomi Mi 8',
            maintainer: 'Arseniy Graur (argraur)',
          },
          {
            id: 'potter',
            name: 'Moto G5 Plus',
            maintainer: 'Ashwin R C (AshwinRC)',
          },
          {
            id: 'sanders',
            name: 'Moto G5S Plus',
            maintainer: 'Dibyajyoti Samal (Dybios)',
          },
          {
            id: 'ether',
            name: 'Nextbit Robin',
            maintainer: 'Raj Jadeja (rajadeja)',
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
    },
    computed: {
      filteredDevices() {
        return this.devices.filter(device => {
          return device.name.toLowerCase().match('^' + this.search.toLowerCase() + ".*", 'i') || 
          device.id.toLowerCase().match('^' + this.search.toLowerCase() + ".*", 'i') ||
          device.maintainer.toLowerCase().match('^' + this.search.toLowerCase() + ".*", 'i')
        })
      }
    }
  }
</script>
