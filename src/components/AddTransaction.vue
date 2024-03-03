<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input
        type="text"
        name="text"
        v-model="text"
        id="text"
        placeholder="enter text ..."
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount (negative - expense, positive - income)
      </label>
      <input
        type="text"
        name="amount"
        id="amount"
        v-model="amount"
        placeholder="enter amount ..."
      />
    </div>
    <button class="btn">Add transction</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");

const emit = defineEmits(["transationSubmitted"]);
const toast = useToast();
const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("Both field must be field");
  }
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };
  emit("transationSubmitted", transactionData);
  text.value = "";
  amount.value = "";
};
</script>
