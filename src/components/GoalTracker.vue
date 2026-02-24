<template>
  <div>
    <h3>Savings Goal</h3>

    <input
      type="number"
      v-model="target"
      placeholder="Target amount"
    />

    <input
      type="number"
      v-model="saved"
      placeholder="Saved so far"
    />

    <button @click="saveGoal">Save Goal</button>

    <div v-if="progress >= 0" class="progress-box">
      <p>{{ progress }}% completed</p>
      <div class="progress-bar">
        <div class="fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      target: "",
      saved: "",
      progress: -1
    };
  },
  async mounted() {
    const ref = doc(db, "goals", auth.currentUser.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      this.target = snap.data().target;
      this.saved = snap.data().saved;
      this.calculateProgress();
    }
  },
  methods: {
    async saveGoal() {
      await setDoc(doc(db, "goals", auth.currentUser.uid), {
        target: Number(this.target),
        saved: Number(this.saved)
      });
      this.calculateProgress();
    },
    calculateProgress() {
      this.progress = Math.min(
        100,
        Math.round((this.saved / this.target) * 100)
      );
    }
  }
};
</script>

<style scoped>
.progress-box {
  margin-top: 15px;
}
.progress-bar {
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}
.fill {
  height: 100%;
  background: #10b981;
}
</style>