<template>
  <div>
    <v-select
      v-model="currentVariantCountry"
      :items="filterCountry"
      clearable
      label="Filter by country"
    />

    <v-select
      v-model="currentVariantScore"
      :items="filterScore"
      clearable
      label="Filter by score"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Filters',

  data () {
    return {
      currentVariantCountry: '',
      currentVariantScore: '',
      filterCountry: [
        'russia',
        'usa',
      ],
      filterScore: [
        '> 20',
        '< 10',
      ]
    }
  },
  computed: {
    ...mapState([
      'filterVariant',
    ]),
  }
}
</script>