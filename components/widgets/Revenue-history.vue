<template>
<div class="card">
    <div class="card-body">
        <div  class="float-right">
            <div class="selectableBoxes">
                <button class="btn btn-lg">Monthly</button>
                <button class="btn btn-lg">Weekly</button>
                <button class="btn btn-lg active">Today</button>
            </div>
        </div>
        <h4 class="header-title mb-3">Recent Trading Activities</h4>
        <div class="table-responsive mb-0">
            <table class="table table-borderless table-hover table-centered m-0">
                <thead class="thead-light">
                    <!-- <tr>
                        <th>Marketplaces</th>
                        <th>Date</th>
                        <th>US Tax Hold</th>
                        <th>Payouts</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr> -->
                </thead>
                <tbody>
                    <tr v-for="data in revenueData" :key="data.date">
                        <td>
                            <a href="javascript: void(0);" v-if="data.status === 'Completed'" class="btn btn-xs btn-success">
                                <i class="fe-arrow-down-right" ></i>
                            </a>
                            <a href="javascript: void(0);" v-else class="btn btn-xs btn-danger">
                                <i class="fe-arrow-up-left"></i>
                            </a>
                        </td>
                        <td>
                            <h5 class="m-0 font-weight-normal">{{ data.marketplaces }}</h5>
                        </td>
                        <td>{{ data.date }}</td>
                        <td>{{ data.payout }}</td>
                        <td>
                            <span :class="{
                    'bg-soft-success text-success': `${data.status}` === 'Completed',
                    'bg-soft-warning text-warning':
                      `${data.status}` === 'Upcoming',
                    'bg-soft-danger  text-danger':
                      `${data.status}` === 'Canceled'
                  }" class="badge">{{ data.status }}</span>
                        </td>
                        
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
            revenueData: [{
                    marketplaces: "Bitcoin",
                    date: "Oct 15, 2018",
                    payout: "$5848.68",
                    status: "Completed"
                },
                {
                    marketplaces: "Ethereum",
                    date: "Oct 12, 2018",
                    payout: "$5848.68",
                    status: "Pending"
                },
                {
                    marketplaces: "Ripple",
                    date: "Oct 10, 2018",
                    payout: "$815.89",
                    status: "Canceled"
                },
                {
                    marketplaces: "Litecoin",
                    date: "Oct 03, 2018",
                    payout: "$248.75",
                    status: "Completed"
                },
                {
                    marketplaces: "Ethereum",
                    date: "Oct 12, 2018",
                    payout: "$5848.68",
                    status: "Pending"
                },
                {
                    marketplaces: "Ripple",
                    date: "Oct 10, 2018",
                    payout: "$815.89",
                    status: "Canceled"
                },
                {
                    marketplaces: "Bitcoin",
                    date: "Oct 15, 2018",
                    payout: "$5848.68",
                    status: "Completed"
                },
                {
                    marketplaces: "Ethereum",
                    date: "Oct 12, 2018",
                    payout: "$5848.68",
                    status: "Pending"
                },
                {
                    marketplaces: "Ripple",
                    date: "Oct 10, 2018",
                    payout: "$815.89",
                    status: "Canceled"
                },
                {
                    marketplaces: "Litecoin",
                    date: "Oct 03, 2018",
                    payout: "$248.75",
                    status: "Completed"
                },
            ]
        };
    }
};
</script>