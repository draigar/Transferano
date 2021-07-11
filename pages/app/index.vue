<template>
  <div>
    <Breadcrumb pageName="Dashboard" />
    <accountCards/>
    <marketPlace />
    <market-overview/>
    <div>
      <a-row :gutter="16">
        <a-col :span="16">
          <transactions />
        </a-col>
        <a-col :span="8">
          <sellOrder />
          <buyOrder />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import marketPlace from '@/components/dashboard/main/marketPlace';
import transactions from '@/components/dashboard/main/transactions'
import sellOrder from '@/components/dashboard/main/sellOrder'
import buyOrder from '@/components/dashboard/main/buyOrder'
import Breadcrumb from '@/components/dashboard/main/breadcrumb'
import marketOverview from '@/components/dashboard/main/marketOverview'
import accountCards from '~/components/dashboard/main/accountCards.vue'
import MarketOverview from '~/components/dashboard/main/marketOverview.vue';

export default {
	components: { marketPlace, transactions, sellOrder, buyOrder, accountCards, Breadcrumb, marketOverview, MarketOverview },

	data() {
		return {
		collapsed: false,
		};
	},
}
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  
  margin: 16px 28px 16px 0;
  float: left;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
