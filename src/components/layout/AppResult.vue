<script setup>
import { useCountState } from "../../state/CountState.js";

const state = useCountState();

function reset() {
  state.bill = ''
  state.tip = ''
  state.people = ''

  state.total = ''
  state.tipValue = ''
  state.perPerson = ''

  state.message = ""
}

function format(value) {
  return Number(value).toFixed(2)
}
</script>

<template>
  <div class="page">

    <h2 class="title">Resultado:</h2>

    <div class="result-card">
      <span class="label">Total:</span>
      <span class="value">R$ {{ format(state.total).replace(".", ",") }}</span>
    </div>

    <div class="result-card">
      <span class="label">Gorjeta:</span>
      <span class="value">R$ {{ format(state.tipValue).replace(".", ",") }}</span>
    </div>

    <div class="result-card highlight">
      <span class="label">Por Pessoa:</span>
      <span class="value">R$ {{ format(state.perPerson).replace(".", ",") }}</span>
    </div>

    <button class="reset-btn" @click="reset">
      Resetar
    </button>

  </div>
</template>

<style scoped>

.page {
  width: 90%;
  margin: 0 auto;

  padding: 20px 0 0 0;

  background: white;

  border-top:#0b30aa 2px solid;
  border-radius: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  box-shadow: none;
  max-width: none;
}

.title {
  margin: 0;
  color: #0b30aa;
  font-size: 26px;
  text-align: center;
}

.result-card {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 18px;

  border-radius: 8px;
  background: #f5f7ff;

  font-size: 18px;
}

.highlight {
  background: linear-gradient(145deg, #1d4cff, #0b30aa);
  color: white;
  font-weight: bold;
}

.label {
  font-weight: 500;
}

.value {
  font-weight: bold;
  font-size: 20px;
}

.reset-btn {
  margin-top: 10px;

  padding: 12px;

  font-size: 18px;
  font-weight: bold;

  border: none;
  border-radius: 8px;

  background: linear-gradient(145deg, #ff2b2b, #c01212);
  color: white;

  cursor: pointer;

  box-shadow:
    0 6px 0 #630606,
    0 10px 20px rgba(0,0,0,0.3);

  transition: all 0.15s ease;
}

.reset-btn:hover {
  background: linear-gradient(145deg, #f74545, #c01212);
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #630606,
    0 12px 25px rgba(0,0,0,0.35);
}

.reset-btn:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #630606,
    0 5px 10px rgba(0,0,0,0.3);
}

@media (min-width: 600px) {

  .page {
    width: 100%;
    max-width: 700px;
    margin: auto;
    margin-top: 140px;

    padding: 30px;

    border-radius: 12px;
    border-top: none;

    box-shadow: 0 10px 25px rgba(0,0,0,0.1);

    gap: 20px;
  }

  .title {
    font-size: 28px;
    text-align: left;
  }

}

</style>