import Vue from 'vue';
import authPlugin from './auth';
Vue.mixin({
  methods: {
    async http(method, url, dataOBJ, headers = []) {
      let neaders = {
        'content-type': 'multipart/form-data',
      }
      headers.push(neaders)
      try {
        const res = await this.$axios({
          method: method,
          url: url,
          data: dataOBJ,
          headers: {},
        })
        return res;
      } catch (e) {
        console.log('main error here ',e);
        return e.response
      }
    },
    auth() {
     const isLoggedIn = this.$store.state.auth.isLoggedIn; 
     const user = this.$store.state.auth.user;
     const failedLogin = this.$store.state.auth.failedLogin;
     return {isLoggedIn, user, failedLogin}
    }
  }
});
