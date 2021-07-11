<template>
    <a-select size="large" :default-value="coins[0].name" class=" tw-p-0 tw-mb-2" style="width: 100%">
        <a-select-option v-for="coin in coins" :key="coin.name">
            <div class="tw-flex tw-items-center">
                <img :src="`/icons/${coin.img}`" class="tw-w-5 tw-mr-1" />
                <span class="tw-font-semibold tw-text-base">{{ coin.name }}</span>
            </div>
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