import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        valueArr: [],
        userInput:"",
    },
    getters: {
        getUserInput: function (state) {
            return state.userInput;
        },
        getValues: function (state) {
            return state.valueArr;

        },
        getValueByIndex: function (state) {
            return function (index) {
                return state.valueArr[index - 1];
            }
        }
    },
    mutations: {
        submitMessage(state, submitValue) {
            state.valueArr.push(submitValue);
        },
        setUserInput(state,userInput){
            state.userInput = userInput;
        },
    }
  })

  export default store;
  