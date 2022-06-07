import { reactive } from "vue";
import { computed } from "vue";
export const withState = (target, state) => {
  Object.keys(state).forEach((prop) => {
    target[prop] = computed(() => state[prop]);
  });
  return target;
};

let state = reactive({
  name: "John Doe",
  email: "fake@email.com",
  username: "jd123",
});

let getState = () => computed(() => state);
let setState = (property, value) => {
  state[property] = value;
};
export default () => withState({ getState, setState }, state);
