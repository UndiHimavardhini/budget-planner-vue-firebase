<template>
  <div>
    <h3>Expense Breakdown</h3>
    <canvas ref="pieChart"></canvas>

    <h3 style="margin-top:30px;">Income vs Expense</h3>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
import { db, auth } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  props: ["filters"],
  data() {
    return {
      charts: []
    };
  },
  async mounted() {
    await this.loadData();
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.loadData();
      }
    }
  },
  methods: {
    async loadData() {
      this.charts.forEach(c => c.destroy());
      this.charts = [];

      const q = query(
        collection(db, "transactions"),
        where("uid", "==", auth.currentUser.uid)
      );
      const snapshot = await getDocs(q);
      let transactions = snapshot.docs.map(d => d.data());

      if (this.filters.month) {
        transactions = transactions.filter(t =>
          new Date(t.createdAt?.seconds * 1000).toLocaleString("default", { month: "long" }) === this.filters.month
        );
      }

      if (this.filters.category) {
        transactions = transactions.filter(t =>
          t.category === this.filters.category
        );
      }

      this.renderCharts(transactions);
    },
    renderCharts(transactions) {
      let expenseByCategory = {};
      let income = 0, expense = 0;

      transactions.forEach(t => {
        if (t.type === "expense") {
          expense += t.amount;
          expenseByCategory[t.category] =
            (expenseByCategory[t.category] || 0) + t.amount;
        } else {
          income += t.amount;
        }
      });

      this.charts.push(new Chart(this.$refs.pieChart, {
        type: "pie",
        data: {
          labels: Object.keys(expenseByCategory),
          datasets: [{ data: Object.values(expenseByCategory) }]
        }
      }));

      this.charts.push(new Chart(this.$refs.barChart, {
        type: "bar",
        data: {
          labels: ["Income", "Expense"],
          datasets: [{ data: [income, expense] }]
        }
      }));
    }
  }
};
</script>