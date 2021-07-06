<template>
    <a-modal v-model="visible" :maskClosable="false" :closable="false" :cancelButtonProps="{ style: { display: 'none' } }" title="Document Verification" width="700px" ok-text="Verify" @ok="handleOk">
      	<div>
		  	<div class="tw-mb-3 tw-p-3 tw-rounded-md tw-bg-blue-50">
				<p class="tw-text-xs tw-font-semibold tw-p-0 tw-m-0 tw-mb-1 tw-text-blue-400">The verification picture needs to satisfy these conditions:</p>
				<ul class="tw-text-xs tw-font-semibold tw-m-0 tw-mb-1 tw-text-blue-400">
					<li>Has not been modified</li>
					<li>Is not blurred</li>
					<li>Can see the 4 corners of the original document</li>
					<li>Can see your arm holding the paper clearly</li>
					<li>Use handwriting</li>
				</ul>
				<p class="tw-text-xs tw-font-semibold tw-p-0 tw-m-0 tw-mb-1 tw-text-blue-400">Picture that does not satisfy any of the above will not be considered.</p>
			</div>
			<div class="tw-mb-2">
				<p class="tw-text-xs tw-font-semibold tw-p-0 tw-m-0 tw-mb-1">To verify your documents, kindly upload one of the following documents:</p>
				<ul class="tw-text-xs tw-font-semibold tw-m-0 tw-mb-1">
					<li>National identity card (Front)</li>
					<li>National passport</li>
					<li>Electronic identity card (MasterCard-integrated e-ID) + NIN</li>
					<li>Nigerian driving licence</li>
					<li>Voter card</li>
				</ul>
			</div>
			<div class="tw-mt-6">
				<p class="tw-m-0 tw-p-0 tw-text-sm">Kindly upload document</p>
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
			<div class="tw-mb-2">
				<label>
					Enter your Full Name, as it is on the document you're uploading
				</label>
				<a-input size="large" addon-after="" aria-placeholder=""/>
			</div>
			<div class="tw-mb-2">
				<label>
					Enter the ID number on the document you're uploading
				</label>
				<a-input size="large" addon-after="" aria-placeholder=""/>
			</div>
      </div>
    </a-modal>
</template>

<script>

export default ({
	data() {
		return {
			visible: false,
			imageUrl: '',
			loading: false,
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
})
</script>
