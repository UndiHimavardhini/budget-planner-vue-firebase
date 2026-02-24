<template>
  <div>
    <h3>Filters</h3>

    <select v-model="selectedMonth" @change="apply">
      <option value="">All Months</option>
      <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
    </select>

    <select v-model="selectedCategory" @change="apply">
      <option value="">All Categories</option>
      <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["filter"],
  data() {
    return {
      selectedMonth: "",
      selectedCategory: "",
      months: [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ],
      categories: ["Food","Travel","Shopping","Rent","Other"]
    };
  },
  methods: {
    apply() {
      this.$emit("filter", {
        month: this.selectedMonth,
        category: this.selectedCategory
      });
    }
  }
};
</script>