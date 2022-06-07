<template>
  <div>Island App</div>
</template>

<script>
import { getStore, setStore } from "../store";
setStore("message", "proxy is nice!!");
export default {
  name: "Island",
  data() {
    return {
      publicData: {
        message: "store is nice!",
      },
    };
  },
  mounted() {},
};
</script>
