<template>
  	<a-drawer
      title="Start a trade"
      placement="right"
      :width="600"
      :closable="false"
      :visible="visible"
      @close="handleOk">
		<div>
			<a-steps class="tw-bg-gray-100 tw-p-2 tw-rounded" :current="current" size="small">
				<a-step title="Trade Details" />
				<a-step title="Select Bank" />
				<a-step title="Deposit NGN" />
				<a-step title="Rating" />
			</a-steps>
			<div class="steps-content">
				<div v-if="current == 0">
					<div class="tw-px-6 tw-mt-10">
						<div class="tw-flex tw-mb-6">
							<div class="tw-mr-1">
								<label class="tw-font-semibold tw-ml-2">
									Asset
								</label>
								<coinSelect class="tw-w-full"/>
							</div>
							
							<div class="tw-ml-1">
								<label class="tw-font-semibold tw-ml-2">
									How much do you want to buy
								</label>
								<a-input>
									<a-radio-group slot="addonAfter" default-value="a" size="small">
										<a-radio-button class="tw-font-semibold" value="a">
										ETH
										</a-radio-button>
										<a-radio-button class="tw-font-semibold" value="b">
										NGN
										</a-radio-button>
									</a-radio-group>
								</a-input>
							</div>
						</div>

						<div class="tw-mb-2" v-for="s in 4" :key="s">
							<div class="tw-bg-gray-50 tw-px-6 tw-py-4 tw-flex tw-justify-between tw-items-center">
								<div>
									<div class="tw-flex">
										<img
											src="/team-1/team-1.jpg"
											class="tw-w-10 tw-h-10 tw-mr-2 tw-rounded-full"
										/>
										<div class="tw-flex tw-flex-col">
											<span class="tw-font-bold tw-text-complementary">Druglaw</span>
											<span>
											<a-icon
												v-for="s in 4"
												:key="s"
												type="star"
												theme="filled"
												style="color: #f2c94c; font-size: 10px"
											/>
											<span class="tw-ml-2 tw-text-xs tw-font-semibold tw-text-gray-500">2,098 orders</span>
											<span class="tw-ml-2 tw-text-xs tw-font-semibold tw-text-gray-500">92.8% completion rate</span>
											</span>
										</div>
									</div>
									<div class="tw-mt-3"> 
										<p>
											<span class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold tw-text-green-400">28,890,789.98 NGN/ETH</span>
											<span class=" tw-text-sm"> – via Guaranty Trust Bank</span>
										</p>
									</div>
									<p class="tw-p-0 tw-m-0 tw-mt-1">
										<span class="tw-text-xs tw-font-semibold">Available Asset: </span>
										<span class="tw-text-sm tw-font-semibold"> 0.0002345 ETH</span>
									</p>
									<p class="tw-p-0 tw-m-0 tw-mt-1">
										<span class="tw-text-xs">Completion time: ~30s</span>
									</p>
								</div>
								<div>
									<a-popconfirm
										title="Open trade to buy 0.0002345 ETH from druglaw with total 7,285.88 NGN?"
										placement="topRight"
										ok-text="Yes"
										cancel-text="No"
										@confirm="confirm"
										@cancel="cancel"
									>
										<button class="tw-px-3 tw-py-1 tw-bg-green-500 tw-text-white tw-rounded-md tw-border-none tw-font-semibold">buy now</button>

									</a-popconfirm>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="current == 1">
					<div class="tw-px-6">
						<div class="tw-mt-10 tw-p-3 tw-rounded-md tw-bg-blue-50">
							<p class="tw-text-xs tw-font-semibold tw-text-blue-400">You will have 15 minutes to pay the seller and click the I have paid seller button. If you pay seller but don't click I have paid seller within 15 minutes, we will refund the seller's Bitcoin and you will lose money.</p>
						</div>
						<div class="tw-mt-2 tw-mb-3 tw-p-3 tw-rounded-md tw-bg-blue-50">
							<p class="tw-text-xs tw-font-semibold tw-text-blue-400">Please do not mention Bitcoin when you send money through the bank. If you mention Bitcoin when you send money through bank, we will block your account from future trading.</p>
						</div>
						<label>Select the Bank you're sending from</label>
						<a-select class="tw-w-full">
							<a-select-option value="UBA">
								United Bank of Africa
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
						<div class="tw-flex tw-justify-end">
							<a-popconfirm class="tw-mt-2"
								placement="topRight"
								ok-text="Yes"
								cancel-text="No"
								@confirm="prev"
								@cancel="cancel"
							>
								<template slot="title">
									<p>Please confirm you want to cancel this trade</p>
								</template>
								<button class="tw-p-3 tw-mr-2 tw-bg-red-500 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="close-circle" /> Cancel trade</button>
							</a-popconfirm>
							<a-popconfirm class="tw-mt-2"
								placement="topRight"
								ok-text="Yes"
								cancel-text="No"
								@confirm="confirmPhoneVerification"
								@cancel="cancel"
							>
								<template slot="title">
									<p class="tw-m-0 tw-p-0">Please confirm that you will pay from the account of Kuda Bank.</p>
									<p class="tw-m-0 tw-p-0"> Otherwise, seller will be able to cancel trade in case of dispute.</p>
								</template>
								<button class="tw-p-3 tw-bg-blue-600 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="check-circle" /> Confirm</button>
							</a-popconfirm>
						</div>
					</div>
				</div>
				<div v-if="current == 2">
					<div class="tw-mt-3">
						<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Trade Reference:</p>
						<p class="tw-m-0 tw-p-0 tw-text-base tw-font-bold tw-text-gray-600">#1442469T62113672</p>
					</div>
					<div class="tw-mt-3 tw-p-3 tw-border tw-rounded-lg">
						<p class="tw-m-0 tw-p-0 tw-text-xs">
							1. You are buying <span class="tw-text-blue-600 tw-font-semibold">0.00030000 ETH</span> from <span class="tw-text-blue-600 tw-font-semibold">darellaco</span> 
						</p>
						<p class="tw-m-0 tw-p-0 tw-mt-1 tw-text-xs">
							2. Bitcoin of the seller is already locked and secured for this trade. Please send payment to the seller then confirm below.
						</p>
						<div class="tw-mt-2 tw-bg-gray-100 tw-px-6 tw-py-2  tw-rounded-lg">
							<div class="tw-flex">
								<div class="tw-w-1/2">
									<div>
										<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Deposit Amount</p>
										<p class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold">NGN 5,782.00</p>
									</div>
									<div class="tw-mt-1"> 
										<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Transaction Reference</p>
										<p class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold">M71154988P</p>
									</div>
								</div>
								<div class="tw-w-1/2">
									<div>
										<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Account Holder Name</p>
										<p class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold">Ola Chindeu Hassan</p>
									</div>
									<div class="tw-mt-1">
										<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Bank</p>
										<p class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold">Guaranty Trust Bank</p>
									</div>
									<div class="tw-mt-1">
										<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">Account Number</p>
										<p class="tw-m-0 tw-p-0 tw-text-sm tw-font-bold">0902820987</p>
									</div>	
								</div>
							</div>						
						</div>
					</div>
					
					<div class="tw-mt-2 tw-bg-red-50 tw-px-3 tw-py-2  tw-rounded-lg">
						<div class="tw-flex tw-justify-between tw-items-center">
							<a-statistic-countdown
							title="Kindly make payment within"
							:value="deadline"
							format="HH:mm:ss"
							style="margin-right: 50px"/>
							<a-button class="tw-bg-complementary tw-text-white tw-rounded-md tw-border-none tw-font-semibold" @click="next"> I have made payment</a-button>
						</div>
						
						<p class="tw-m-0 tw-p-0 tw-text-xs tw-font-semibold">When the countdown is over, the trade will be cancelled and we will send the fund back to the seller.</p>
					</div>
					<div class="tw-mt-2 tw-">
						<p class="tw-m-0 tw-p-0 tw-text-yellow-500 tw-text-xs tw-font-semibold"><a-icon type="loading" /> Confirming Payment</p>
						<p class="tw-m-0 tw-p-0 tw-text-yellow-500 tw-text-xs tw-font-semibold"><a-icon type="loading" /> Awaiting Fund Confirmation from Seller</p>
					</div>
					<div class="tw-mt-6">
						<p class="tw-m-0 tw-p-0 tw-text-sm">Kindly upload proof of payment after funds transfer</p>
						<a-upload
							name="avatar"
							list-type="picture-card"
							class="tw-mt-1"
							:show-upload-list="false"
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							:before-upload="beforeUpload"
							@change="handleChange"
						>
							<img v-if="imageUrl" :src="imageUrl" alt="avatar" />
							<div v-else>
								<a-icon :type="loading ? 'loading' : 'plus'" />
								<div class="ant-upload-text">
									Upload proof of payment
								</div>
							</div>
						</a-upload>
					</div>
					<div class="tw-flex tw-justify-end">
						<a-popconfirm class="tw-w-30"
							placement="topRight"
							ok-text="Yes"
							cancel-text="No"
							@confirm="prev"
							@cancel="cancel"
						>
							<template slot="title">
								<p>Please confirm you want to cancel this trade</p>
							</template>
							<button class="tw-px-3 tw-mr-2 tw-bg-red-500 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"> Cancel trade</button>
						</a-popconfirm>
						<a-button class="tw-w-30 tw-bg-primary tw-text-white tw-rounded-md tw-border-none tw-font-semibold" @click="next"> Confirm</a-button>
					</div>
				</div>
				<div v-if="current == 3">
					<div class="tw-px-6">
						<div class="tw-mt-10 tw-p-3 tw-rounded-md tw-bg-green-50">
							<p class="tw-text-xs tw-m-0 tw-p-0 tw-font-semibold tw-text-green-400">You have received <span class="tw-font-bold">0.00009 BTC</span> from  <span class="tw-font-bold">druglaw</span>.</p>
							<nuxt-link  class="tw-text-xs tw-m-0 tw-p-0 tw-underline tw-font-semibold tw-text-green-400" to="/app/wallet"><p>go to wallet</p></nuxt-link>
						</div>
						<div class="tw-mt-6 tw-bg-gray-100 tw-px-6 tw-py-4 tw-rounded-lg">
							<p class="tw-text-lg tw-font-semibold tw-text-center tw-mb-12">Rate Druglaw</p>
							<center>
								<div class="tw-flex tw-justify-center">
									<div class="tw-mr-6">
										<a-icon type="smile" theme="filled" :style="`color: ${sColor}`" class="tw-text-6xl tw-cursor-pointer" @click="sClick"/>
									</div>
									<div  class="tw-mr-6">
										<a-icon type="meh" theme="filled" :style="`color: ${mColor}`" class="tw-text-6xl tw-cursor-pointer" @click="mClick"/>
									</div>
									<div class="">
										<a-icon type="frown" theme="filled" :style="`color: ${fColor}`" class="tw-text-6xl tw-cursor-pointer" @click="fClick"/>
									</div>
								</div>
								<div class="tw-mt-6">
									<a-input placeholder="Say someting nice" addon-after="" aria-placeholder=""/>
									<button class="tw-mt-2 tw-p-2 tw-bg-primary tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="check-circle" /> Confirm</button>
								</div>
							</center>
						</div>
					</div>
				</div>
			</div> 
			<!-- <div class="steps-action">
				<a-button v-if="current < 4" type="primary" @click="next">
					Next
				</a-button>
				<a-button
				v-if="current === 4"
				type="primary"
				@click="$message.success('Processing complete!')">
					Done
				</a-button>
				<a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
					Previous
				</a-button>
			</div> -->
			<!--
				You will have 15 minutes to pay the seller and click the I have paid seller button. If you pay seller but don't click I have paid seller within 15 minutes, we will refund the seller's Bitcoin and you will lose money.

				Please do not mention Bitcoin when you send money through the bank. If you mention Bitcoin when you send money through bank, we will block your account from future trading

				Please confirm that you will pay from the account of Kuda Bank. Otherwise, seller will be able to cancel trade in case of dispute.
			-->
		</div>
		  <phoneVerification ref="phoneVerificationModal"></phoneVerification>
		  <documentVerification ref="documentVerificationModal"></documentVerification>
  </a-drawer>
