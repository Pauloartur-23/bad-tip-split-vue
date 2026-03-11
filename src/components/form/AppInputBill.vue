<script setup>
import { useCountState } from '../../state/CountState'

const countState = useCountState();
</script>

<template>
  <div class="container">

    <div class="input-group">

      <p class="input-text">Valor da Conta:</p>

      <div class="input-wrapper">
        <span class="input-span-left">R$</span>

        <input
          class="input-bill"
          v-model="countState.bill"
          placeholder="0,00"
          type="number"
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
  font-size: 24px;
  font-weight: bold;
  color: #0b30aa;
}

.input-wrapper {
  display: flex;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.input-span-left {
  font-size: 26px;
  font-weight: bold;
  color: white;
  background: linear-gradient(145deg, #1d4cff, #0b30aa);
  padding: 10px 14px;
  box-shadow:
    0 6px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);
  transform: translateY(-6px);
}

.input-bill {
  font-size: 26px;
  font-weight: bold;
  border: none;
  padding: 10px 16px;
  width: 100%;
  color: #0b30aa;
  transition: all 0.2s ease;
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
}

.input-bill:focus {
  outline: none;
}

@media (max-width: 600px) {

  .input-text {
    font-size: 18px;
    margin: 0;
  }

  .input-span-left {
    font-size: 20px;
    padding: 8px 12px;
  }

  .input-bill {
    font-size: 20px;
    padding: 8px 12px;
    margin: 0;
  }

}

</style>