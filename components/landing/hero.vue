<template>
  <div class="heroBox">
    <div class="tw-w-full tw-px-36 tw-py-8 hero tw-bg-primary tw-bg-center tw-bg-cover tw-bg-no-repeat">
      <topBar />
      <div class="tw-grid tw-grid-cols-2 tw-gap-4">
        <div class="tw-py-16 tw-mt-4 tw-pr-44">
          <h1 class="tw-text-white" style="font-weight: 700; font-style: normal; font-size: 44px; line-height: 66px">{{ $store.state.appDescription }}</h1>
          <div class="">
            <span style="font-style: normal; font-weight: 400; font-size: 16px; line-height: 26px" class="tw-text-white"> <img src="icons/checkmark.svg" class="tw-mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            <span style="font-style: normal; font-weight: 400; font-size: 16px; line-height: 26px" class="tw-text-white"> <img src="icons/checkmark.svg" class="tw-mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            <span style="font-style: normal; font-weight: 400; font-size: 16px; line-height: 26px" class="tw-text-white"> <img src="icons/checkmark.svg" class="tw-mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          </div>
          <div class="tw-full tw-flex tw-py-8">
            <div class="appleStore tw-mr-8"></div>
            <div class="googlePlay"></div>
          </div>
        </div>
        <div class="tw-py-16 tw-mt-8">
          <div>
            <a-card size="small" style="border-radius: 8px;" :bodyStyle="{padding: '2px 30px'}">
              <div class="tw-flex tw-justify-between tw-items-center ">
                <div class="tw-flex tw-justify-center tw-items-center">
                  <img src="~/assets/img/bitcoinImg.png" class="tw-mr-4 tw-w-12">
                  <h1 style="font-style: normal; font-weight: 400; font-size: 24px; line-height: 36px">Bitcoin</h1>
                </div>
                <div class="tw-flex tw-justify-center tw-items-center">
                  <a-button style="font-style: normal; font-weight: 600; font-size: 14px; line-height: 12px" class="tw-bg-complementary tw-py-4 tw-rounded-lg tw-px-12 tw-flex tw-justify-center tw-items-center tw-text-white tw-bg-opacity-70 ">
                    Select New Currency
                  </a-button>
                </div>
              </div>
            </a-card>
          </div>

          <div class="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-4">
            <div class="">
              <a-card size="small" style="border-radius: 8px; height: 370px">
                <div class="tw-py-8 ">
                  <div class="">
                    <p class="tw-text-gray-2" style="font-weight: 400; font-size: 14px; line-height: 21px">Selling Price</p>
                    <h1 class="tw-text-gray-1 tw-m-0 tw-p-0" style="font-weight: 600; font-size: 44px; line-height: 66px">$22,540.90</h1>
                  </div>
                  <div class="tw-h-32">
                    <img src="~/assets/img/vectorGraph.svg" class="tw-w-full" />
                  </div>
                  <a-button style="marginTop: 16px; font-weight: 700; font-size: 18px; line-height: 27px;background-color: #0ACF83" class="tw-w-full tw-py-6 tw-rounded-lg tw-px-12 tw-flex tw-justify-center tw-items-center tw-text-white tw-bg-opacity-70 ">
                    Sell
                  </a-button>
                </div>
              </a-card>
            </div>
            <div class="">
              <a-card size="small" style="border-radius: 8px; height: 370px">
                <div class="tw-py-8 ">
                  <div class="">
                    <p class="tw-text-gray-2" style="font-weight: 400; font-size: 14px; line-height: 21px">Buying Price</p>
                    <h1 class="tw-text-gray-1 tw-m-0 tw-p-0" style="font-weight: 600; font-size: 44px; line-height: 66px">$22,540.90</h1>
                  </div>
                  <div class="tw-h-32">
                    <img src="~/assets/img/vectorGraph.svg" class="tw-w-full" />
                  </div>
                  <a-button style="marginTop: 16px;font-weight: 700; font-size: 18px; line-height: 27px; background-color: #F44336" class="tw-w-full tw-py-6 tw-rounded-lg tw-px-12 tw-flex tw-justify-center tw-items-center tw-text-white tw-bg-opacity-70 ">
                    Buy
                  </a-button>
                </div>
              </a-card>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from '@/components/landing/topBar'
export default {
  data() {
    return {
      cardLoading: false,
    }
  },
  components: {
    topBar
  }
}
</script>

<style scoped>
.heroBox {
  height: auto;
  padding-bottom: 30px;
}
.hero {
  height: 100vh;
  background-image: url('/images/hero.svg');
  overflow: hidden;
}
</style>