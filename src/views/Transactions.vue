<template>
  <div class="transactions-page">
    <Navbar />
    <h2 class="page-title">💰 Transactions</h2>

    <ExpenseForm />

    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in transactions" :key="t.id" :class="t.type.toLowerCase()">
          <td>{{ t.type }}</td>
          <td>{{ t.categoryIcon }} {{ t.category }}</td>
          <td>{{ t.amount }}</td>
          <td>{{ new Date(t.createdAt?.seconds * 1000).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ExpenseForm from "../components/ExpenseForm.vue";
import { db, auth } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  components: { Navbar, ExpenseForm },
  data() { return { transactions: [] }; },
  async mounted() { await this.loadTransactions(); },
  methods: {
    async loadTransactions() {
      const q = query(collection(db, "transactions"), where("uid", "==", auth.currentUser.uid));
      const snap = await getDocs(q);
      this.transactions = snap.docs.map(d => ({
        ...d.data(),
        id: d.id,
        categoryIcon: {
          Food: "🍔",
          Travel: "✈️",
          Shopping: "🛍️",
          Rent: "🏠",
          Other: "🔖"
        }[d.data().category] || "🔖"
      }));
    }
  }
};
</script>

<style scoped>
.transactions-page { padding: 30px; }

.page-title { margin-bottom: 20px; color: var(--text-color); }

table { width: 100%; border-collapse: collapse; }
th, td { padding: 12px; text-align: center; border-bottom: 1px solid #d1d5db; }
tr.income { background: #34d39933; }
tr.expense { background: #f8717133; }
</style>