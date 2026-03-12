import { useCountState } from "../state/CountState";

export function useCalculator() {
  const state = useCountState();

  function formatMoney(value) {
    return Number(value).toFixed(2).replace(".", ",");
  }

  function parseMoney(value) {
    return Number(
      String(value)
        .replace(/[^\d,]/g, "")
        .replace(",", ".")
    );
  }

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

    if (isNaN(num) || num < 0) {
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

  const bill = Number(state.bill.replace(",", "."));
  const tipPercent = Number(state.tip) || 0;
  const people = Number(state.people);

  if (!bill || people < 1) {
    state.message = "Preencha os campos corretamente";
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
    calculate,
  };
}