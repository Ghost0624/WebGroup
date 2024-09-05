// src/store.js  
import Vue from 'vue';  
import Vuex from 'vuex';  

Vue.use(Vuex);  

const store = new Vuex.Store({  
  state: { // State should be defined here  
    auth: {  
      token: '',  
      id: '',  
      name: '',  
      email: '',  
      photo: ''   
    },  
  },  
  mutations: {  
    setUserInfo(state, userInfo) { // Corrected to accept state and userInfo  
      state.auth = { ...state.auth, ...userInfo }; // Update auth state with userInfo  
    },  
    logout(state) { // Corrected to accept state and userInfo  
      state.auth = { 
        token: '',  
        id: '',  
        name: '',  
        email: '',  
        photo: ''  
      }; // Update auth state with userInfo  
    },  
  },
  actions: {  
    signIn({ commit }, userInfo) { // Accept userInfo as a parameter  
      commit('setUserInfo', userInfo); // Pass userInfo to the mutation  
    },
    logout({ commit }) { // Accept userInfo as a parameter  
      commit('logout'); // Pass userInfo to the mutation  
    },
  },  
  getters: {  
    getUserInfo(state) { // Corrected to accept state  
      return state.auth; // Return the auth state  
    },  
  },  
});  

export default store;