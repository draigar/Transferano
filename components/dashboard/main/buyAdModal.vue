<template>
  	<a-drawer
      title="Create Buy Advertisement"
      placement="right"
      :width="600"
      :closable="false"
      :visible="visible"
      @close="handleOk">
		<div>
			<div class="tw-px-3 tw-mt-4">
				<coinSelect class="tw-w-full"/>
				<label>
					<span class=" tw-text-xs">Current Market Value: </span>
					<span class="tw-text-green-500 tw-text-xs tw-font-semibold">18,048,700.00 </span>
					<span class=" tw-text-xs tw-font-semibold">NGN/ETH</span>
				</label>
				<div class="tw-mt-6 tw-bg-gray-50 tw-px-6 tw-py-4 tw-rounded-md">
					<a-radio-group class="tw-w-full tw-font-semibold tw-rounded-md" default-value="1" button-style="solid" block>
						<a-radio-button value="1">
						Fixed Price
						</a-radio-button>
						<a-radio-button value="2">
						Dynamic Price
						</a-radio-button>
					</a-radio-group>
					<div class="tw-mt-4">
						<label class=" tw-text-md tw-font-semibold">
							Fixed Price
						</label>
						<a-input >
						</a-input>
						
						<div class="tw-mt-2 tw-mb-3 tw-flex tw-justify-between">
							<p class="">
							<span class=" tw-text-xs">Price sellers will see: </span><br>
							<span class="tw-text-green-500 tw-text-sm tw-font-semibold">18,048,700.00 </span>
							<span class=" tw-text-md tw-font-semibold">NGN/ETH</span>
							</p>
							<p class="">
								<span class=" tw-text-xs">Price that you pay: </span><br>
								<span class="tw-text-green-500 tw-text-sm tw-font-semibold">18,048,700.00 </span>
								<span class=" tw-text-md tw-font-semibold">NGN/ETH</span>
							</p>
						</div>
						<label class="tw-text-md tw-font-semibold">
							Amount of ETH
						</label>
						<a-input >
						</a-input>
						<label class="tw-mt-3 tw-text-md tw-font-semibold">
							Maximum Amount of ETH
						</label>
						<a-input >
						</a-input>
					</div>
				</div>
				<div class="tw-mt-2 tw-bg-gray-50 tw-px-6 tw-py-4 tw-rounded-md">
					<p class=" tw-text-base tw-font-semibold tw-mb-3">Payment</p>
					<label class=" tw-text-md tw-font-semibold">Select the Bank you're sending from</label>
					<a-select class="tw-w-full tw-mb-2" >
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
					<label  class=" tw-text-md tw-font-semibold">Payment window</label>
					<a-select class="tw-w-full" >
						<a-select-option value="UBA">
							15 minutes
						</a-select-option>
					</a-select> 
				</div>
				<div class="tw-flex tw-justify-end">
					<a-popconfirm class="tw-mt-2"
						placement="topRight"
						ok-text="Yes"
						cancel-text="No"
					>
						<template slot="title">
							<p>Please confirm you want to cancel this Ad</p>
						</template>
						<button class="tw-p-3 tw-mr-2 tw-bg-red-500 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="close-circle" /> Cancel Ad</button>
					</a-popconfirm>
					<a-popconfirm class="tw-mt-2"
						placement="topRight"
						ok-text="Yes"
						cancel-text="No"
						
					>
						<template slot="title">
							<p class="tw-m-0 tw-p-0">Are you sure you want to create this Advertisement</p>
						</template>
						<button class="tw-p-3 tw-bg-blue-600 tw-text-white tw-rounded-md tw-border-none tw-font-semibold"><a-icon type="check-circle" /> Confirm</button>
					</a-popconfirm>
				</div>
			</div>
		</div>
  </a-drawer>
</template>

<script>

import coinSelect from "../main/coinSelect";

export default {
  components:{
      coinSelect,
  },
  data() {
    return {
      visible: false,
      firstView: true,
      secondView: false,
      imageUrl: '',
      loading: false,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
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
    }
  },
};
</script>