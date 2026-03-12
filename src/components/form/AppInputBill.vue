<script setup>
import { useCountState } from '../../state/CountState'

const countState = useCountState();

function formatMoney(value) {
  let numbers = value.replace(/\D/g, "")

  if (numbers === "") {
    countState.bill = "0,00"
    return
  }

  numbers = (parseInt(numbers) / 100).toFixed(2)

  countState.bill = numbers.replace(".", ",")
}

function handleInput(e) {
  formatMoney(e.target.value)
}
</script>

<template>
  <div class="container">

    <div class="input-group">

      <p class="input-text">Valor da Conta:</p>

      <div class="input-wrapper">
        <span class="input-span-left">R$</span>

        <input
          class="input-bill"
          :value="countState.bill"
          placeholder="0,00"
          type="text"
          @input="handleInput"
        />

      </div>

    </div>

  </div>
</template>

<style scoped>

.container {
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-text {
  font-size: 18px;
  font-weight: bold;
  color: #0b30aa;
  margin: 0;
}

.input-wrapper {
  display: flex;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.input-span-left {
  font-size: 20px;
  font-weight: bold;
  color: white;

  background: linear-gradient(145deg, #1d4cff, #0b30aa);

  padding: 8px 12px;

  transform: translateY(-6px);

  box-shadow:
    0 6px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);
}

.input-bill {
  font-size: 20px;
  font-weight: bold;

  border: none;

  padding: 8px 12px;
  width: 100%;

  color: #0b30aa;

  box-shadow:
    0 6px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);

  transition: all 0.15s ease;
}

.input-bill:focus {
  transform: translateY(-4px);

  box-shadow:
    0 8px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);

  outline: none;
}

@media (min-width: 600px) {

  .input-text {
    font-size: 24px;
  }

  .input-span-left {
    font-size: 26px;
    padding: 10px 14px;
  }

  .input-bill {
    font-size: 26px;
    padding: 10px 16px;
  }

}

</style>