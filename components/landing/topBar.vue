<template>
  <div>
    <div class="tw-flex tw-justify-between">
      <div
        class="tw-text-white"
        style="
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 54px;
        "
      >
        Transferano
      </div>
      <div class="tw-flex tw-text-white">
        <a
          href=""
          class="tw-px-2 tw-text-white"
          style="
            font-weight: 400;
            font-style: normal;
            font-size: 18px;
            line-height: 27px;
          "
          >Exchange</a
        >
        <a
          href=""
          class="tw-px-2 tw-text-white"
          style="
            font-weight: 400;
            font-style: normal;
            font-size: 18px;
            line-height: 27px;
          "
          >Forum</a
        >
      </div>
      <div v-if="!auth().isLoggedIn">
        <a-button
          @click="showModal"
          type="dashed"
          class="tw-bg-transparent tw-text-white tw-mr-4"
          size="large"
        >
          Login
        </a-button>
        <a-button type="primary" size="large"> Register </a-button>
      </div>
      <div v-else>
        <nuxt-link to="/app" class="tw-bg-green-500 tw-cursor-pointer tw-w-12 tw-h-12 tw-rounded-full userInitials">
          <h1 class="tw-text-white tw-text-2xl tw-m-0">
            {{ auth().user.email.substring(0, 2).toUpperCase() }}
          </h1>
        </nuxt-link>
      </div>
    </div>
    <Modal :show="showModal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log('====================================');
    console.log(this.auth());
    console.log('====================================');
  },
  methods: {
    showModal() {
      this.$nuxt.$emit('openModal', true)
    }
  }
}
</script>

<style scoped>
.userInitials {
  display: flex;
  align-items: center;
  justify-content: center;;
  border: solid 2px #fff;
}
</style>