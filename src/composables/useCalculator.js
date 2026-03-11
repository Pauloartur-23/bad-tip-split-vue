import { useCountState } from "../state/CountState";

export function useCalculator() {

  const state = useCountState();

  function setPeople(value) {
    const num = Number(value);

    if (num < 1 || isNaN(num)) {
      state.people = 1;
      return;
    }

    state.people = num;
  }

  function addPerson() {
    state.people++;
  }

  function removePerson() {
    if (state.people > 1) {
      state.people--;
    }
  }

  function setTip(value) {
    const num = Number(value);

    if (num < 0 || isNaN(num)) {
      state.tip = 0;
      return;
    }

    state.tip = num;
  }

  function addTip() {
    state.tip++;
  }

  function removeTip() {
    if (state.tip > 0) {
      state.tip--;
    }
  }

  function calculate() {
    const bill = Number(state.bill);
    const tipPercent = Number(state.tip);
    const people = Number(state.people);

    if (!bill || !tipPercent || !people) {
      state.message = "Preencha todos os campos";
      return;
    }

    const tipValue = bill * (tipPercent / 100);
    const total = bill + tipValue;
    const perPerson = total / people;

    state.tipValue = tipValue.toFixed(2);
    state.total = total.toFixed(2);
    state.perPerson = perPerson.toFixed(2);

    state.message = "";
  }

  return {
    state,
    addPerson,
    removePerson,
    setPeople,
    addTip,
    removeTip,
    setTip,
    calculate
  };
}