import { createStore } from 'vuex'

export default createStore({
  state: {
    lastProduct: {
      id: 0,
      label: 'None',
      price: 0,
      img: 'default.jpg'
    }
  },
  mutations: {
    setLastProduct (state, payload) {
      state.lastProduct.id = payload.id
      state.lastProduct.label = payload.label
      state.lastProduct.price = payload.price
      state.lastProduct.img = payload.img
    }
  },
  getters: {
    returnLastProduct: state => {
      return state.lastProduct
    }
  },
  actions: {},
  modules: {}
})