</template>

<script>
import coinSelect from "../main/coinSelect";
import phoneVerification from "../main/phoneVerification";
import documentVerification from "../main/documentVerification"

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

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
	  deadline: Date.now() + 1000 * 60 * 15,
	  sColor: 'rgb(154, 154, 154)',
	  mColor: 'rgb(154, 154, 154)',
	  fColor: 'rgb(154, 154, 154)'
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
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
	sClick(){
		if(this.sColor == "rgba(37, 99, 235)")
		{
			this.sColor = "rgb(154, 154, 154)"
		}
		else{	
			this.sColor = "rgba(37, 99, 235)";
			this.mColor = "rgb(154, 154, 154)";
		    this.fColor = "rgb(154, 154, 154)";
		}
	},
	mClick(){
		if(this.mColor == "rgba(37, 99, 235)")
		{
			this.mColor = "rgb(154, 154, 154)"
		}
		else{	
			this.mColor = "rgba(37, 99, 235)";
			this.sColor = "rgb(154, 154, 154)";
		    this.fColor = "rgb(154, 154, 154)";
		}
	},
	fClick(){
		if(this.fColor == "rgba(37, 99, 235)")
		{
			this.fColor = "rgb(154, 154, 154)"
		}
		else{	
			this.fColor = "rgba(37, 99, 235)";
			this.mColor = "rgb(154, 154, 154)";
		    this.sColor = "rgb(154, 154, 154)";
		}
	},
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
  },
};
</script>