import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        label: 'Koks sluchawki',
        price: 200,
        img: 'https://i5.walmartimages.com/asr/e02e2d52-5ade-4236-b24a-e9c88faadf46.8d82c070488397fe72d864004a9bac8b.png',
        misc: [
          'Pasmo przenoszenia: 5000 hz',
          'Rodzaj: Nauszne'
        ]
      },
      {
        id: 2,
        label: 'Mikrofon tracer',
        price: 70,
        img: 'https://image.ceneostatic.pl/data/products/37901263/i-tracer-mikrofon-tracet-screamer.jpg',
        misc: [
          'Rodzaj: Pojemnościowy',
          'Czułość: ~ 58dB'
        ]
      },
      {
        id: 3,
        label: 'Dysk Adata',
        price: 400,
        img: 'https://allegro.stati.pl/AllegroIMG/PRODUCENCI/A-DATA/AHV620S-1TU3-CBK/a2.jpg',
        misc: [
          'Pojemność: 2TB',
          'Typ: SSD'
        ]
      },
      {
        id: 4,
        label: 'Karta graficzna Nvidia',
        price: 1500,
        img: 'https://a.allegroimg.com/original/11e1b9/99395ef24facbfa60dd0a559645e/Karta-graficzna-nvidia-GTX1050Ti-4GB-DDR5-Dual-Fan',
        misc: [
          'Wbudowana pamięć RAM: 4GB',
          'Rodzaj chipsetu: Quatro2948'
        ]
      },
      {
        id: 5,
        label: 'Procesor Intel',
        price: 3000,
        img: 'https://4.allegroimg.com/s512/11e3bc/5137651f4babbba8a21e6f4b8184/PROCESOR-INTEL-CORE-i9-7920X-FCLGA2066-OEM',
        misc: [
          'Taktowanie: 4,5GHz',
          'Ilość rdzeni: 32'
        ]
      }

    ],
    lastProduct: {
      id: 0,
      label: 'None',
      price: 0,
      img: 'default.jpg',
      misc: ['Test']
    },
    cart: [{}] // wtf
  },
  mutations: {
    setLastProduct (state, payload) {
      state.lastProduct.id = payload.id
      state.lastProduct.label = payload.label
      state.lastProduct.price = payload.price
      state.lastProduct.img = payload.img
      state.lastProduct.misc = payload.misc
    },
    addToCart (state, product) {
      state.cart.push(product)
    }
  },
  getters: {
    returnLastProduct: state => {
    //  console.log('last product')
      return state.lastProduct
    },
    returnCart: state => {
      return state.cart
    },
    returnProducts: state => {
    //  console.log(state.products)
      return state.products
    }
  },
  actions: {},
  modules: {}
})
