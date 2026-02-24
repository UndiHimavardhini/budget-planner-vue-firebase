<template>
  <div>
    <!-- Navbar -->
    <Navbar class="navbar-gradient" />

    <!-- Dashboard Grid -->
    <div class="dashboard">
      <!-- Income / Expense Form -->
      <div class="card">
        <h2 class="card-title">💸 Add Transaction</h2>
        <ExpenseForm />
      </div>

      <!-- Filters -->
      <div class="card">
        <h2 class="card-title">🔍 Filters</h2>
        <Filters @filter="applyFilters" />
      </div>

      <!-- Charts -->
      <div class="card chart-card">
        <h2 class="card-title">📊 Analytics</h2>
        <ChartSection :filters="filters" />
      </div>

      <!-- Savings Goal -->
      <div class="card">
        <h2 class="card-title">🎯 Savings Goal</h2>
        <GoalTracker />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ExpenseForm from "../components/ExpenseForm.vue";
import Filters from "../components/Filters.vue";
import ChartSection from "../components/ChartSection.vue";
import GoalTracker from "../components/GoalTracker.vue";

export default {
  components: {
    Navbar,
    ExpenseForm,
    Filters,
    ChartSection,
    GoalTracker
  },
  data() {
    return {
      filters: {}
    };
  },
  methods: {
    applyFilters(f) {
      this.filters = f;
    }
  }
};
</script>

<style scoped>
/* Navbar Gradient */
.navbar-gradient {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Dashboard Grid */
.dashboard {
  padding: 40px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

/* Card Styling */
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 25px 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

/* Card Title */
.card-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #111827;
}

/* Chart Card Centering */
.chart-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Inputs & Buttons Styling */
input, select {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
}

button {
  padding: 10px 18px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: filter 0.2s;
}

button:hover {
  filter: brightness(1.1);
}

/* Savings Progress Bar Gradient */
.fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  transition: width 0.5s ease;
}

/* Responsive */
@media (max-width: 640px) {
  .dashboard {
    padding: 20px;
    gap: 20px;
  }
}
</style>