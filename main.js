import { createApp } from "vue";
import Delta from "./delta/Delta.vue";
import Alpha from "./alpha/Alpha.vue";
import Island from "./island/Island.vue";

const apps = [Delta, Alpha, Island];

apps.map((app) => {
  const hook = document.createElement("div");
  hook.setAttribute("id", `${app.name.toLowerCase()}`);
  document.body.appendChild(hook);
  createApp(app).mount(`#${app.name.toLocaleLowerCase()}`);
});
