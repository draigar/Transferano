<template>
    <div>
		<Breadcrumb page-name="Exchange"/>
		<div class="tw-bg-white border-gray-200 tw-rounded-xl tw-shadow-xl tw-p-4">
			<a-row class="tw-m-2 tw-flex">
				<a-input placeholder="Amount NGN" class="tw-w-40 tw-mr-4"/>
				<coinSelect class="tw-mr-4 tw-w-40"/>
				<a-radio-group default-value="1" button-style="" class="tw-mr-5 tw-text-sm tw-rounded-md tw-border-none tw-font-semibold">
					<a-radio-button value="1">
					Buy Orders
					</a-radio-button>
					<a-radio-button value="2">
					Sell Orders
					</a-radio-button>
				</a-radio-group>
				<a-select class="tw-w-40">
					<a-select-option value="NGN">
						Naira Wallet
					</a-select-option>
					<a-select-option value="GTB">
						Guaranty Trust Bank
					</a-select-option>
					<a-select-option value="ACB">
						Access Bank
					</a-select-option>
					<a-select-option value="FCB">
						Fidelity Bank
					</a-select-option>
				</a-select> 
			</a-row>
			<p class="tw-mt-7 tw-ml-2 tw-mb-3 tw-font-semibold tw-text-lg">Buy/Sell Ads</p>
			<exchange/>
		</div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/dashboard/main/breadcrumb'
import coinSelect from '@/components/dashboard/main/coinSelect';
import exchange from '@/components/exchange/exchangeList';

export default {
  data() {
    return {
        orderWiz: false,
        showModal: false,
    }
  },
  components: {
      coinSelect,
      exchange,
	  Breadcrumb
  },
  methods: {
    add(){
        this.$refs.modal.showModal()
    }
  }
}
</script>