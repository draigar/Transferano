<template>
    <div class="tw-my-10 promotionalBanner tw-w-full tw-bg-no-repeat tw-bg-cover tw-flex tw-justify-center">
        <div class="tw-flex tw-justify-center tw-items-center tw-flex-col tw-mr-20">
            <div class="tw-rounded-full vectorIcon">
                <img src="~/assets/img/digitalcurrency.svg" />
            </div>
            <h1 class="tw-text-white tw-m-0" style="font-weight: 800; font-size: 36px; line-height: 54px">$500M+</h1>
            <p class="tw-text-white" style="font-size: 24px; line-height: 36px">Digital currency exchanged</p>
        </div>
        <div class="tw-flex tw-justify-center tw-items-center tw-flex-col tw-mr-20">
            <div class="tw-rounded-full vectorIcon">
                <img src="~/assets/img/countries.svg" />
            </div>
            <h1 class="tw-text-white tw-m-0" style="font-weight: 800; font-size: 36px; line-height: 54px">23</h1>
            <p class="tw-text-white" style="font-size: 24px; line-height: 36px">Countries supported</p>
        </div>
        <div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
            <div class="tw-rounded-full vectorIcon">
                <img src="~/assets/img/customer.svg" />
            </div>
            <h1 class="tw-text-white tw-m-0" style="font-weight: 800; font-size: 36px; line-height: 54px">23</h1>
            <p class="tw-text-white" style="font-size: 24px; line-height: 36px">Customers served</p>
        </div>
    </div>
</template>

<style scoped>
.promotionalBanner {
    height: 318px;
    background-image: url('assets/img/banner.png');
}
.vectorIcon {
    width: 60px;
    height: 60px;
}
</style>