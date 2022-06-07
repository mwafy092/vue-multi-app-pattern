<template>
  <div
    style="margin: 40px; background-color: purple; padding: 20px; color: #fff"
  >
    <div>Island App</div>
    <div>Dear {{ name }} welcome to our island</div>
    <input v-model="username" type="text" />
    <button @click="setState({ name: 'Natasha' })">Save</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Island",
  data() {
    return {
      username: "change username",
    };
  },
  setup() {
    const storeData = store();
    return storeData;
  },
};
</script>
