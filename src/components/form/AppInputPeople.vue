<script setup>
import { useCalculator } from '../../composables/useCalculator'

const {
  state,
  addPerson,
  removePerson,
  setPeople
} = useCalculator()

function handleInput(e) {
  setPeople(e.target.value)
}
</script>

<template>
  <div class="container">

    <div class="input-group">

      <p class="input-text">Número de Pessoas:</p>

      <div class="input-wrapper">

        <button
          class="btn-minus"
          @click="removePerson"
        >
          −
        </button>

        <input
          class="input-people"
          :value="state.people"
          @input="handleInput"
          placeholder="0"
          type="number"
          min="1"
          step="1"
        />

        <button
          class="btn-plus"
          @click="addPerson"
        >
          +
        </button>

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
  margin-top: 30px;
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

.btn-minus,
.btn-plus {
  font-size: 26px;
  font-weight: bold;
  color: white;
  transform: translateY(-4px);
  background: linear-gradient(145deg,#1d4cff,#0b30aa);
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  box-shadow:
    0 6px 0 #061b63,
    0 10px 20px rgba(0,0,0,0.3);

  transition: all 0.15s ease;
}

.btn-minus:hover, .btn-plus:hover {
  background: linear-gradient(145deg, #2b5cff, #1239c0);
  transform: translateY(-5px);
  box-shadow:
    0 8px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.35);
}

.btn-minus:active, .btn-plus:active {
  transform: translateY(5px);
  box-shadow:
    0 2px 0 #061b63,
    0 5px 10px rgba(0,0,0,0.3);
}

.input-people {
  font-size: 26px;
  font-weight: bold;
  border: none;
  padding: 10px;
  width: 100%;
  text-align: center;
  color: #0b30aa;
  background: #f8f9ff;
transform: translateY(-2px);
 box-shadow:
    0 6px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);

  transition: all 0.15s ease;
}
  
.input-people:focus {
  transform: translateY(-4px);
  box-shadow:
    0 8px 0 #061b63,
    0 12px 25px rgba(0,0,0,0.3);
}

  .input-people:focus {
  outline: none;
}

@media (max-width: 600px) {

  .input-text {
    font-size: 18px;
    margin: 0;
  }

  .btn-minus,
  .btn-plus {
    font-size: 20px;
    padding: 8px 12px;
  }

  .input-people {
    font-size: 20px;
    padding: 8px 12px;
    margin: 0;
  }

}

</style>