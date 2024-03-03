//@ts-ignore
import App from "./App.vue";
import "./assets/styles.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createApp } from "vue";

const app = createApp(App);

app.use(Toast).mount("#app");
