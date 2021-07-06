<template>
  <div class="tw-my-6">
    <perfect-scrollbar>
      <a-row class="tw-flex tw-pt-4 tw-pb-12" :gutter="16">
        <a-col
          :span="
            accountCards.length === 2
              ? 12
              : accountCards.length === 3
              ? 8
              : accountCards.length >= 4
              ? 5
              : 12
          "
          v-for="(data, i) in accountCards"
          :key="i"
        >
        <div class="flip-card border-gray-200">
          <div class="flip-card-inner">
            <div class="flip-card-front tw-rounded-3xl tw-shadow-2xl tw-p-4 tw-flex tw-justify-between">
              <div>
                <p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold"> <img src="/icons/chartArrow.svg" /> {{data.content}}</p>
                <h4 class="tw-m-0 tw-py-2 tw-text-gray-700" style="font-weight: 700; font-size: 28px; line-height: 36px">${{data.amount}}</h4>
                <p class="tw-text-xs tw-m-0 tw-p-0 tw-text-gray-2">Flip to reveal address</p>
              </div>
              <div>
                <img :src="`/icons/${data.icon}`" />
              </div>
            </div>
            <div class="flip-card-back tw-rounded-3xl tw-shadow-lg tw-p-2 tw-flex tw-flex-col" :style="`background-color: ${data.color}`">
              <div class="tw-flex tw-justify-between tw-items-center">
                <h1 class="tw-text-white tw-m-0 tw-p-0" style="font-weight: 600; font-size: 14px; line-height: 27px">{{ data.title }}</h1>
                <div class="tw-bg-white tw-rounded-xl tw-flex tw-justify-center tw-items-center tw-p-5" style="width: 30px; height: 30px;">
                  <img :src="`/icons/${data.icon}`" style="width: 20px" />
                </div>
              </div>
               <div class="tw-flex tw-flex-col tw-items-center tw-mt-3">
                <p class="tw-text-xs tw-px-2 tw-flex-wrap">{{ data.address }}</p>
              </div>
              <div class="tw-flex tw-flex-row tw-justify-center tw-mt-1">
                <span class="tw-flex tw-items-center tw-cursor-pointer tw-bg-gray-600 tw-rounded-full tw-p-2 tw-w-8 tw-h-8 tw-mr-2 "> <img src="/icons/copy.svg" class="tw-mr-2" /></span>
                <span class="tw-flex tw-items-center tw-cursor-pointer tw-bg-gray-600 tw-rounded-full tw-p-2 tw-w-8 tw-h-8"> <a-icon type="credit-card" /></span>
              </div>
            </div>
          </div>
        </div>
          <!-- <div class="tw-w-full tw-p-4 tw-rounded-lg tw-bg-white tw-shadow-lg accountBoxCard"> fjejkrjfne </div> -->
        </a-col>
      </a-row>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardLoading: false,
      accountCards: [
        {
          title: 'Bitcoin Wallet',
          amount: '65,123',
          content: '4% (30 days)',
          address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          icon: 'icon.svg',
          color: '#FFAB2D',
        },
        {
          title: 'Etherum Wallet ',
          amount: '2,551',
          content: '4% (30 days)',
          address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          icon: 'ethereum.svg',
          color: '#DC3CCC',
        },
        {
          title: 'Ripple Wallet',
          amount: '0.55',
          content: '4% (30 days)',
          address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          icon: 'ripple.svg',
          color: '2B98D6',
        },
        {
          title: 'Bitcoin Cash',
          amount: '65,123',
          content: '4% (30 days)',
          address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          icon: 'icon-1.svg',
          color: '#C0C7CE',
        },
        {
          title: 'Bitcoin Cash',
          amount: '65,123',
          content: '4% (30 days)',
          address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
          icon: 'icon-1.svg',
          color: '#2BC155',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.ps {
  height: 100%;
  width: 100%;
}
.accountBoxCard {
  height: 150px;
  border:solid 1px #eee
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 130px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 8px; */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* border-radius: 8px; */
}

.flip-card-front {
  background-color:#fff;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>