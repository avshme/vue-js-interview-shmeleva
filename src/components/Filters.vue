<template>
  <div>
    <v-select
      v-model="currentFilterCountry"
      :items="countryList"
      clearable
      label="Filter by country"
      @change="changeFilterCountry(currentFilterCountry)"
    />

    <v-select
      v-model="currentFilterScore"
      :items="scoreList"
      clearable
      label="Filter by score"
      @change="changeFilterScore(currentFilterScore)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Filters',

  data () {
    return {
      currentFilterCountry: '',
      currentFilterScore: '',
      countryList: [
        'russia',
        'usa',
      ],
      scoreList: [
        '> 20',
        '< 10',
      ]
    }
  },
  computed: {
    ...mapState([
      'filterCountry',
      'filterScore'
    ]),
  },
  mounted() {
    this.currentFilterCountry = this.filterCountry;
    this.currentFilterScore = this.filterScore;
  },
  methods: {
    changeFilterCountry (value) {
      this.$store.commit("changeFilterCountry", value);
    },
    changeFilterScore (value) {
      this.$store.commit("changeFilterScore", value);
    },
  },
}
</script>