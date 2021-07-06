<template>
    <a-modal v-model="visible" :maskClosable="false" :closable="false" :cancelButtonProps="{ style: { display: 'none' } }" title="Phone Number Verification" ok-text="Verify" @ok="handleOk">
      <div >
         <div class="tw-mb-2">
          <label>
            Enter your Phone Number
          </label>
          <a-input size="large" addon-after="" aria-placeholder=""/>
        </div>
		<div class="tw-mb-2">
			<label>Send verification via:</label>
			<a-radio-group default-value="a" button-style="solid">
				<p></p>
				<a-radio-button class="tw-font-semibold tw-mr-3" value="a">
				SMS
				</a-radio-button>
				<a-radio-button class="tw-font-semibold tw-mr-3" value="b">
				Phone Call
				</a-radio-button>
				<a-radio-button class="tw-font-semibold tw-mr-3" value="c">
				WhatsApp
				</a-radio-button>
				<a-radio-button class="tw-font-semibold tw-mr-3" value="d">
				Telegram
				</a-radio-button>
			</a-radio-group>
		</div>
      </div>
    </a-modal>
</template>

<script>

export default ({
	data() {
		return {
			visible: false,
		};
	},
	methods: {
		showModal() {
			this.visible = true;
		},
		handleOk(e) {
			console.log(e);
			this.visible = false;
		},
	},
})
</script>
