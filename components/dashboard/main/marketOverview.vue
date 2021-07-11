<template>
<div class="tw-mt-8">
  <div>
    <h2 class="tw-ml-6 tw-text-xl tw-font-semibold tw-text-gray-600">Market Overiew</h2>
  </div>
  <div class="tw-bg-white border-gray-200 tw-rounded-3xl tw-shadow-xl tw-p-6">
       <div>
            <a-radio-group default-value="1" button-style="solid" class="tw-my-6">
                <a-radio-button value="BTC" class="tw-mr-10 tw-rounded-full tw-h-10 tw-w-10 tw-m-0 tw-p-0">
                    <img :src="`/icons/icon.svg`" class="tw-w-10" />
                </a-radio-button>
                <a-radio-button value="ETH" class="tw-mr-10 tw-rounded-full tw-h-10 tw-w-10 tw-m-0 tw-p-0">
                    <img :src="`/icons/ethereum.svg`" class="tw-w-10" />
                </a-radio-button>
                <a-radio-button value="XRP" class="tw-mr-10 tw-rounded-full tw-h-10 tw-w-10 tw-m-0 tw-p-0">
                    <img :src="`/icons/ripple.svg`" class="tw-w-10" />
                </a-radio-button>
                <a-radio-button value="LTC" class="tw-mr-10 tw-rounded-full tw-h-10 tw-w-10 tw-m-0 tw-p-0">
                    <img :src="`/icons/icon-1.svg`" class="tw-w-10" />
                </a-radio-button>
            </a-radio-group>
        </div>
      <chart></chart>
  </div>
</div>
  
</template>

<script>
import chart from "./marketChart";
export default {
  data() {
    return {
      selectedKey: 0,
      transactionsLoading: false,
    }
  },
  components: {
    chart
  },
  methods: {
    selectOffers(key) {

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