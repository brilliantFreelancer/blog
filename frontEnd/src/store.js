import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: '',
            full_name: '',
            first_name: '',
            last_name: '',
            display_name: '',
            email: '',
            phone_number: '',
            social_security_number: ''
        },
        isLoggedIn: false,
        jwt: '',
        api: 'http://localhost:3000'
    }
})