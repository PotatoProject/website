<template>
  <v-app>
  <nav>
    <div class="background">
      <v-layout column align-center justify-center class="white--text" style="z-index: 4; width: 100%; position: absolute; top: 30%;">
        <img src="../assets/potato.svg" class="mb-3" width="150px">
        <h1 class="white--text mb-2 display-1 text-xs-center">Potato Open Sauce Project</h1>
        <div class="subheading mb-3 text-xs-center">Powered by Android&trade;</div>
        <v-btn class="white" large href="/downloads">
          Get Started
        </v-btn>
      </v-layout>
    </div>
    <div id="color-cover"></div>
    <div class="box"></div>
  </nav>
<section>
    <v-container grid-list-xl>
      <v-layout row wrap align-center>
        <v-flex xs12 md12>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="text-xs-center display-1">About us</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">
                Potato Open Sauce Project is a butter smooth Android aftermarket firmware. 
                We handpicked the best features around and are adding our own sauce to it.
                Get ready to taste the unique features it brings with itself.
                </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-card class="elevation-0 transparent">
            <img src="../assets/POSP_phone2.svg" class="mb-3" width="50%" style="  display:block; margin-left:auto; margin-right:auto;">
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large color="primary">mdi-github-circle</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Open Source</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              Sharing is caring. Thats why the POSP source code is available on <a href="https://github.com/PotatoProject">Github</a>. Use a Fork to eat it.  
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large color="primary">update</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Up to date</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              POSP is always on the latest Android version bringing you the latest features and security patches. 
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large color="primary">phone_android</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Devices</div>
            </v-card-title>
            <v-card-text class="text-xs-center">
              We support a wide range of devices with more coming up soon&trade;
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6 md3>
          <v-card class="elevation-0 transparent">
            <img v-img:screenshot src="@/assets/screenshots/screenshot1.png" class="mb-3" width="60%" style="  display:block; margin-left:auto; margin-right:auto;">
          </v-card>
        </v-flex>
        <v-flex xs6 md3>
          <v-card class="elevation-0 transparent">
            <img v-img:screenshot src="@/assets/screenshots/screenshot2.png" class="mb-3" width="60%" style="  display:block; margin-left:auto; margin-right:auto;">
          </v-card>
        </v-flex>
        <v-flex xs6 md3>
          <v-card class="elevation-0 transparent">
            <img v-img:screenshot src="@/assets/screenshots/screenshot3.png" class="mb-3" width="60%" style="  display:block; margin-left:auto; margin-right:auto;">
          </v-card>
        </v-flex>
        <v-flex xs6 md3>
          <v-card class="elevation-0 transparent">
            <img v-img:screenshot src="@/assets/screenshots/screenshot4.png" class="mb-3" width="60%" style="  display:block; margin-left:auto; margin-right:auto;">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </section>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
  
    data () {
      return {
      }
    },
    methods: {
      handleScroll: function () {
        document.getElementById('color-cover').style.opacity =
        (document.documentElement.scrollTop / window.outerHeight) * 1.3
      }
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style>
  #color-cover {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: 2;
    position: absolute;
    pointer-events: none;
    background: linear-gradient(to right, #8E2DE2, #4A00E0);
  }

  .background {
    background: url(../assets/home.jpg) center center;
    background-size: cover;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }

  .box {
    background-size: cover;
    position: static;
    width: 100vw;
    height: 100vh;
    opacity: 0;
  }

</style>