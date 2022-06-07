<template>
  <div style="margin: 40px; background-color: red; padding: 20px; color: #fff">
    <div>Alpha App</div>
    <div>
      Alpha team will move to rescue {{ name }} with username: {{ username }}
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Alpha",
  setup() {
    const storeData = store();
    console.log(storeData.getState().value);
    return storeData;
  },
};
</script>
