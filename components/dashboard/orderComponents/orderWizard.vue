<template>
    <a-card>
        <a-steps progress-dot :current="current">
            <a-step title="Dgital Asset" />
            <a-step title="Rate" />
            <a-step title="Amount" />
            <a-step title="Bank Details" />
            <a-step title="Review" />
        </a-steps>
        <div v-if="current == 0">     
            <div class="tw-text-center tw-mt-10">
                <h2 class="tw-font-bold">Sell Now</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <a-row class="tw-mx-auto tw-mt-10">
                    <a-col span="9">

                    </a-col>
                    <a-col :span="6">
                        <label class="tw-font-semibold tw-mb-1">Select digital currency</label>
                        <coinSelect/>
                    </a-col>
                    <a-col span="9">

                    </a-col>
                </a-row>
            </div>
        </div>
        <div v-if="current == 1">
            <div class="tw-text-center tw-mt-10">
                <a-row class="tw-mx-auto tw-mt-10">
                    <a-col span="9">

                    </a-col>
                    <a-col :span="6">
                        <label class="tw-font-semibold tw-mb-1">Enter transaction amount</label>
                        <a-input size="large" addon-after="NGN" />
                    </a-col>
                    <a-col span="9">

                    </a-col>
                </a-row>
            </div>
        </div>
        <div v-if="current == 2">
            <div class="tw-text-center tw-mt-10">
                <a-row class="tw-mx-auto tw-mt-10">
                    <a-col span="9">

                    </a-col>
                    <a-col :span="6">
                        <label class="tw-font-semibold tw-mb-1">Amount in ETH</label>
                        <a-input size="large" />
                        <label class="tw-font-semibold tw-mb-1">Amount in dollars</label>
                        <a-input size="large" />
                        <label class="tw-font-semibold tw-mb-1">Amount in naira</label>
                        <a-input size="large" />
                    </a-col>
                    <a-col span="9">

                    </a-col>
                </a-row>
            </div>
        </div>
        <div v-if="current == 3">
            <div class="tw-text-center tw-mt-10">
                <a-row class="tw-mx-auto tw-mt-10">
                    <a-col span="9">

                    </a-col>
                    <a-col :span="6">
                        <label class="tw-font-semibold tw-mb-1">Bank Name</label>
                        <a-input size="large" />
                        <label class="tw-font-semibold tw-mb-1">Account Number</label>
                        <a-input size="large" />
                        <label class="tw-font-semibold tw-mb-1">Account Number</label>
                        <a-input size="large" />
                    </a-col>
                    <a-col span="9">

                    </a-col>
                </a-row>
            </div>
        </div>
        <div v-if="current == 4">
            5
        </div>
        <div class="">
            <a-row class="tw-m-2">
                     <a-button class="tw-float-left" size="large" v-if="current > 0" style="margin-left: 8px" @click="prev">
                        Previous
                    </a-button>
                    <a-button class="tw-float-right" size="large" v-if="current < steps.length - 1" type="primary" @click="next">
                        Next
                    </a-button>
                    <a-button class="tw-float-right" size="large"
                        v-if="current == steps.length - 1"
                        type="primary"
                        @click="$message.success('Processing complete!')"
                    >
                        Done
                    </a-button>
            </a-row>
        </div>
    </a-card>
</template>
<script>
import coinSelect from "../main/coinSelect";
export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: 'Digital Asset',
        },
        {
          title: 'Rate',
        },
        {
          title: 'Amount',
        },
        {
          title: 'Bank Details',
        },
        {
          title: 'Review',
        },
      ],
    };
  },
  components:{
      coinSelect
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>