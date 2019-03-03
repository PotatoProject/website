<template>
  <v-app>
    <v-container fluid grid-list-md style="padding-top: 75px">
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-text>
              <div v-if="loading" class="text-xs-center mt-3">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
              <div>
                <p class="changelog" v-html="marked(card_text)"></p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Changelog",
  data() {
    return {
      card_text: null,
      loading: true,
      test: ``
    };
  },
  mounted() {
    this.$http.get("https://raw.githubusercontent.com/PotatoProject/vendor_potato/baked-release/CHANGELOG.md")
    .then(response => {
      setTimeout(() => {
        this.card_text = response.data;
        this.loading = false;
      }, 400)
    })
  }
};
</script>

<style scoped>
.changelog >>> img {
  max-width:100%;
  max-height:100%;
}
</style>
