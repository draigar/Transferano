<template>
  <div>
    <perfect-scrollbar>
      <div class="tw-w-full tw-relative tw-h-52 tw-flex tw-justify-center">
        <div
          class="
            tw-w-28
            tw-h-28
            tw-absolute
            tw-bg-complementary
            tw-top-4
            tw-mr-1
            tw-rounded-full
          "
        ></div>
        <div
          class="
            tw-w-28 tw-h-28 tw-relative tw-rounded-full tw-mt-5 tw-z-10 tw-bg-bg
          "
        >
          <img src="/team-1/team-3.jpg" class="pro-image" />
        </div>
        <div
          class="
            tw-w-28 tw-h-28 tw-absolute tw-bg-primary tw-ml-1 tw-rounded-full
          "
          style="bottom: 5em"
        ></div>
        <div
          class="
            tw-absolute
            tw-bottom-0
            tw-w-full
            tw-left-0
            tw-flex
            tw-flex-col
            tw-justify-center
            tw-items-center
          "
        >
          <h1
            class="tw-m-0 tw-text-black1"
            style="
              font-weight: 600;
              font-style: normal;
              font-size: 18px;
              line-height: 24.55px;
            "
          >
            Benjamin Francis
          </h1>
          <p
            class="tw-text-gray-2 tw-text-center"
            style="
              font-weight: 400;
              font-size: 14px;
              font-style: normal;
              line-height: 19.1px;
            "
          >
            ID: 811-367-445
          </p>
        </div>
      </div>
      <a-menu
        theme="light"
        mode="inline"
        :default-selected-keys="selected"
        :style="{ borderRight: '1px solid transparent', padding: '0 10px' }"
      >
        <template v-for="(menu, i) in menuData">
          <a-menu-item :key="`${i}`" class="tw-mb-4">
            <NuxtLink  :to="menu.url">
				<span class="tw-flex tw-items-center">
					<a-icon v-if="menu.iconType === 'icon'" type="user" />
						<img
						v-if="menu.iconType === 'img'"
						:src="menu.icon"
						class="tw-pr-2"
						style="width: 24px"
						/>
						<span
						style="font-size: 13px; line-height: 19.1px; font-weight: 600"
						>{{ menu.title }}</span>
				</span>
            </NuxtLink>
          </a-menu-item>
          <!-- <a-menu-item :key="`${i}`" class="tw-mb-4">
          <NuxtLink :to="menu.url" class="tw-flex tw-items-center ">
            <div>
              <div v-if="selected.includes('0')" class="tw-mr-2 tw-bg-primary tw-rounded-lg tw-px-2 tw-py-2 tw-flex tw-items-center">
                <homeIcon />
              </div>
              <div v-else class="tw-mr-2 tw-bg-gray-800 tw-bg-opacity-75 tw-rounded-lg tw-px-2 tw-py-2 tw-flex tw-items-center">
                <homeIcon />
              </div>
            </div>
            <span
              style="font-size: 13px; line-height: 19.1px; font-weight: 600"
              >{{ menu.title }}  {{ i }}</span
            >
          </NuxtLink>
        </a-menu-item> -->
        </template>
      </a-menu>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { getLeftMenuData } from '@/constants/menu'
// import homeIcon from '@/components/UI/sidebarIcons/homeIcon.vue'
export default {
  components: {
    // homeIcon,
  },
  data() {
    return {
      collapsed: false,
      menuData: getLeftMenuData,
      selected: ['0'],
    }
  },
  beforeDestroy() {
    this.$nuxt.$off()
  },
  mounted() {
    this.$nuxt.$on('collapsed', (val) => {
      console.log(val)
      this.collapsed = val
    })
  },
}
</script>

<style scoped>
.ant-menu-item-selected {
  display: flex !important;
  align-items: center !important;
  height: 2.7rem !important;
  border: none !important;
  border-radius: 7px;
  background-color: rgb(32, 13, 138) !important;
  color: #fff !important;
}
.ant-menu-item::after {
  border: none !important;
}

/* 
.ant-menu-item {
  padding: 0 10px !important;
} */
.ps {
  /* height: 100%; */
}
.pro-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 5px;
}
</style>