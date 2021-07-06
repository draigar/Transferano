<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
  >
    <div slot="amount" slot-scope="amount">${{ amount }}</div>
    <span
      slot="status"
      slot-scope="text"
      :class="[
        text === 1
          ? 'tw-text-pending-orange'
          : text === 2
          ? 'tw-text-error-1'
          : 'tw-text-success',
      ]"
      >{{
        text === 1 ? 'Pending' : text === 2 ? 'Cancelled' : 'Successful'
      }}</span
    >
    <span slot="rate" slot-scope="rate"> ${{ rate }} </span>
   <div  slot="coin" slot-scope="coin" class="">
        <img :src="`/icons/${coin.img}`" class="tw-w-7" />
        <span class="tw-font-semibold tw-text-base">{{ coin.name }}</span>
    </div>
    <div slot="buyer" slot-scope="buyer" class="tw-flex">
      <img
        :src="`/team-1/${buyer.img}`"
        class="tw-w-10 tw-h-10 tw-mr-2 tw-rounded-full"
      />
      <div class="tw-flex tw-flex-col">
        <span class="">{{ buyer.name }}</span>
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
    <span slot="action">
      <a-dropdown-button><a-icon type="menu-unfold" /> action
       <a-menu slot="overlay">
        <a-menu-item key="1"> <a-icon type="check" />Accept </a-menu-item>
        <a-menu-item key="2" class="tw-text-red-800"> <a-icon type="delete" class="tw-text-red-800" />Decline </a-menu-item>
        <a-menu-item key="3"> <a-icon type="eye" />view </a-menu-item>
      </a-menu>
    </a-dropdown-button>
    </span>
  </a-table>
</template>

<script>
const data = [
  {
    key: '1',
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
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
    status: 1, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '2',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '50.00',
    buyer: {
      img: 'team-4.jpg',
      name: 'Lola',
      star: 5,
    },
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '3',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    amount: '50.00',
    buyer: {
      img: 'team-3.jpg',
      name: 'Lola',
      star: 5,
    },
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
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
        hideOnSinglePage: true,
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
          title: 'Coin',
          dataIndex: 'coin',
          key: 'coin',
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
          ellipsis: true,
          scopedSlots: { customRender: 'coin' },
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          scopedSlots: { customRender: 'amount' },
        },
        {
          title: 'Buyer',
          dataIndex: 'buyer',
          key: 'buyer',
          scopedSlots: { customRender: 'buyer' },
        },
        {
          title: 'Coin Value',
          dataIndex: 'coinValue',
          key: 'coinValue',
          scopedSlots: { customRender: 'coinValue' },
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
          scopedSlots: { customRender: 'rate' },
        },
        {
          title: 'Method',
          dataIndex: 'method',
          key: 'method',
          scopedSlots: { customRender: 'method' },
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
          scopedSlots: { customRender: 'status' },
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
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