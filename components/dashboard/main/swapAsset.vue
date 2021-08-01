<template>
  	<a-drawer
      title="Swap Asset"
      placement="right"
      :width="600"
      :closable="false"
      :visible="visible"
      @close="handleOk">
		<div>
			<div class="tw-px-3 tw-mt-4">
				<div class="tw-mt-6 tw-bg-gray-50 tw-px-6 tw-py-4 tw-rounded-md">
					<a-radio-group class="tw-w-full tw-font-semibold tw-rounded-md" default-value="1" button-style="solid" block>
						<a-radio-button value="1">
						Market Price
						</a-radio-button>
						<a-radio-button value="2">
						Your Price
						</a-radio-button>
					</a-radio-group>
					<div class="tw-mt-4">
						<div>
							<label class=" tw-text-sm tw-font-semibold">
								Amount of BTC you want to swap
							</label>
							<div class="tw-flex">
								<div class="tw-mr-1">
									<coinSelect/>
								</div>							
								<div class="tw-ml-1 tw-w-full">
									<a-input block>
									</a-input>
								</div>
							</div>
						</div>
						<div class="tw-mt-2">
							<label class=" tw-text-sm tw-font-semibold">
								Price
							</label>
							<div>						
								<div class="tw-ml-1 tw-w-full">
									<a-input block>
										<span slot="addonAfter">  
											BTC/ETH
										</span>
									</a-input>
								</div>
							</div>
						</div>
						<div class="tw-mt-2">
							<label class=" tw-text-sm tw-font-semibold">
								Amount of ETH you will get
							</label>
							<div class="tw-flex">
								<div class="tw-mr-1">
									<coinSelect/>
								</div>							
								<div class="tw-ml-1 tw-w-full">
									<a-input block>
									</a-input>
								</div>
							</div>
						</div>
						<div class="tw-mb-3">
							<p class="">
							<span class=" tw-text-xs">Current Market Value: </span><br>
							<span class="tw-text-green-500 tw-text-sm tw-font-semibold">1 ETH = 0.06000 BTC </span>
							</p>
						</div>
					</div>
				</div>
				<div class="tw-w-full">
					<a-popconfirm class="tw-mt-2"
						placement="topRight"
						ok-text="Yes"
						cancel-text="No"
						
					>
						<template slot="title">
							<p class="tw-m-0 tw-p-0">Are you sure you want to create this swap order</p>
						</template>
						<button class="tw-py-2 tw-px-3 tw-bg-primary tw-text-white tw-rounded-md tw-border-none tw-font-semibold tw-w-full">Buy Ethereum</button>
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