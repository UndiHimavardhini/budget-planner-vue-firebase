<template>
  <div class="login">
    <h1>Budget Planner</h1>

    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="login">Login / Register</button>

    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      this.error = "";
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/dashboard");
      } catch (err) {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/dashboard");
        } catch (e) {
          this.error = e.message;
        }
      }
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 260px;
  padding: 10px;
  margin: 8px 0;
}
button {
  padding: 10px 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>