export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'transferano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
	'~assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
	'@/plugins/axios',
    '@/plugins/mixins',
    '@/plugins/request',
    '@/plugins/cookie',
	'@/plugins/globalComponents',
	{
      src: '@/plugins/vue2-perfect-scrollbar',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
	'@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
	// https://nuxt-socket-io.netlify.app/
    'nuxt-socket-io',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',
  ],

  auth: {
    // Options
    strategies: {
      google: {
        clientId: '530632032738-hpn3u6fv1dqfopd30s4t051pmiu1ft6j.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        redirectUri: 'http://localhost:3050/auth/signed-in',
        codeChallengeMethod: '',
        token: {
          maxAge: 3600,
        },
        responseType: 'token id_token'
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
	  retry: true
  },
  
  // config for nuxt socket io
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: `http://localhost:${process.env.PORT}`
    }]
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  
  loading: {
    color: '#200D8A',
  },

  serverMiddleware: [{
    path: "/api",
    handler: "~/api/index.js"
  }, ],
  
  router: {
    // base: '/app/',
    middleware: ['index'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  server: {
    port: process.env.PORT || 3050, // default port
    host: '0.0.0.0' // default localhost
  },

  env: {
    AUTH_PROVIDER: process.env.AUTH_PROVIDER,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    BASE_URL: process.env.BASE_URL,
  }
  
}
