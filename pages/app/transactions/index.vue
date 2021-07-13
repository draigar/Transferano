<template>
    <div>
        <Breadcrumb pageName="Transactions"/>
		<div class="tw-bg-white border-gray-200 tw-rounded-3xl tw-shadow-xl tw-p-4">
			<a-row class="tw-mt-6 tw-mb-4">
				<a-col :span="6">
					<a-input size="large" placeholder="Search">
						<a-icon slot="prefix" type="search" />
					</a-input>
				</a-col>
				<a-col :span="6" :offset="12">
					<a-range-picker size="large" :placeholder="['Start month', 'End month']"/>
				</a-col>
			</a-row>
			<transactions></transactions>
		</div>
    </div>
</template>
<script>
import transactions from '@/components/transactions/transactions'
import Breadcrumb from '@/components/dashboard/main/breadcrumb'

export default {
    components: {
        transactions,
        Breadcrumb
    }
}
</script>