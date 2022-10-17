import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
import "pocketbase";
/* empty css                                                  */const Post_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-z4vydk{margin-top:125px;text-align:center;font-size:50px}h2.svelte-z4vydk{text-align:center;font-size:20px}h3.svelte-z4vydk{text-align:center;margin-top:100px;font-size:25px}canvas.svelte-z4vydk{width:300px;height:300px;margin-left:auto;margin-right:auto}.spacer.svelte-z4vydk{margin-bottom:75px}.left.svelte-z4vydk{margin-left:5%}.flex.svelte-z4vydk{margin-top:100px;display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css);
  return `


<head><title>Titan&#39;s Blog</title></head>

<div><div class="${"flex svelte-z4vydk"}"><h1 class="${"left svelte-z4vydk"}">Do you like technology?</h1>
    <canvas class="${"svelte-z4vydk"}"${add_attribute("this", canvas, 0)}></canvas></div>
  <h2 class="${"svelte-z4vydk"}">If yes, then you&#39;ll like this site.</h2>
  <div class="${"spacer svelte-z4vydk"}"><h3 class="${"svelte-z4vydk"}">I&#39;m Titan, and this is my humble site, where I write about things that
      interest me, in the wonderful world of tech.
    </h3>
    <h3 class="${"svelte-z4vydk"}">This site is where my blog/feed, experiments, and history are all located.
      Thank you for visiting, and let the experimentation commence!
    </h3>
    <h3 class="${"svelte-z4vydk"}">Also, this site is currently still under construction, so expect stupid
      things.
    </h3></div>
  <h1 class="${"svelte-z4vydk"}">Recent Feed Posts</h1>
  <div class="${"flex svelte-z4vydk"}">${``}</div>
</div>`;
});
export {
  Page as default
};
