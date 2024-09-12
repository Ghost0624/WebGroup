// src/store.js  
import Vue from 'vue';  
import Vuex from 'vuex';  

Vue.use(Vuex);  

const store = new Vuex.Store({  
  state: {  
    token: '',  
    user: {  
      id: '',  
      name: '',  
      email: '',  
      photo: ''  
    },  
  },  
  mutations: {  
    setUserInfo(state, userInfo) {  
      // Update state properties directly  
      state.token = userInfo.token; // Directly assign the token  
      state.user = userInfo.user;   // Directly assign the user object  
    },  
    logout(state) {  
      // Reset user properties and token  
      state.user = {  
        id: '',  
        name: '',  
        email: '',  
        photo: ''  
      };  
      state.token = '';  
    },  
  },  
  actions: {  
    signIn({ commit }, userInfo) {  
      commit('setUserInfo', userInfo); // Commit the userInfo to the mutation  
    },  
    logout({ commit }) {  
      commit('logout'); // Commit logout mutation  
    },  
  },  
  getters: {  
    getUserInfo(state) {  
      return state; // Return entire state object  
    },  
  },  
});  

export default store;