<template>
  <a-layout-header
    id="mainHeader"
    class="
      header
      tw-bg-primary tw-flex tw-justify-between tw-items-center
    "
    :style="{ position: 'fixed', zIndex: 5, width: '100%', height: '70px' }"
  >
    <div class="tw-flex tw-items-center ">
      <div class="tw-w-32 tw-mr-4">
        <h1 class="tw-text-white">{{ $store.state.appName }}</h1> 
      </div>

      <a-input-search
        id="topSearch"
        placeholder="Search for something here"
        style="width: 256px; height: 50px; border-radius: 40px"
        size="large"
        @search="onSearch"
      />
    </div>

    <div id="components-badge-demo-title" class="tw-relative">
      <a-icon
        type="bell"
        style=""
        class="tw-text-white tw-text-3xl"
        theme="filled"
      />
      <a-badge
        :count="5"
        title="Custom hover text"
        :number-style="{
          backgroundColor: '#fff',
          color: '#999',
          boxShadow: '0 0 0 1px #d9d9d9 inset',
        }"
        class="tw-absolute tw-mt-5 tw-right-1 tw-text-white tw-bg-white"
      >
        <a href="#" class="head-example" />
      </a-badge>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    setCollapsed() {
      if (this.collapsed) {
        this.collapsed = false
        this.$nuxt.$emit('collapsed', false)
      } else {
        this.collapsed = true
        this.$nuxt.$emit('collapsed', true)
      }
    },
  },
}
</script>

<style>
#topSearch .ant-input {
  border-radius: 10px;
  padding: 15px;
}
#topSearch .ant-input-suffix {
  right: 27px !important;
  top: 21px !important;
}

#mainHeader .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>