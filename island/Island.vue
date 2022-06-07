<template>
  <div
    style="margin: 40px; background-color: purple; padding: 20px; color: #fff"
  >
    <div>Island App</div>
    <div>Dear {{ name }} welcome to our island</div>
    <label for="name">
      Name
      <input v-model="state.name" type="text" placeholder="name" />
    </label>
    <button @click="setState('name', state.name)">Save</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Island",
  data() {
    return {
      state: {
        name: "",
      },
    };
  },
  setup() {
    const storeData = store();
    return storeData;
  },
};
</script>
