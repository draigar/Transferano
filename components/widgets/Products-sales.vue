<template>
<div class="card">
    <div class="card-body">
        <b-dropdown class="float-right" variant="black" toggle-class="arrow-none card-drop" right>
            <template v-slot:button-content>
                Monthly (2020)
                <i class="fe-chevron-down"></i>
            </template>
            <!-- item-->
            <b-dropdown-item>Settings</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Download</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Upload</b-dropdown-item>
            <!-- item-->
            <b-dropdown-item>Action</b-dropdown-item>
        </b-dropdown>

        <h4 class="header-title">Market Overview</h4>

        <div class="mt-3 text-center">
            <div class="row pt-2">
                <div class="col-2 d-flex  ">
                    <div class="selecteableBoxes bitcoin"></div>
                    <div class="selecteableBoxes "></div>
                    <div class="selecteableBoxes "></div>
                    <div class="selecteableBoxes "></div>
                </div>
            </div>
            <div dir="ltr">
                <bitcoin></bitcoin>
            </div>
        </div>
    </div>
</div>
<!-- end card -->
</template>

<script>
import Bitcoin from '@/components/pages/dashboard/market-overview/bitcoin';
export default {
    data() {
        return {
            chartType: 'Bitcoin'
        }
    },
    components: {
        Bitcoin
    }
}
</script>