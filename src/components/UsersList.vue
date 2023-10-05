<template>
  <v-card
      max-width="450"
      class="mx-auto"
  >
    <v-list three-line>
      <v-subheader>List</v-subheader>

      <div v-for="(item, index) in filtredUsers" :key="index" >
        <v-divider v-if="index != 0" :inset="true"  />

        <v-list-item>
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
            <v-list-item-subtitle v-html="`Score: ${item.score}`"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
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
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          country: 'Russia',
          score: 24,
          address: 'Russia, Moscow',
          showTooltip: false
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          country: 'USA',
          score: 28,
          address: 'USA, NY',
          showTooltip: false
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          country: 'USA',
          score: 15,
          address: 'USA, NY',
          showTooltip: false
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          country: 'Russia',
          score: 7,
          address: 'Russia, Petrozavodsk',
          showTooltip: false
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          country: 'USA',
          score: 4,
          address: 'USA, LA',
          showTooltip: false
        },
      ],
      filtredUsers: null
    }
  },
  
  beforeMount() {
    this.getUsersList();
    this.filtredUsers = this.users
  },

  mounted() {
    this.$watch(vm => [vm.filterCountry, vm.filterScore], () => {
      if (this.filterCountry && !this.filterScore) {
        this.filtredUsers = this.users.filter(this.filterUsersByCountry)
      }
      else if (!this.filterCountry && this.filterScore) {
        this.filtredUsers = this.users.filter(this.filterUsersByScore)
      }
      else if (this.filterCountry && this.filterScore) {
        this.filtredUsers = this.users
          .filter(this.filterUsersByCountry)
          .filter(this.filterUsersByScore)
      }
      else {
        this.filtredUsers = this.usersDefault
      }
      
    }, {
      immediate: true,
      deep: true 
    }) 
  },

  computed: {
    ...mapState([
      'filterCountry',
      'filterScore'
    ]),

    users () {
      return this.usersApi ?? this.usersDefault
    },
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
    },
    filterUsersByCountry (value) {
      return this.filterCountry == value.country.toLowerCase()
    },
    filterUsersByScore (value) {
      if (this.filterScore == '> 20') {
        return value.score > 20
      }
      else if (this.filterScore == '< 10') {
        return value.score < 10
      }
      else {
        return value
      } 
    }
  }
}
</script>