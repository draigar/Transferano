<template>
<div class="tw-bg-gray-light">
	<div style="margin: 10px 0; width: 100%; background-color: transparent;" class="tw-flex tw-flex-row tw-justify-between tw-bg-gray-light">
		<div class="tw-flex tw-flex-row">
			<img src="/icons/icon-2.svg" class="tw-w-14 tw-mr-4" />
			<div>
			<h1 class="tw-text-black1 tw-p-0 tw-m-0 tw-mt-2" style="font-weight: 700; font-style: normal; font-size: 24px; line-height: 32.74px">{{ pageName }}</h1>
			<p class="tw-text-gray-2" style="font-weight: 400; font-style: normal; font-size: 14px; line-height: 21px">Your current status and activities</p>
			</div>
		</div>
		<div>
			<div class="tw-float-right" >
			<a-button size="large" class="tw-mr-1 tw-text-white tw-rounded-md tw-border-none tw-font-bold" type="primary" @click="buyNowModal">
			Buy Now
			</a-button>
			<a-button size="large" class="tw-mr-1 tw-text-white tw-rounded-md tw-border-none tw-font-bold" type="primary" @click="sellNowModal">
			Sell Now
			</a-button>

			</div>
		</div>
	</div>
<buyNowModal ref="bnmodal"></buyNowModal>
<sellNowModal ref="snmodal"></sellNowModal>
</div>  
</template>

<script>
import buyNowModal from "./buyNowModal";
import sellNowModal from "./sellNowModal";
export default {
 props: ['pageName'],
 data() {
    return {
        orderWiz: false,
        showModal: false,
    }
  },
  components: {
      buyNowModal,
	  sellNowModal
  },
  methods: {
    buyNowModal(){
        this.$refs.bnmodal.showModal()
    },
	sellNowModal(){
        this.$refs.snmodal.showModal()
    },
  }
}
</script>