import { createStore } from 'vuex'

export default createStore({
  state: {
    lastProduct: {
      id: 0,
      label: 'None',
      price: 0,
      img: 'default.jpg'
    },
    cart: [{}]
  },
  mutations: {
    setLastProduct (state, payload) {
      state.lastProduct.id = payload.id
      state.lastProduct.label = payload.label
      state.lastProduct.price = payload.price
      state.lastProduct.img = payload.img
    },
    addToCart (state, product) {
      state.cart.push(product)
    }
  },
  getters: {
    returnLastProduct: state => {
      return state.lastProduct
    },
    returnCart: state => {
      return state.cart
    }
  },
  actions: {},
  modules: {}
})
