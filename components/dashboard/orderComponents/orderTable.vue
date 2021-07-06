<template>
<div>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
  >
    <div  slot="coin" slot-scope="coin" class="">
        <img :src="`/icons/${coin.img}`" class="tw-w-7" />
        <span class="tw-font-semibold tw-text-base">{{ coin.name }}</span>
    </div>
    <span slot="rate" slot-scope="rate"> ${{ rate }} </span>
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
      <a-button type="primary" class="hover:tw-bg-primary hover:tw-outline-none hover:tw-text-white" @click="buyAdModal" ghost>
        sell
      </a-button>
    </span>
  </a-table>
	<buyorSellAddModal ref="bamodal"></buyorSellAddModal>
</div>
</template>

<script>
const data = [
  {
    key: '1',
    coin: 'Bitcoin',
    amount: '50.00',
     coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    buyer: {
      img: 'team-2.jpg',
      name: 'Damilola Busayo',
      star: 5,
    },
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
    status: 1, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '2',
    coin: 'Bitcoin',
    amount: '50.00',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    buyer: {
      img: 'team-4.jpg',
      name: 'Chinedu Okoro',
      star: 5,
    },
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
    status: 2, // 1 for pending, 2 for cancelled, 3 for success
  },
  {
    key: '3',
    coin: 'Bitcoin',
    amount: '50.00',
    coin: {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    buyer: {
      img: 'team-3.jpg',
      name: 'Ahmed Bello',
      star: 5,
    },
    coinValue: '0.00261866BTC',
    rate: '7,317.96',
    method: 'Naira Wallet',
    status: 3, // 1 for pending, 2 for cancelled, 3 for success
  },
]
import buyorSellAddModal from "../main/buyorSellAddModal";

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
  components: {
	  buyorSellAddModal,
  },
  computed: {
    columns() {
      let { sortedInfo, filteredInfo } = this
      sortedInfo = sortedInfo || {}
      filteredInfo = filteredInfo || {}
      const columns = [
        {
          title: 'Buyer',
          dataIndex: 'buyer',
          key: 'buyer',
          scopedSlots: { customRender: 'buyer' },
        },
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
	  buyAdModal(){
			this.$refs.bamodal.showModal()
		},
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