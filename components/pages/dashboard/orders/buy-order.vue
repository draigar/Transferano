<template>
  <div class="card">
    <div class="card-body">
      <b-dropdown
        class="float-right"
        variant="black"
        right
        toggle-class="arrow-none card-drop"
      >
        <template v-slot:button-content>
          <i class="mdi mdi-dots-horizontal"></i>
        </template>
        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item">Settings</a>
        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item">Download</a>
        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item">Upload</a>
        <!-- item-->
        <a href="javascript:void(0);" class="dropdown-item">Action</a>
      </b-dropdown>
      <h4 class="header-title mb-3">Buy Order</h4>
      <b-dropdown class="text-left" variant="primary" toggle-class="arrow-none card-drop" left block split>
            <template v-slot:button-content>
                Ripple
                <i class="fe-chevron-down" style="position: absolute; right:-18px;top:10px;z-index: 2;"></i>
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
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>82.3</td>
              <td>0.15</td>
              <td>$134.12</td>
            </tr>
            <tr class="table-success">
              <td>83.9</td>
              <td>0.18</td>
              <td>$237.31</td>
            </tr>
            <tr>
              <td>84.2</td>
              <td>0.35</td>
              <td>252.58</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end .table-responsive-->
    </div>
  </div>
</template>


<script>
/**
 * Revenue history component
 */
export default {
  data() {
    return {
      revenueData: [
        {
          marketplaces: "Bitcoin",
          date: "Oct 15, 2018",
          payout: "$5848.68",
          status: "Completed",
        },
        {
          marketplaces: "Ethereum",
          date: "Oct 12, 2018",
          payout: "$5848.68",
          status: "Pending",
        },
        {
          marketplaces: "Ripple",
          date: "Oct 10, 2018",
          payout: "$815.89",
          status: "Canceled",
        },
        {
          marketplaces: "Litecoin",
          date: "Oct 03, 2018",
          payout: "$248.75",
          status: "Completed",
        },
      ],
    };
  },
};
</script>