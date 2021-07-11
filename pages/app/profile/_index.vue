<template>
    <div>
        <Breadcrumb page-name="Profile"/>

        <div class="tw-mt-10">
            <a-row  :gutter="16">
                <a-col :span="18">
                    <div class="tw-bg-white tw-shadow-lg rounded tw-p-5">
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <div class="tw-flex">
                                    <div class="tw-mr-4">
                                        <div class="tw-bg-blue-50 tw-shadow-lg rounded tw-py-3 tw-px-6">
                                            <p class="tw-text-xs tw-font-bold tw-text-gray-500 tw-m-0 tw-p-0">SUCCESSFUL TRADES </p>
                                            <p class="tw-text-xl tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">1,456</p>
                                        </div>
                                        <div class="tw-bg-blue-50 tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-5">
                                            <p class="tw-text-xs tw-font-bold tw-text-gray-500 tw-m-0 tw-p-0">NO. OF PARTNERS </p>
                                            <p class="tw-text-xl tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">679</p>
                                        </div>
                                    </div>
                                    <div class="tw-bg-blue-600 tw-shadow-lg rounded tw-py-3 tw-px-6 tw-w-full">
                                        <div class="">
                                            <p class="tw-text-blue-200 tw-m-0 tw-p-0 tw-text-xs tw-font-bold">CREDIBILITY SCORE </p>
                                            <h3 class="tw-font-bold tw-m-0 tw-p-0 tw-text-2xl tw-text-white">300</h3>
                                            
                                            <p class="tw-text-blue-200 tw-m-0 tw-p-0 tw-text-xs tw-font-bold tw-mt-4">CREDIBILITY SUMMARY </p>                                            
                                            <div class="tw-flex tw-justify-between tw-mt-2">
                                                <div class="tw-mr-6">
                                                    <a-icon type="smile" theme="filled" class="tw-text-white tw-text-3xl"/>
                                                    <p class="tw-font-bold tw-m-0 tw-p-0 tw-text-xl tw-text-white">1,118</p>
                                                </div>
                                                <div  class="tw-mr-6">
                                                    <a-icon type="meh" theme="filled" class="tw-text-white tw-text-3xl"/>
                                                    <p class="tw-font-bold tw-m-0 tw-p-0 tw-text-xl tw-text-white">118</p>
                                                </div>
                                                <div class="">
                                                    <a-icon type="frown" theme="filled" class="tw-text-white tw-text-3xl"/>
                                                    <p class="tw-font-bold tw-m-0 tw-p-0 tw-text-xl tw-text-white">23</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <p class="tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0">ASSETS TRADED </p>
                                <a-row class=" " :gutter="16">
                                    <a-col v-for="(data, i) in accountCards" :key="i" :span="8">
                                        <div class="tw-bg-white tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-2">
                                            <div class="tw-w-full tw-align-middle tw-mr-3">
                                                <p class="tw-text-sm tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0"> <img :src="`/icons/${data.icon}`" class="tw-w-4" /> {{data.title}}</p>
                                                <p class="tw-text-lg tw-font-semibold tw-text-gray-600 tw-m-0 tw-p-0 tw-mt-1 tw-ml-4">{{data.amount}}</p>
                                            </div>
                                        </div>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </div>
                    <div>
                        <p class="tw-ml-6 tw-mt-6 tw-text-xs tw-font-bold tw-text-gray-400">PARTNER FEEDBACKS</p>
                        <div class="tw-bg-white tw-shadow-lg rounded tw-p-5">
                            <div>
                                <div class="tw-flex tw-mt-2 tw-mb-2">
                                    <img
                                        :src="`/team-1/team-2.jpg`"
                                        class="tw-w-8 tw-h-8 tw-mr-2 tw-rounded-full"
                                    />
                                    <div class="tw-flex tw-flex-col">
                                        <span class="tw-font-bold">druglaw</span>
                                        <span>very good service, fast transfer too. well done</span>
                                    </div>
                                </div>
                                <div class="tw-flex tw-mt-2 tw-mb-2 tw-border-b tw-border-gray-4">
                                    <img
                                        :src="`/team-1/team-2.jpg`"
                                        class="tw-w-8 tw-h-8 tw-mr-2 tw-rounded-full"
                                    />
                                    <div class="tw-flex tw-flex-col">
                                        <span class="tw-font-bold">toxesyt</span>
                                        <span>very good service and reliable</span>
                                    </div>
                                </div> 
                                <div class="tw-flex tw-mt-2 tw-mb-2 tw-border-b">
                                    <img
                                        :src="`/team-1/team-2.jpg`"
                                        class="tw-w-8 tw-h-8 tw-mr-2 tw-rounded-full"
                                    />
                                    <div class="tw-flex tw-flex-col">
                                        <span class="tw-font-bold">itorobn</span>
                                        <span>very good service, fast transfer too. well done</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col :span="6">
                    <div class="tw-bg-white tw-shadow-xl tw-rounded-3xl tw-p-5">
                        <img src="/team-1/team-1.jpg" class="tw-w-16 tw-rounded-full tw-mr-4" />
                        <div class="tw-w-full tw-justify-between tw-mt-4">
                            <div>
                                <h1 class="tw-text-black1 tw-p-0 tw-m-0 tw-mt-2" style="font-weight: 700; font-size: 22px;">Akinyemi <br> Ajetunmobi</h1>
                                <p class="tw-text-gray-2 tw-m-0">@AkinJones</p>
                            </div>
                        </div>

                        <div class="tw-bg-white tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-5">
                            <div class="tw-w-full tw-mt-4 tw-flex tw-align-middle tw-mr-3">
                                <a-icon type="phone" class="tw-text-3xl tw-text-blue-500 tw-mr-3" theme="filled" />
                                <div>
                                    <p class="tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0">phone: </p>
                                    <p class="tw-text-lg tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">0123456789 <a-icon type="check-circle" class="tw-text-green-500 tw-text-xs" theme="filled" /></p>
                                </div>
                            </div>
                        </div>
                        <div class="tw-bg-white tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-5">
                            <div class="tw-w-full tw-mt-4 tw-flex tw-align-middle tw-mr-3">
                                <a-icon type="folder" class="tw-text-3xl tw-text-blue-500 tw-mr-3" theme="filled" />
                                <div>
                                    <p class="tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0">KYC Status: </p>
                                    <p class="tw-text-lg tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">documents verified</p>
                                </div>
                            </div>
                        </div>
                        <div class="tw-bg-white tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-5">
                            <div class="tw-w-full tw-mt-4 tw-flex tw-align-middle tw-mr-3">
                                <a-icon type="trophy" class="tw-text-3xl tw-text-blue-500 tw-mr-3" theme="filled" />
                                <div>
                                    <p class="tw-font-bold tw-text-gray-400 tw-m-0 tw-p-0">Profile Level: </p>
                                    <p class="tw-text-lg tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">TIER 3</p>
                                </div>
                            </div>
                        </div>
                        <div class="tw-bg-white tw-shadow-lg rounded tw-py-3 tw-px-6 tw-mt-5">
                            <div class="tw-w-full tw-mt-4 tw-flex tw-justify-between tw-align-middle tw-mr-3">
                                <div>
                                    <p class="tw-font-semibold tw-text-gray-400 tw-m-0 tw-p-0">last seen: </p>
                                    <p class="tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">2 minutes ago</p>
                                </div>
                                <div>
                                    <p class="tw-font-semibold tw-text-gray-400 tw-m-0 tw-p-0">Date Created </p>
                                    <p class="tw-font-bold tw-text-gray-700 tw-m-0 tw-p-0">3rd, May 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>

        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/dashboard/main/breadcrumb'


export default {
    components: {
        Breadcrumb,
    },
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