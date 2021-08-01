<template>
    <a-select :default-value="coins[0].name" class=" tw-p-0 tw-mb-2 tw-font-semibold" block>
        <a-select-option v-for="coin in coins" :key="coin.name">
            <p class="tw-flex tw-items-center tw-mt-1">
                <img :src="`/icons/${coin.img}`" class="tw-w-4 tw-mr-2" />
                <span class="tw-font-semibold tw-text-sm tw-mr-3">{{ coin.name }}</span>
            </p>
        </a-select-option>
    </a-select>
</template>

<script>
const data = [
    {
      img: 'ethereum.svg',
      name: 'Ethereum',
    },
    {
      img: 'icon.svg',
      name: 'Bitcoin',
    },
]

export default {
  data() {
    return {
        coins: data,
      selectedKey: 0,
      transactionsLoading: false,
    }
  },
  methods: {
    selectOffers(key) {

    }
  }
}
</script>