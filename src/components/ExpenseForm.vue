<template>
  <div>
    <h3>Add Income / Expense</h3>

    <input v-model="amount" type="number" placeholder="Amount" />
    <select v-model="type">
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>

    <select v-model="category">
      <option>Food</option>
      <option>Travel</option>
      <option>Shopping</option>
      <option>Rent</option>
      <option>Other</option>
    </select>

    <button @click="addTransaction">Add</button>

    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<script>
import { db, auth } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default {
  data() {
    return {
      amount: "",
      type: "expense",
      category: "Food",
      msg: ""
    };
  },
  methods: {
    async addTransaction() {
      if (!this.amount) return;

      await addDoc(collection(db, "transactions"), {
        uid: auth.currentUser.uid,
        amount: Number(this.amount),
        type: this.type,
        category: this.category,
        createdAt: serverTimestamp()
      });

      this.msg = "Transaction added!";
      this.amount = "";
    }
  }
};
</script>