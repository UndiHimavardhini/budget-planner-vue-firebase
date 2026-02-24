<template>
  <nav class="navbar">
    <h2>💰 Budget Planner</h2>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #1f2937;
  color: white;
}

button {
  background: #ef4444;
  border: none;
  padding: 8px 16px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>