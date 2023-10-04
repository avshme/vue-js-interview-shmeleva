const filterStore = {
  state () {
    return {
      filterVariantCountry: '',
      filterVariantScore: ''
    }
  },
  mutations: {
    changeFilterVariant (state, value) {
      state.filterVariant = value
    },
  }
}

export default filterStore