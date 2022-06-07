<template>
  <div>Island App</div>
</template>

<script>
import { setStore } from "../store";
export default {
  name: "Island",
  data() {
    return {
      publicData: {
        message: "store is nice.",
      },
    };
  },
  mounted() {
    setStore(this.publicData);
  },
};
</script>
