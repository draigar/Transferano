<template>
  <div class="bg">
    <hero />
    <howItWorks />
    <buyingRequest :data="buyingRequest" />
    <buyingRequest :data="sellingRequest" />
    <whoWeAre />
    <promotionalBanner />
    <promotionalBanner2 />
    <foot />
  </div>
</template>

<script>
import hero from '@/components/landing/hero'
import howItWorks from '@/components/landing/howItWorks'
import buyingRequest from '@/components/landing/buyingRequest'
import whoWeAre from '@/components/landing/whoWeAre'
import promotionalBanner from '@/components/landing/promotionalBanner'
import promotionalBanner2 from '@/components/landing/promotionalBanner2'
import foot from '@/components/landing/footer'
import socketIoClient from 'socket.io-client'
export default {
  layout: 'landing',
  components: {
    hero,
    howItWorks,
    buyingRequest,
    whoWeAre,
    promotionalBanner,
    promotionalBanner2,
    foot,
  },
  data() {
    return {
      buyingRequest: {
        title: 'Buying Request',
        description:
          'Do you want to buy your digital Assets at Convenient rates. you are here',
      },
      sellingRequest: {
        title: 'Selling Request',
        description: '',
      },
    }
  },
  mounted() {
    // this.socket = this.$nuxtSocket({
    //   channel: '/',
    //   transports: ['websocket'],
    //   reconnection: true,
    // })
    // this.testConnection()
    // this.initconnection()
  },
  methods: {
    async testConnection() {
      const data = await this.http('GET', 'users')
      console.log(data)
    },
    async initconnection() {
      const socket = socketIoClient('http://localhost:3001', {
        transports: ['websocket'],
      })
      socket.on('connect', () => {
        console.log(socket.id)
        console.log('from remote server ')
        socket.emit('add-user', 'francis')
      })
    },
    getMessage() {
      this.socket.on('goLive', (resp) => {
        console.log('from nuxt====================================');
        console.log(resp);
        console.log('====================================');
      })
    },
  },
}
</script>

<style>
.bg {
}
</style>
