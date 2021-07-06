<template>
  <div class="tw-py-8 tw-px-28">
    <div class="tw-flex tw-justify-between tw-flex-row tw-items-center">
      <div>
        <h1 class="tw-p-0 tw-m-0">{{ data.title }}</h1>
        <p
          class="tw-text-gray-1 tw-p-0 tw-m-0"
          style="font-weight: 400; font-size: 18px; line-height: 27px"
        >
          {{ data.description }}
        </p>
      </div>
      <a-button
        type="primary"
        class="tw-bg-primary tw-outline-none tw-px-16 tw-rounded-lg"
        style="font-weight: 400; font-size: 18px"
        size="large"
      >
        View All
      </a-button>
    </div>
    <div class="tw-grid tw-grid-cols-3 tw-gap-6 tw-py-6">
      <a-card
        size="small"
        style="border-radius: 8px; height: 324px"
        class="tw-shadow-lg"
      >
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            src="team-1/team-1.jpg"
            class="tw-rounded-full tw-shadow-sm tw-mr-4"
            style="width: 64px; height: 64px"
          />
          <p
            class="tw-text-black-1"
            style="font-weight: 400; font-size: 18px; line-height: 27px"
          >
            Cosmin Nigeria
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-16">
          <h1
            class="tw-text-primary"
            style="font-weight: 500; font-size: 28px; line-height: 12px"
          >
            21,412,000.00 NGN/BTC
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Maximum:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0.093573 BTC</span>
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-10">
          <h1
            class="tw-text-gray-1"
            style="font-weight: 500; font-size: 24px; line-height: 16px"
          >
            Transferano NGN Wallet
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Completion Section:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0s - 1s</span>
          </p>
        </div>
      </a-card>
      <a-card
        size="small"
        style="border-radius: 8px; height: 324px"
        class="tw-shadow-lg"
      >
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            src="team-1/team-2.jpg"
            class="tw-rounded-full tw-shadow-sm tw-mr-4"
            style="width: 64px; height: 64px"
          />
          <p
            class="tw-text-black-1"
            style="font-weight: 400; font-size: 18px; line-height: 27px"
          >
            Cosmin Nigeria
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-16">
          <h1
            class="tw-text-primary"
            style="font-weight: 500; font-size: 28px; line-height: 12px"
          >
            21,412,000.00 NGN/BTC
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Maximum:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0.093573 BTC</span>
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-10">
          <h1
            class="tw-text-gray-1"
            style="font-weight: 500; font-size: 24px; line-height: 16px"
          >
            Transferano NGN Wallet
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Completion Section:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0s - 1s</span>
          </p>
        </div>
      </a-card>
      <a-card
        size="small"
        style="border-radius: 8px; height: 324px"
        class="tw-shadow-lg"
      >
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            src="team-1/team-3.jpg"
            class="tw-rounded-full tw-shadow-sm tw-mr-4"
            style="width: 64px; height: 64px"
          />
          <p
            class="tw-text-black-1"
            style="font-weight: 400; font-size: 18px; line-height: 27px"
          >
            Cosmin Nigeria
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-16">
          <h1
            class="tw-text-primary"
            style="font-weight: 500; font-size: 28px; line-height: 12px"
          >
            21,412,000.00 NGN/BTC
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Maximum:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0.093573 BTC</span>
          </p>
        </div>
        <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-10">
          <h1
            class="tw-text-gray-1"
            style="font-weight: 500; font-size: 24px; line-height: 16px"
          >
            Transferano NGN Wallet
          </h1>
          <p>
            <span
              class="tw-text-gray-2"
              style="font-weight: 400; font-size: 14px; line-height: 21px"
              >Completion Section:</span
            >
            <span class="tw-text-black-1" style="font-weight: 400; font-size: 14px; line-height: 21px">0s - 1s</span>
          </p>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>