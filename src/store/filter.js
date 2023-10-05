const filterStore = {
  state () {
    return {
      filterCountry: '',
      filterScore: ''
    }
  },
  mutations: {
    changeFilterCountry (state, value) {
      state.filterCountry = value
    },
    changeFilterScore(state, searchByCountry) {
      state.filterScore = searchByCountry;
    },
  }
}

export default filterStore