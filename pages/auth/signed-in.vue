<template>
  <a-spin size="large" />
</template>

<script>
import Auth0 from 'auth0-js'
export default {
  layout: 'landing',
  mounted() {
    var auth0 = new Auth0.WebAuth({
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.CLIENT_ID,
      redirectUri: 'http://localhost:3050/auth/signed-in',
      responseType: 'token',
    })
    let hash = this.$route.hash
    const _this = this;
    auth0.parseHash({ hash: hash }, function (err, authResult) {
      if (err) {
        _this.$store.commit('auth/setFailedLogin', true)
        _this.$router.push('/')
        return console.log(err)
      }
      console.log(authResult)
      auth0.client.userInfo(authResult.accessToken, function (err, user) {
        // Now you have the user's information
        if (err === null) {
            _this.$cookies.removeAll()
          _this.$cookies.set('transferano', user, {
            path: '/',
            maxAge: 60 * 60 * 24 * 1,
            // httpOnly: process.env.NODE_ENV !== 'production' ? false : true,
            sameSite: 'Strict',
            // secure: process.env.NODE_ENV !== "production" ? false : true,
          })
          _this.$store.commit('auth/setAuth', user)
          _this.$store.commit('auth/setFailedLogin', false)
          _this.$router.push('/app')
        } else {
          _this.$store.commit('auth/setFailedLogin', true)
          _this.$router.push('/')
        }
      })
    })
  },
}
</script>
