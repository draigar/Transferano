<template>
<div>
  <div>
    <h2 class="tw-ml-6">Market Place</h2>
  </div>
  <div class="tw-bg-white border-gray-200 tw-rounded-3xl tw-shadow-xl">
      <a-tabs size="large" class="tab-head">
        <a-tab-pane key="1" tab="Market Orders">
         <ordertab/>
        </a-tab-pane>
        <a-tab-pane key="2" tab="My Advertisements">
          <offertab/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="My Trades">
          <myOrderTab/>
        </a-tab-pane>
        <a-button class="tw-mr-6 tw-border-primary tw-border-2 tw-text-primary" slot="tabBarExtraContent" @click="open">
          <a-icon type="funnel-plot" class="" /> filter options
        </a-button>
      </a-tabs>
    <!-- <div class="tw-shadow-md tab-head tw-flex tw-justify-between">
      <div class="tw-flex ">
        <div v-for="(data, i) in tabKeys" :key="i" @click="() => selectedKey = i" :class="`tab-head-tab ${selectedKey === i ? 'selected' : ''}`"> {{ data.title }} </div>
      </div>
      <div>
        
      </div>
    </div>
    <div class="tw-shadow-md tw-mt-2">
      <a-card :loading="offersLoading" class="tw-p-0" :bodyStyle="{padding: 0}">
        <offer-tables></offer-tables>
      </a-card>
    </div> -->
    <filter-option-modal ref="filterModal"></filter-option-modal>
  </div>
</div>
  
</template>

<script>
import ordertab from "../orderComponents/ordertab";
import offertab from "../offerComponents/offertab";
import myOrderTab from "../myOrderComponents/myOrderTab";
import filterOptionModal from "./filterModal";

export default {
  data() {
    return {
      selectedKey: 0,
      offersLoading: false,
      tabKeys: [
        {
          title: 'Buy Offers',
        },
        {
          title: 'Sell Offers',
        },
        {
          title: 'My Offers',
        },
      ]
    }
  },
  components: {
    ordertab,
    offertab,
    myOrderTab,
    filterOptionModal
  },
  methods: {
    selectOffers(key) {

    },
    open(){
        this.$refs.filterModal.showModal()
    }
  }
}
</script>

<style scoped>
.tab-head {
  width: 100%;
  margin-bottom: 5px;
}
.tab-head-tab {
  padding: 15px 27px;
  font-weight: 400;
  font-size: 15px;
  color: #bdbdbd;
  cursor: pointer;
}
.tab-head-tab.selected {
  color: rgb(32, 13, 138);
  border-bottom: solid 3px rgb(32, 13, 138);
}
</style>