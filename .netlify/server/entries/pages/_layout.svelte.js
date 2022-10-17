import { c as create_ssr_component } from "../../chunks/index.js";
/* empty css                                                  */const css = {
  code: '.primaryB{background-color:#1b3059}.secondaryB{background-color:#395273}.primaryG{background-color:#143840}.secondaryG{background-color:#2d5949}.accent{background-color:#f2e3c4}body{margin:0;font-family:"Montserrat", sans-serif;color:#ffffff}h1{margin:0}p{margin:0}button{padding:7px 15px;border:0;border-radius:2px;margin-right:40px;background-color:#3d717c;color:#ffffff;font-family:"Montserrat", sans-serif}.topbar.svelte-w5te2y{width:100%;height:fit-content;display:flex}.title.svelte-w5te2y{padding-left:15px;padding-top:5px;padding-bottom:5px}.nav.svelte-w5te2y{margin-left:auto;margin-right:1%;margin-top:20px}.footer.svelte-w5te2y{height:200px;margin-top:50px;padding-top:75px;text-align:center}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"primaryB topbar svelte-w5te2y"}"><div class="${"title svelte-w5te2y"}"><h1>Titan</h1>
        <p>Software Developer</p></div>
    <div class="${"nav svelte-w5te2y"}"><button>Home</button>
        <button>Who?</button>
        <button>The Lab</button></div></div>

${slots.default ? slots.default({}) : ``}

<div class="${"footer primaryB svelte-w5te2y"}"><p>This site was built with Svelte</p>
    <p>Designed with the help of my awesome friends!</p>
</div>`;
});
export {
  Layout as default
};
