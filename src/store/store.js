import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        valueArr: []
    },
    getters: {
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
        }
    }
});

export default store


