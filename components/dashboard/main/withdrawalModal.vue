<template>
    <a-modal v-model="visible" title="Asset Withdrawal" ok-text="Search" @ok="handleOk">
      <!--for sell order-->
      <div >
         <div class="tw-mb-2">
          <label>
            By Region
          </label>
          <a-input size="large" addon-after="" aria-placeholder=""/>
        </div>
        <div class="tw-mb-2">
          <label>
            By State
          </label>
          <a-input size="large" aria-placeholder=""/>
        </div>
        <div class="tw-mb-2">
          <label>
            By Rating
          </label>
          <a-input size="large" aria-placeholder=""/>
        </div>
      </div>
    </a-modal>
</template>

<script>
export default {
  components:{
      coinSelect
  },
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
};
</script>