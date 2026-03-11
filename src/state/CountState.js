import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountState = defineStore("countState", () => {

  const bill = ref("");
  const tip = ref("");
  const people = ref(0);

  const total = ref(0);
  const tipValue = ref(0);
  const perPerson = ref(0);

  const message = ref("");

  return {
    bill,
    tip,
    people,
    total,
    tipValue,
    perPerson,
    message
  };

});