<template>
    <div>
        <Breadcrumb pageName="Wallet"/>

        <div class="tw-mt-10">
            <a-row  :gutter="16">
                <a-col :span="18">
                       <a-col :span="24" class="tw-bg-white tw-shadow-xl tw-rounded-3xl tw-py-2 tw-px-3">
						    <a-table
								:columns="columns"
								:data-source="accountCards"
								:pagination="pagination"
								:loading="loading"
								class="tw-mt-4 tw-rounded-3xl"
							>
							   <div  slot="coin" slot-scope="coin" class="tw-flex tw-items-center">
									<img :src="`/icons/${coin.img}`" class="tw-w-7 tw-mr-3" />
									<span class="tw-font-bold tw-text-sm">{{ coin.name }}</span>
								</div>
								<div class="tw-font-semibold tw-text-sm tw-text-gray-400" slot="symbol" slot-scope="symbol">{{ symbol }}</div>
								<div class="tw-font-bold tw-text-sm" slot="amount" slot-scope="amount">{{ amount }}<p class="tw-text-xs tw-text-gray-400">$23,980.00</p></div>
								<span class="tw-font-bold tw-text-sm" slot="withdrawn" slot-scope="">  2.0034<p class="tw-text-xs tw-text-gray-400">$23,980.00</p> </span>
								<span class="tw-font-bold tw-text-sm" slot="deposited" slot-scope=""> 5.00987<p class="tw-text-xs tw-text-gray-400">$23,980.00</p> </span>
							</a-table>
                        </a-col>
                </a-col>
                <a-col :span="6">
					<div class="tw-bg-white tw-shadow-xl tw-rounded-3xl tw-p-5">
						<p class="tw-flex tw-items-center">
							<img src="/icons/icon.svg" class="tw-w-7 tw-mr-3" />
							<span class="tw-font-bold tw-text-base">BTC Balance <p class="tw-text-xs tw-text-gray-400">Bitcoin</p></span>
						</p>
						 <div class="tw-bg-green-50 tw-shadow-2xl tw-rounded-xl tw-py-3 tw-px-6 tw-mt-2 tw-border tw-border-green-100">
                            <div class="tw-w-full tw-mt-4 tw-flex tw-justify-between">
								<span class="tw-font-bold tw-text-base">Available Balance</span>
								<span class="tw-font-bold tw-text-base">  20.0034 BTC<p class="tw-text-sm tw-font-semibold tw-text-gray-400 tw-text-right">$23,980.00</p> </span>
                            </div>
                        </div>
						<div class="tw-flex tw-justify-between tw-mt-5">
							<a-button block class="tw-rounded-md tw-font-bold tw-mr-3" @click="swapAssetModal"> Swap</a-button>
							<a-button type="primary" block  class="tw-rounded-md tw-font-bold tw-ml-2"> Withdraw</a-button>
						</div>
						<div class="tw-bg-white tw-shadow-lg tw-rounded-lg tw-py-3 tw-px-6 tw-mt-5">
                            <div class="tw-w-full tw-mt-4 tw-mr-3">
								<p class="tw-font-bold tw-text-base">Address</p>
								<span class="tw-text-sm">
									Only send BTC to this address. Sending any other assets will result in the loss of your deposit.
								</span>
								<span class="tw-mt-2">
									<a-input class="tw-font-bold tw-text-sm" value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" disabled size="large">
										<a-icon type="copy" theme="filled" slot="addonAfter"/>
									</a-input>
								</span>
								<!-- <vue-qrcode value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" class="tw-w-3/4 tw-m-auto"/> -->
                            </div>
                        </div>
					</div>
                </a-col>
            </a-row>

        </div>
		<swapAssetModal ref="samodal"></swapAssetModal>
    </div>
</template>
<script>
import Breadcrumb from '@/components/dashboard/main/breadcrumb'
import swapAssetModal from '@/components/dashboard/main/swapAsset'
import accountCards from '~/components/dashboard/main/accountCards.vue'
// import VueQrcode from 'vue-qrcode'


export default {
    data() {
        return {
        cardLoading: false,
		filteredInfo: null,
		sortedInfo: null,
		loading: false,
		pagination: {
			hideOnSinglePage: true,
		},
        accountCards: [
            {
            title: 'Bitcoin',
            amount: '454.049578',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
			coin: {
				img: 'icon.svg',
				name: 'Bitcoin',
			},
			symbol: "BTC",
            color: '#FFAB2D',
            },
            {
            title: 'Etherum ',
            amount: '2,551.3782',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            	coin: {
				img: 'ethereum.svg',
				name: 'Ethereum',
			},
			symbol: "ETH",
            color: '#DC3CCC',
            },
            {
            title: 'Ripple',
            amount: '5,908.380409',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
             	coin: {
				img: 'ripple.svg',
				name: 'Ripple',
			},
			symbol: "XRP",
            color: '2B98D6',
            },
            {
            title: 'Bitcoin Cash',
            amount: '65,123',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
             	coin: {
				img: 'icon-1.svg',
				name: 'Bitcoin Cash',
			},
			symbol: "BTCD",
            color: '#C0C7CE',
            },
            {
            title: 'Bitcoin Cash',
            amount: '65,123',
            content: '4% (30 days)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
               	coin: {
				img: 'icon-1.svg',
				name: 'Bitcoin Cash',
			},
			symbol: "BTCD",
            color: '#2BC155',
            },
        ],
        }
    },
    components: {
        Breadcrumb,
        accountCards,
		// VueQrcode,
		swapAssetModal
    },
	computed: {
		columns() {
		let { sortedInfo, filteredInfo } = this
		sortedInfo = sortedInfo || {}
		// eslint-disable-next-line no-unused-vars
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
				title: 'Symbol',
				dataIndex: 'symbol',
				key: 'symbol',
				scopedSlots: { customRender: 'symbol' },
			},
			{
				title: 'Withdrawn',
				dataIndex: 'withdrawn',
				key: 'withdrawn',
				scopedSlots: { customRender: 'withdrawn' },
			},
			{
				title: 'Deposited',
				dataIndex: 'deposited',
				key: 'deposited',
				scopedSlots: { customRender: 'deposited' },
			},
			{
				title: 'Available Balance',
				dataIndex: 'amount',
				key: 'amount',
				scopedSlots: { customRender: 'amount' },
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
		swapAssetModal(){
			this.$refs.samodal.showModal()
		},
	},
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