<script setup>
import { useCalculator } from '../../composables/useCalculator'

const { calculate } = useCalculator()
</script>

<template>
  <button class="calc-btn" @click="calculate">
    Calcular
  </button>
</template>

<style scoped>

.calc-btn {
  margin-top: 30px;

  font-size: 18px;
  font-weight: bold;

  padding: 12px;
  width: 100%;

  border: none;
  border-radius: 8px;

  background: linear-gradient(145deg, #1d4cff, #0b30aa);
  color: white;

  cursor: pointer;

  box-shadow:
    0 6px 0 #061b63,
    0 10px 20px rgba(0,0,0,0.3);

  transition: all 0.15s ease;
}

.calc-btn:hover {
  background: linear-gradient(145deg, #2b5cff, #1239c0);
  transform: translateY(-2px);

  box-shadow:
    0 8px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.35);
}

.calc-btn:active {
  transform: translateY(4px);

  box-shadow:
    0 2px 0 #061b63,
    0 5px 10px rgba(0,0,0,0.3);
}

@media (min-width: 600px) {

  .calc-btn {
    font-size: 25px;
    padding: 14px;
    border-radius: 10px;
  }

}

</style>