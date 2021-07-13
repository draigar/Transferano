<template>
    <div>
        <div v-if="!orderWiz">
            <a-row class="tw-m-2">
                <a-col :span="6">
                    <coinSelect/>
                </a-col>
				<a-radio-group default-value="1" button-style="" class="tw-mr-5 tw-float-right tw-rounded-md tw-border-none tw-font-bold" size="large">
					<a-radio-button value="1">
					Buy Orders
					</a-radio-button>
					<a-radio-button value="2">
					Sell Orders
					</a-radio-button>
				</a-radio-group>
                <!-- <a-col :span="6" :offset="12">
                    <a-dropdown placement="bottomCenter" class="tw-float-right">
                    <a-button size="large" type="" class="tw-bg-blue-800 tw-text-white tw-rounded-md">New order</a-button>
                    <a-menu slot="overlay">
                        <a-menu-item class="tw-p-2">
                        <a 
                            >buy order</a
                        >
                        </a-menu-item>
                        <a-menu-item class="tw-p-2">
                        <a @click="orderWiz=true" rel="noopener noreferrer"
                            >sell order</a
                        >
                        </a-menu-item>
                    </a-menu>
                    </a-dropdown>
                </a-col> -->
            </a-row>
            <orderTable/>
        </div>
        <div v-if="orderWiz">
            <orderWizard/>
        </div>

    </div>
</template>
<script>
import coinSelect from "../main/coinSelect";
import orderTable from "./orderTable";
import orderWizard from "./orderWizard";

export default {
  data() {
    return {
        orderWiz: false,
        showModal: false,
    }
  },
  components: {
      coinSelect,
      orderTable,
      orderWizard,
  },
  methods: {
    add(){
        this.$refs.modal.showModal()
    }
  }
}
</script>