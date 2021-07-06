<template>
<div class="tw-mt-8">
  <div>
    <h2 class="tw-ml-6">Recent trading activities</h2>
  </div>
  <div class="">
    <a-card :loading="transactionsLoading" class="tw-p-5 tw-bg-white tw-border-transparent tw-rounded-3xl tw-shadow-xl" :bodyStyle="{padding: 0}">
    <div class=" tw-flex tw-justify-between tw-align-middle">
        <div>
            <a-radio-group default-value="1" button-style="solid">
                <a-radio-button value="30">
                Monthly
                </a-radio-button>
                <a-radio-button value="7">
                Weekly
                </a-radio-button>
                <a-radio-button value="1">
                Daily
                </a-radio-button>
            </a-radio-group>
        </div>
    </div>
    <transactionsList></transactionsList>
    </a-card>
  </div>
</div>

</template>

<script>
import transactionsList from "./transactionsList";
export default {
  data() {
    return {
      selectedKey: 0,
      transactionsLoading: false,
    }
  },
  components: {
    transactionsList
  },
  methods: {
    selectOffers(key) {

    }
  }
}
</script>
