import {createStore} from "vuex";

const state = {
  inHelloView: true 
}

const mutations = {
  changeNotInHelloView(state) {
    state.inHelloView = !state.inHelloView
  }
}

const actions = {
  doChangeHelloView(context) {
    context.commit('changeNotInHelloView')
  }
}

const getters = {
  getInHelloView(state) {
    return state.inHelloView
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
