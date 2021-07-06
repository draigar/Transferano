<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
  >

    <div slot="txnType" slot-scope="txnType">
        <a-avatar shape="square" size="large" :style="
            txnType === 1
            ? 'color: #FF2E2E; backgroundColor: rgba(255, 46, 46, 0.1)'
            : 'color: #2BC155; backgroundColor: rgba(43, 193, 85, 0.1)'" >
            <a-icon v-if="txnType === 1" type="arrow-left" />
            <a-icon v-if="txnType === 2" type="arrow-right" />
        </a-avatar>
    </div>

    <div slot="transactionId" slot-scope="transactionId" class="tw-font-semibold tw-text-base">{{ transactionId }}</div>

    <div slot="date" slot-scope="date" class="tw-font-semibold tw-text-base">{{ date }}</div>

    <div slot="buyer" slot-scope="buyer" class="tw-flex">
      <img
        :src="`/team-1/${buyer.img}`"
        class="tw-w-10 tw-h-10 tw-mr-2 tw-rounded-full"
      />
      <div class="tw-flex tw-flex-col">
        <span class="tw-font-semibold tw-text-base">{{ buyer.name }}</span>
        <span>
          <a-icon
            v-for="s in buyer.star"
            :key="s"
            type="star"
            theme="filled"
            style="color: #f2c94c; font-size: 10px"
          />
        </span>
      </div>
    </div>

    <div  slot="coin" slot-scope="coin" class="">
        <img :src="`/icons/${coin.img}`" class="tw-w-7" />
        <span class="tw-font-semibold tw-text-base">{{ coin.name }}</span>
    </div>

    <div slot="amount" slot-scope="amount" class="tw-font-semibold tw-text-base">${{ amount }}</div>

    <span
      slot="status"
      slot-scope="text"
      :class="[
        text === 1
          ? 'tw-text-pending-orange'
          : text === 2
          ? 'tw-text-error-1'
          : 'tw-text-success',
          'tw-font-semibold tw-text-base'
      ]"
      >{{
        text === 1 ? 'Pending' : text === 2 ? 'Cancelled' : 'Successful'
      }}</span
    >
  </a-table>
</template>

<script>
const data = [
  {
    key: '1',
    transactionId: '#12415346563475',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '50.00',
    buyer: {
      img: 'team-2.jpg',
      name: 'Lola',
      star: 5,
    },
    date:'2/5/2020 06:24 AM',
    txnType: 1, //1 for debit, 2 for credit
    status: 1, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '2',
     transactionId: '#12415346563475',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '5020.00',
    buyer: {
      img: 'team-2.jpg',
      name: 'Lola',
      star: 5,
    },
    date:'2/5/2020 06:24 AM',
    txnType: 1, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '3',
    transactionId: '#12415346563475',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '2470.00',
    buyer: {
      img: 'team-2.jpg',
      name: 'Lola',
      star: 5,
    },
    date:'2/5/2020 06:24 AM',
    txnType: 2, //1 for debit, 2 for credit
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '4',
     transactionId: '#12415346563475',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '4200.00',
    buyer: {
      img: 'team-2.jpg',
      name: 'Lola',
      star: 5,
    },
    date:'2/5/2020 06:24 AM',
    txnType: 1, //1 for debit, 2 for credit
    status: 3, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '5',
    transactionId: '#12415346563475',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '4270.00',
    buyer: {
      img: 'team-2.jpg',
      name: 'Lola',
      star: 5,
    },
    date:'2/5/2020 06:24 AM',
    txnType: 2, //1 for debit, 2 for credit
    status: 3, // 1 for pending, 2 for cancelled, 3 for success
  },
]

export default {
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null,
      loading: false,
      pagination: {
        hideOnSinglePage: false,
      },
    }
  },
  computed: {
    columns() {
      let { sortedInfo, filteredInfo } = this
      sortedInfo = sortedInfo || {}
      filteredInfo = filteredInfo || {}
      const columns = [
        {
          title: '',
          dataIndex: 'txnType',
          key: 'txnType',
          scopedSlots: { customRender: 'txntype' },
        },
        {
          title: 'Transaction ID',
          dataIndex: 'transactionId',
          key: 'transactionId',
          scopedSlots: { customRender: 'transactionId' },
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          scopedSlots: { customRender: 'date' },
        },
        {
          title: 'To',
          dataIndex: 'buyer',
          key: 'buyer',
          scopedSlots: { customRender: 'buyer' },
        },
         {
          title: 'Coin',
          dataIndex: 'coin',
          key: 'coin',
          scopedSlots: { customRender: 'coin' },
        },
         {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          scopedSlots: { customRender: 'amount' },
        },
         {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' },
        },
      ]
      return columns
    },
  },
  methods: {
    handleChange(pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter)
      this.filteredInfo = filters
      this.sortedInfo = sorter
    },
    clearFilters() {
      this.filteredInfo = null
    },
    clearAll() {
      this.filteredInfo = null
      this.sortedInfo = null
    },
    setAgeSort() {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'age',
      }
    },
  },
}
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>