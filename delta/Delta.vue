<template>
  <div>Delta App</div>
</template>

<script>
import { getStore } from "../store";
console.log(getStore().then((data) => console.log(data)));

export default {
  name: "Delta",

  mounted() {},
};
</script>
