<template>
  <div>Delta App</div>
</template>

<script>
import { getStore } from "../store";
export default {
  name: "Delta",

  mounted() {
    this.message = getStore();
    console.log(getStore());
  },
};
</script>
