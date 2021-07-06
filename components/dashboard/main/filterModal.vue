<template>
    <a-modal v-model="visible" title="Filter Options" ok-text="Search" @ok="handleOk">
      <!--for sell order-->
      <div >
        <label>By Asset</label>
        <coinSelect/>
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
import coinSelect from "../main/coinSelect";

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