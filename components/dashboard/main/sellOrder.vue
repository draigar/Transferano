<template>
<div class="tw-mt-8">
  <div class="tw-mx-6 tw-flex tw-justify-between tw-align-middle">
    <div class="">
        <h2 class="tw-text-xl tw-font-semibold tw-text-gray-600">Sell Order</h2>
    </div>
    <div>
        <a-icon type="more" />
    </div>
</div>
 <div>
    <a-card  class="tw-bg-white tw-rounded-3xl tw-shadow-xl tw-border-transparent" :loading="transactionsLoading">
        <coinSelect/>
        <orderList></orderList>
    </a-card>
</div>
</div>
 
</template>

<script>
import orderList from "./orderList";
import coinSelect from "./coinSelect"
export default {
  data() {
    return {
      selectedKey: 0,
      transactionsLoading: false,
    }
  },
  components: {
    orderList,
    coinSelect
  },
  methods: {
    selectOffers(key) {

    }
  }
}
</script>