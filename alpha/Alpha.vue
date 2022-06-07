<template>
  <div style="margin: 40px; background-color: red; padding: 20px; color: #fff">
    <div>Alpha App</div>
    <div>
      Alpha team will move to rescue {{ name }} with username: {{ username }}
    </div>
    <input v-model="state.username" type="text" />
    <button @click="setState('username', state.username)">Save</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Alpha",
  data() {
    return {
      state: {
        username: "",
      },
    };
  },
  setup() {
    const storeData = store();
    return storeData;
  },
};
</script>
