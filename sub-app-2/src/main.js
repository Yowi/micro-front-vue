import Vue from "vue";
import "./public-path";

Vue.config.productionTip = false;

let instance = null;

function render() {
  instance = new Vue({
    render: createElement => createElement("h1", "APP2")
  }).$mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log("APP2 ------ default load");
  render();
}

export async function bootstrap() {
  console.log("APP2 ------ bootstrap");
}

export async function mount(props) {
  console.log("APP2 ------ mount", props);
  render();
}

export async function unmount() {
  console.log("APP2 ------ unmount");
  instance.$destroy();
  instance = null;
}
