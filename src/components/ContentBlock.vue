<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <Filters />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <UsersList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from './UsersList.vue'
import Filters from './Filters.vue'

export default {
  name: 'ContentBlock',

  components: {
    UsersList,
    Filters
  },
}
</script>
