<template>
  <div
    style="
      margin: 40px;
      background-color: green;
      padding: 20px;
      color: #fff;
      border-radius: 5px;
    "
  >
    <div>Delta App</div>
    <div>
      <ul>
        <li>Name: {{ name }}</li>
        <li>Email: {{ email }}</li>
        <li>username: {{ username }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Delta",

  setup() {
    const storeData = store();
    return storeData;
  },
};
</script>
