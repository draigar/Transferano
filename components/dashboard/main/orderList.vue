<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="false"
    :loading="loading"
  > 

    <div slot="price" slot-scope="price" class="tw-font-semibold tw-text-base">{{ price }}</div>
    <span slot="amount" slot-scope="amount" class="tw-font-semibold tw-text-base"> {{ amount }} </span>
    <span slot="total" slot-scope="total" class="tw-font-semibold tw-text-base"> ${{ total }} </span>
  </a-table>
</template>

<script>
const data = [
  {
    key: '1',
    price: '82.3',
    amount: '0.15',
    total: '134.12',
  },
  {
    key: '1',
    price: '83.9',
    amount: '0.18',
    total: '237.31',
  },
  {
    key: '1',
    price: '84.2',
    amount: '0.25',
    total: '252.58',
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
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          scopedSlots: { customRender: 'amount' },
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          scopedSlots: { customRender: 'price' },
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
          scopedSlots: { customRender: 'total' },
        }
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