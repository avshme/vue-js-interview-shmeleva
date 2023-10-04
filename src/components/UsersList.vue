<template>
  <v-card
      max-width="450"
      class="mx-auto"
  >
    <v-list three-line>
      <template v-for="(item, index) in users">
        <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
        ></v-subheader>

        <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
        ></v-divider>

        <v-list-item
            v-else
            :key="item.title"
        >
          <v-list-item-avatar @click="item.showTooltip = !item.showTooltip">
            <v-tooltip bottom
              v-model="item.showTooltip"
            >
              {{ item.address }}
              <template v-slot:activator="{ props }">
                <v-img v-bind="props" :src="item.avatar" />
              </template>
            </v-tooltip>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.country"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'UsersList',

  data () {
    return {
      usersApi: null,
      usersDefault: [
        { header: 'List' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          country: 'Russia',
          score: 24,
          address: 'Russia, Moscow',
          showTooltip: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          country: 'USA',
          score: 28,
          address: 'USA, NY',
          showTooltip: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          country: 'USA',
          score: 5,
          address: 'USA, NY',
          showTooltip: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          country: 'Russia',
          score: 7,
          address: 'Russia, Petrozavodsk',
          showTooltip: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          country: 'USA',
          score: 4,
          address: 'USA, LA',
          showTooltip: false
        },
      ]
    }
  },
  
  beforeMount() {
    this.getUsersList();
  },

  computed: {
    ...mapState([
      'filterVariant',
    ]),
    users () {
      return this.usersApi ?? this.usersDefault
    }
  },

  methods: {
    async getUsersList() {
      const data = await axios.get('/some')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.usersApi = data ? JSON.parse(data) : undefined
    }
  }
}
</script>