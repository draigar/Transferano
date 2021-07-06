<template>
  <div class="tw-font-nunito">
    <Nuxt />
  </div>
</template>

<script>
export default {
  created(ctx) {
    let hash = this.$route.hash
    if (hash !== '') {
      if (process.browser) {
        this.$router.push(`/auth/signed-in/${hash}`)
      }
    }
  },
  mounted() {
    
  },
}
</script>