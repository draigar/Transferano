<template>
  <a-layout id="components-layout-demo-fixed-sider" class="tw-font-nunito">
    <TopBar />
    <a-layout-sider
      :style="{
        overflow: 'auto',
        backgroundColor: 'white',
        height: '100vh',
        position: 'fixed',
        marginTop: '64px',
        left: 0,
      }"
    >
      <left-side-bar />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px', height: '100vh', position: 'relative' }">
      <a-layout-content :style="{marginTop: '64px'}" >
        <div :style="{ padding: '24px' }" class="tw-bg-gray-light">
          <Nuxt />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import TopBar from '@/components/dashboard/main/header'
import LeftSideBar from '@/components/dashboard/main/sidebar'
export default {
  components: {
    TopBar,
    LeftSideBar,
  },
  data() {
    return {
      layoutWidth: 200,
      collapsed: false,
    }
  },
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
