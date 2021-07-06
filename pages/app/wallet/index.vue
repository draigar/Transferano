<template>
    <div>
        <Breadcrumb pageName="Profile"/>

        <div class="tw-mt-10">
            <a-row  :gutter="16">
                <a-col :span="18">
                       <a-col :span="12" v-for="(data, i) in accountCards" :key="i">
                            <div class="tw-bg-white tw-shadow-xl rounded tw-py-4 tw-px-8 tw-mt-4">
                                <div class="tw-w-full tw-align-middle">
                                    <div class="tw-flex tw-justify-between">
                                        <div>
                                            <p class="tw-font-bold tw-text-gray-500 tw-m-0 tw-p-0 tw-mb-2"> <img :src="`/icons/${data.icon}`" class="tw-w-6" /> {{data.title}}</p>
                                            <p class="tw-text-2xl tw-font-bold tw-text-gray-600 tw-m-0 tw-p-0 tw-mt-1">{{data.amount}}</p>
                                            <p class="tw-text-xl tw-font-semibold tw-text-gray-400 tw-m-0 tw-p-0 tw-mt-1 tw-mb-10">$24,008.90</p>
                                        </div>
                                        <div>
                                            <button class="tw-p-3 tw-bg-gray-100 tw-text-black tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="login" /> Deposit</button>
                                            <button  class="tw-p-3 tw-bg-gray-100 tw-text-black tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="swap" /> Swap</button>
                                            <button class="tw-p-3 tw-bg-blue-500 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="logout" /> Withdraw</button>
                                        </div>
                                    </div>
                                    <a-row  :gutter="16">
                                    <a-col :span="12">
                                        <a-card class="tw-p-2 tw-mb-4 rounded">
                                            <p class="tw-text-sm tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0"><a-icon type="arrow-left" class="tw-text-red-500 tw-mr-2"/>Total Withdrawn</p>
                                            <p class="tw-text-xl tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0 tw-mt-2">0.00987</p>
                                            <p class="tw-text-md tw-font-bold tw-text-red-500 tw-m-0 tw-p-0">$89,000.90</p>
                                        </a-card>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-card class="tw-p-2 tw-mb-4 rounded">
                                            <p class="tw-text-sm tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0"><a-icon type="arrow-right" class="tw-text-green-500 tw-mr-2"/> Total Deposited</p>
                                            <p class="tw-text-xl tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">0.00987</p>
                                            <p class="tw-text-md tw-font-bold tw-text-green-500 tw-m-0 tw-p-0">$89,000.90</p>
                                        </a-card>
                                    </a-col>
                                    </a-row>
                                </div>
                            </div>
                        </a-col>
                </a-col>
                <a-col :span="6">

                </a-col>
            </a-row>

        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/dashboard/main/breadcrumb'
import accountCards from '~/components/dashboard/main/accountCards.vue'


export default {
    data() {
        return {
        cardLoading: false,
        accountCards: [
            {
            title: 'Bitcoin',
            amount: '454.049578',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            icon: 'icon.svg',
            color: '#FFAB2D',
            },
            {
            title: 'Etherum ',
            amount: '2,551.3782',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            icon: 'ethereum.svg',
            color: '#DC3CCC',
            },
            {
            title: 'Ripple',
            amount: '5,908.380409',
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
    components: {
        Breadcrumb,
        accountCards
    }
}
</script>

<style scoped>
.rounded {
    border-radius:30px;
}
.ps {
  height: 100%;
  width: 100%;
}
.accountBoxCard {
  height: 150px;
  border:solid 1px #eee;
}
.flip-card {
  background-color: transparent ;
  width: 100%;
  height: 160px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 8px;
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
  border-radius: 8px;
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