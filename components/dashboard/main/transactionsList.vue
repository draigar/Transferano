<template>
  <a-list
    class="demo-loadmore-list"
    :loading="loading"
    item-layout="horizontal"
    :data-source="data"
  >
    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">
        loading more
      </a-button>
    </div>
    <a-list-item slot="renderItem" slot-scope="transaction">
      <div class="tw-flex tw-w-56">
        <a-avatar shape="square" size="large" :style="
        transaction.txnType === 1
        ? 'color: #FF2E2E; backgroundColor: rgba(255, 46, 46, 0.1)'
        : 'color: #2BC155; backgroundColor: rgba(43, 193, 85, 0.1)'" >
          <a-icon v-if="transaction.txnType === 1" type="arrow-left" />
          <a-icon v-if="transaction.txnType === 2" type="arrow-right" />
        </a-avatar>
        <div class="tw-ml-5 tw-flex tw-items-center">
           <img :src="`/icons/${transaction.coin.img}`" class="tw-w-7 tw-mr-1" />
           <span class="tw-font-semibold tw-text-base">{{ transaction.coin.name }}</span>
        </div>
      </div>
      <div class="tw-font-semibold tw-text-base">{{ transaction.datetime }}</div>
      <div class="tw-font-semibold tw-text-base tw-text-right">${{ transaction.amount }}</div>
      <span
          :class="[
              transaction.status === 1
              ? 'tw-text-gray-3'
              : transaction.status === 2
              ? 'tw-text-error-1'
              : 'tw-text-success',
              'tw-font-semibold tw-text-base'
          ]"
          >
          {{ transaction.status === 1 ? 'Pending' : transaction.status === 2 ? 'Cancelled' : 'Successful'}}
      </span>
    </a-list-item>
  </a-list>
</template>

<script>
const data = [
  {
    key: '1',
    amount: '5,000.00',
    coin: {
      img: 'icon.svg',
      name: 'Bitcoin',
    },
    datetime: '06:24:45 AM',
    txnType: 1, //1 for debit, 2 for credit
    status: 1, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '2',
    amount: '500.00',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    datetime: '04:24:45 PM',
    txnType: 2, //1 for debit, 2 for credit
    status: 3, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '3',
    amount: '3,000.00',
    coin: {
      img: 'ripple.svg',
      name: 'Ripple',
    },
    datetime: '11:24:45 AM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '4',
    amount: '531.00',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    datetime: '12:42:45 PM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '5',
    amount: '5,000.00',
    coin: {
      img: 'icon.svg',
      name: 'Bitcoin',
    },
    datetime: '06:24:45 AM',
    txnType: 1, //1 for debit, 2 for credit
    status: 1, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '6',
    amount: '500.00',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    datetime: '04:24:45 PM',
    txnType: 2, //1 for debit, 2 for credit
    status: 3, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '7',
    amount: '3,067.89',
    coin: {
      img: 'icon-1.svg',
      name: 'Tether',
    },
    datetime: '11:24:45 AM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '8',
    amount: '5,351.60',
    coin: {
      img: 'ripple.svg',
      name: 'Ripple',
    },
    datetime: '12:42:45 PM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '9',
    amount: '3,067.89',
    coin: {
      img: 'icon-1.svg',
      name: 'Tether',
    },
    datetime: '11:24:45 AM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
]
export default {
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null,
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      pagination: {
        hideOnSinglePage: true,
      },
    }
  },
  methods: {
    onLoadMore() {
      this.loadingMore = true;
    },
  },
}
</script>
<style scoped>

</style>