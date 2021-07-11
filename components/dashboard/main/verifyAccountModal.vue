<template>
  	<a-drawer
      title="Verify Your Account"
      placement="right"
      :width="720"
      :closable="false"
      :visible="visible"
      @close="handleOk">
		<div>
			<span class="tw-font-bold tw-text-lg">Verifying your account will help you trade easily.</span>
			<p class="tw-text-sm tw-m-0 tw-p-0">Higher levels of your KYC will bring more benefits to your account.</p>

			 <a-card title="KYC completeness" class="tw-mt-6">
				    <a-card-grid style="width:100%;">
						<p class="tw-font-bold tw-text-base">Tier 1</p>
						<p class="tw-text-sm">Phone Number <a-icon type="check-circle" class="tw-text-green-500 tw-text-sm tw-mb-2" theme="filled" /></p>
						<a-input size="large" value="08098xxxxxx" disabled class="tw-w-7/12 tw-font-bold tw-text-lg"></a-input>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-4">You can buy $50.00 daily.</p>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet daily.</p>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet monthly.</p>
					</a-card-grid>
					<a-card-grid style="width:100%;">
						<p class="tw-font-bold tw-text-base">Tier 2</p>
						<p class="tw-text-sm">Documents verification <a-icon type="check-circle" class="tw-text-green-500 tw-text-sm" theme="filled" /></p>
						<div class="tw-mt-3">
							<a-card hoverable style="width: 240px">
								<img
								slot="cover"
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
								/>
							</a-card>
							<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-4">You can buy $50.00 daily.</p>
							<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet daily.</p>
							<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet monthly.</p>
						</div>
					</a-card-grid>
					<a-card-grid style="width:100%;">
						<p class="tw-font-bold tw-text-base">Tier 3</p>
						<p class="tw-text-sm">Bank Verification Number <a-icon type="close-circle" class="tw-text-red-500 tw-text-sm tw-mb-2" theme="filled" /></p>
						<a-input size="large" value="08098xxxxxx" disabled class="tw-w-7/12 tw-font-bold tw-text-lg"></a-input>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-4">You can buy $50.00 daily.</p>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet daily.</p>
						<p class="tw-text-xs tw-font-semibold tw-text-blue-500 tw-mt-1">You can deposit 10,000.00 into your Transferano Naira wallet monthly.</p>
					</a-card-grid>
			</a-card>
		</div>
		<phoneVerification ref="phoneVerificationModal"></phoneVerification>
		<documentVerification ref="documentVerificationModal"></documentVerification>
  </a-drawer>
</template>

<script>
import coinSelect from "../main/coinSelect";
import phoneVerification from "../main/phoneVerification";
import documentVerification from "../main/documentVerification"

export default {
  components:{
      coinSelect, phoneVerification, documentVerification
  },
  data() {
    return {
      visible: false,
      firstView: true,
      secondView: false,
      imageUrl: '',
      loading: false,
      current: 0,
    };
  },
  methods: {
	confirmPhoneVerification(){
		this.$refs.phoneVerificationModal.showModal()
		this.next();
	},
	confirmDocumentVerification(){
		this.$refs.documentVerificationModal.showModal()
		this.next();
	},
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    confirm(e) {
      console.log(e);
      this.next();
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Trade Cancelled');
    },
  },
};
</script>