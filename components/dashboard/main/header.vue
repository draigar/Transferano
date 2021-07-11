<template>
  <a-layout-header
    id="mainHeader"
    class="header tw-bg-primary tw-flex tw-justify-between tw-items-center"
    :style="{ position: 'fixed', zIndex: 5, width: '100%', height: '70px' }"
  >
    <div class="tw-flex tw-items-center">
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
    <div class="tw-flex tw-justify-between tw-items-center">
		<div id="components-badge-demo-title" class="tw-mr-7">
		  	<a-dropdown class="" placement="bottomCenter">
				<a-badge :count="5" dot>
					<a-icon class="tw-text-white tw-text-xl tw-font-bold" theme="outlined" type="notification" />
				</a-badge>
				<a-menu slot="overlay">
				<a-menu-item>
					<a href="javascript:;">1st menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">2nd menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">3rd menu item</a>
				</a-menu-item>
				</a-menu>
			</a-dropdown>
     	 </div>

		<div id="components-badge-demo-title" class="tw-mr-10">
			<a-dropdown class="" placement="bottomCenter">
				<a-badge :count="5" dot>
					<a-icon class="tw-text-white tw-text-xl tw-font-bold" theme="outlined" type="bell" />
				</a-badge>
				<a-menu slot="overlay">
				<a-menu-item>
					<a href="javascript:;">1st menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">2nd menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">3rd menu item</a>
				</a-menu-item>
				</a-menu>
			</a-dropdown>
		</div>
		<a-dropdown class="" placement="bottomRight">
			<a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
				<span class="tw-mr-2 tw-flex tw-items-center">
					<img class=" tw-w-10 tw-h-10 tw-rounded-md tw-mr-4" src="/team-1/team-3.jpg"/> 
					<span class="tw-flex tw-items-center">
						<span class=" tw-text-base tw-font-semibold tw-text-white">druglaw</span> 
						<a-icon type="caret-down" class="tw-ml-4 tw-text-white tw-font-bold" />
					</span>
				</span> 
			</a>
			<a-menu slot="overlay">
				<a-menu-item>
					<a href="javascript:;"><a-icon type="user"  class="tw-mr-2 tw-text-lg" />Profile</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;"><a-icon type="safety"  class="tw-mr-2 tw-text-lg" />Verify Account</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;"><a-icon type="usergroup-add"  class="tw-mr-2 tw-text-lg" />Invite Friends</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;"><a-icon type="setting"  class="tw-mr-2  tw-text-lg" />Settings</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;"><a-icon type="lock"  class="tw-mr-2  tw-text-lg" /> Logout</a>
				</a-menu-item>
			</a-menu>
		</a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
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
    }
  }
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
