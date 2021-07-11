<template>
    <div class="">
		<div class="tw-px-6 tw-mb-3">
			<a-button size="large" class="tw-mr-1 tw-bg-blue-600 tw-text-white tw-rounded-md tw-border-none tw-font-bold" type="primary" @click="buyAdModal">
				Create Buy Ad
			</a-button>
			<a-button size="large" class="tw-mr-1 tw-bg-blue-600 tw-text-white tw-rounded-md tw-border-none tw-font-bold" type="primary" @click="sellAdModal">
				Create Sell Ad
			</a-button>
		</div>
        <offerTable/>
		<buyAdModal ref="bamodal"></buyAdModal>
		<sellAdModal ref="samodal"></sellAdModal>
    </div>
</template>

<script>
import buyAdModal from "../main/buyAdModal"
import sellAdModal from "../main/sellAdModal"
import offerTable from "./offerTable";

export default {
	components: {
		offerTable, buyAdModal, sellAdModal
	},
	data() {
		return {
		}
	},
	methods: {
		buyAdModal(){
			this.$refs.bamodal.showModal()
		},
		sellAdModal(){
			this.$refs.samodal.showModal()
		},
		testing() {
			console.log("I got here");
		}
	}
}
</script>