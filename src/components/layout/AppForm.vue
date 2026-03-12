<script setup>
import AppInputBill from '../form/AppInputBill.vue'
import AppInputTip from '../form/AppInputTip.vue'
import AppInputPeople from '../form/AppInputPeople.vue'
import AppButton from '../form/AppButton.vue'

import { useCalculator } from '../../composables/useCalculator'

const { calculate } = useCalculator()
</script>

<template>

  <div class="inputPage">

    <AppInputBill />

    <div class="input-container">
      <AppInputTip />
      <AppInputPeople />
    </div>

    <AppButton @click="calculate" />

  </div>

</template>

<style scoped>

.inputPage {
  width: 90%;
  padding: 0px;

  margin: 0 auto;
  margin-bottom: 30px;

  background: white;

  box-shadow: none;
  border-radius: 0;
  max-width: none;

  display: flex;
  flex-direction: column;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.input-container > * {
  flex: 1;
}

@media (min-width: 600px) {

  .inputPage {
    width: 100%;
    max-width: 700px;

    margin: auto;
    margin-top: 140px;

    padding: 30px;

    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .input-container {
    flex-direction: row;
    gap: 20px;
  }

}

</style>