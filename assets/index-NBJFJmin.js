const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CDk0VQqm.js","assets/__federation_fn_import-CaJbCybZ.js","assets/_plugin-vue_export-helper-8ijppmbV.js"])))=>i.map(i=>d[i]);
import { importShared } from './__federation_fn_import-CaJbCybZ.js';
import { _export_sfc } from './_plugin-vue_export-helper-8ijppmbV.js';

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {toDisplayString:_toDisplayString$1,createElementVNode:_createElementVNode$8,createTextVNode:_createTextVNode$2,openBlock:_openBlock$9,createElementBlock:_createElementBlock$9} = await importShared('vue');

const _hoisted_1$7 = { class: "greetings" };
const _hoisted_2$1 = { class: "green" };
const _sfc_main$9 = /* @__PURE__ */ _defineComponent$3({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$9(), _createElementBlock$9("div", _hoisted_1$7, [
        _createElementVNode$8("h1", _hoisted_2$1, _toDisplayString$1(_ctx.msg), 1),
        _cache[0] || (_cache[0] = _createElementVNode$8("h3", null, [
          _createTextVNode$2(" You’ve successfully created a project with "),
          _createElementVNode$8("a", {
            href: "https://vite.dev/",
            target: "_blank",
            rel: "noopener"
          }, "Vite"),
          _createTextVNode$2(" + "),
          _createElementVNode$8("a", {
            href: "https://vuejs.org/",
            target: "_blank",
            rel: "noopener"
          }, "Vue 3"),
          _createTextVNode$2(". What's next? ")
        ], -1))
      ]);
    };
  }
});

const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-d1bb330e"]]);

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode$7,createVNode:_createVNode$2,createTextVNode:_createTextVNode$1,unref:_unref,withCtx:_withCtx$1,Fragment:_Fragment$1,openBlock:_openBlock$8,createElementBlock:_createElementBlock$8} = await importShared('vue');
const _hoisted_1$6 = { class: "wrapper" };
const {RouterLink,RouterView} = await importShared('vue-router');
const {ref,onMounted} = await importShared('vue');

const _sfc_main$8 = /* @__PURE__ */ _defineComponent$2({
  __name: "App",
  setup(__props) {
    const count = ref(10);
    const isLoading = ref(true);
    onMounted(() => {
      isLoading.value = false;
    });
    return (_ctx, _cache) => {
      return _openBlock$8(), _createElementBlock$8(_Fragment$1, null, [
        _createElementVNode$7("header", null, [
          _createElementVNode$7("p", null, "Count: " + _toDisplayString(count.value), 1),
          _cache[2] || (_cache[2] = _createElementVNode$7("img", {
            alt: "Vue logo",
            class: "logo",
            src: _imports_0,
            width: "125",
            height: "125"
          }, null, -1)),
          _createElementVNode$7("div", _hoisted_1$6, [
            _createVNode$2(HelloWorld, { msg: "You did it!" }),
            _createElementVNode$7("nav", null, [
              _createVNode$2(_unref(RouterLink), { to: "/" }, {
                default: _withCtx$1(() => _cache[0] || (_cache[0] = [
                  _createTextVNode$1("Home")
                ])),
                _: 1,
                __: [0]
              }),
              _createVNode$2(_unref(RouterLink), { to: "/about" }, {
                default: _withCtx$1(() => _cache[1] || (_cache[1] = [
                  _createTextVNode$1("About")
                ])),
                _: 1,
                __: [1]
              })
            ])
          ])
        ]),
        _createVNode$2(_unref(RouterView))
      ], 64);
    };
  }
});

const App = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-561e7f99"]]);

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/vue-project/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true               && deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

const _sfc_main$7 = {  };
const {renderSlot:_renderSlot,createElementVNode:_createElementVNode$6,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7} = await importShared('vue');


const _hoisted_1$5 = { class: "item" };
const _hoisted_2 = { class: "details" };

function _sfc_render$5(_ctx, _cache) {
  return (_openBlock$7(), _createElementBlock$7("div", _hoisted_1$5, [
    _createElementVNode$6("i", null, [
      _renderSlot(_ctx.$slots, "icon", {}, undefined, true)
    ]),
    _createElementVNode$6("div", _hoisted_2, [
      _createElementVNode$6("h3", null, [
        _renderSlot(_ctx.$slots, "heading", {}, undefined, true)
      ]),
      _renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ])
  ]))
}
const WelcomeItem = /*#__PURE__*/_export_sfc(_sfc_main$7, [['render',_sfc_render$5],['__scopeId',"data-v-fd0742eb"]]);

const _sfc_main$6 = {  };
const {createElementVNode:_createElementVNode$5,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6} = await importShared('vue');


const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
};

function _sfc_render$4(_ctx, _cache) {
  return (_openBlock$6(), _createElementBlock$6("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    _createElementVNode$5("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1)
  ])))
}
const DocumentationIcon = /*#__PURE__*/_export_sfc(_sfc_main$6, [['render',_sfc_render$4]]);

const _sfc_main$5 = {  };
const {createElementVNode:_createElementVNode$4,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');


const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};

function _sfc_render$3(_ctx, _cache) {
  return (_openBlock$5(), _createElementBlock$5("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    _createElementVNode$4("path", {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor"
    }, null, -1)
  ])))
}
const ToolingIcon = /*#__PURE__*/_export_sfc(_sfc_main$5, [['render',_sfc_render$3]]);

const _sfc_main$4 = {  };
const {createElementVNode:_createElementVNode$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');


const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
};

function _sfc_render$2(_ctx, _cache) {
  return (_openBlock$4(), _createElementBlock$4("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    _createElementVNode$3("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1)
  ])))
}
const EcosystemIcon = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render$2]]);

const _sfc_main$3 = {  };
const {createElementVNode:_createElementVNode$2,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');


const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};

function _sfc_render$1(_ctx, _cache) {
  return (_openBlock$3(), _createElementBlock$3("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    _createElementVNode$2("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1)
  ])))
}
const CommunityIcon = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$1]]);

const _sfc_main$2 = {  };
const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');


const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};

function _sfc_render(_ctx, _cache) {
  return (_openBlock$2(), _createElementBlock$2("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    _createElementVNode$1("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1)
  ])))
}
const SupportIcon = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createVNode:_createVNode$1,createTextVNode:_createTextVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "TheWelcome",
  setup(__props) {
    const openReadmeInEditor = () => fetch("/__open-in-editor?file=README.md");
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment, null, [
        _createVNode$1(WelcomeItem, null, {
          icon: _withCtx(() => [
            _createVNode$1(DocumentationIcon)
          ]),
          heading: _withCtx(() => _cache[0] || (_cache[0] = [
            _createTextVNode("Documentation")
          ])),
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createTextVNode(" Vue’s ")),
            _cache[2] || (_cache[2] = _createElementVNode("a", {
              href: "https://vuejs.org/",
              target: "_blank",
              rel: "noopener"
            }, "official documentation", -1)),
            _cache[3] || (_cache[3] = _createTextVNode(" provides you with all information you need to get started. "))
          ]),
          _: 1,
          __: [1, 2, 3]
        }),
        _createVNode$1(WelcomeItem, null, {
          icon: _withCtx(() => [
            _createVNode$1(ToolingIcon)
          ]),
          heading: _withCtx(() => _cache[4] || (_cache[4] = [
            _createTextVNode("Tooling")
          ])),
          default: _withCtx(() => [
            _cache[6] || (_cache[6] = _createTextVNode(" This project is served and bundled with ")),
            _cache[7] || (_cache[7] = _createElementVNode("a", {
              href: "https://vite.dev/guide/features.html",
              target: "_blank",
              rel: "noopener"
            }, "Vite", -1)),
            _cache[8] || (_cache[8] = _createTextVNode(". The recommended IDE setup is ")),
            _cache[9] || (_cache[9] = _createElementVNode("a", {
              href: "https://code.visualstudio.com/",
              target: "_blank",
              rel: "noopener"
            }, "VSCode", -1)),
            _cache[10] || (_cache[10] = _createTextVNode(" + ")),
            _cache[11] || (_cache[11] = _createElementVNode("a", {
              href: "https://github.com/vuejs/language-tools",
              target: "_blank",
              rel: "noopener"
            }, "Vue - Official", -1)),
            _cache[12] || (_cache[12] = _createTextVNode(". If you need to test your components and web pages, check out ")),
            _cache[13] || (_cache[13] = _createElementVNode("a", {
              href: "https://vitest.dev/",
              target: "_blank",
              rel: "noopener"
            }, "Vitest", -1)),
            _cache[14] || (_cache[14] = _createTextVNode(" and ")),
            _cache[15] || (_cache[15] = _createElementVNode("a", {
              href: "https://www.cypress.io/",
              target: "_blank",
              rel: "noopener"
            }, "Cypress", -1)),
            _cache[16] || (_cache[16] = _createTextVNode(" / ")),
            _cache[17] || (_cache[17] = _createElementVNode("a", {
              href: "https://playwright.dev/",
              target: "_blank",
              rel: "noopener"
            }, "Playwright", -1)),
            _cache[18] || (_cache[18] = _createTextVNode(". ")),
            _cache[19] || (_cache[19] = _createElementVNode("br", null, null, -1)),
            _cache[20] || (_cache[20] = _createTextVNode(" More instructions are available in ")),
            _createElementVNode("a", {
              href: "javascript:void(0)",
              onClick: openReadmeInEditor
            }, _cache[5] || (_cache[5] = [
              _createElementVNode("code", null, "README.md", -1)
            ])),
            _cache[21] || (_cache[21] = _createTextVNode(". "))
          ]),
          _: 1,
          __: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
        }),
        _createVNode$1(WelcomeItem, null, {
          icon: _withCtx(() => [
            _createVNode$1(EcosystemIcon)
          ]),
          heading: _withCtx(() => _cache[22] || (_cache[22] = [
            _createTextVNode("Ecosystem")
          ])),
          default: _withCtx(() => [
            _cache[23] || (_cache[23] = _createTextVNode(" Get official tools and libraries for your project: ")),
            _cache[24] || (_cache[24] = _createElementVNode("a", {
              href: "https://pinia.vuejs.org/",
              target: "_blank",
              rel: "noopener"
            }, "Pinia", -1)),
            _cache[25] || (_cache[25] = _createTextVNode(", ")),
            _cache[26] || (_cache[26] = _createElementVNode("a", {
              href: "https://router.vuejs.org/",
              target: "_blank",
              rel: "noopener"
            }, "Vue Router", -1)),
            _cache[27] || (_cache[27] = _createTextVNode(", ")),
            _cache[28] || (_cache[28] = _createElementVNode("a", {
              href: "https://test-utils.vuejs.org/",
              target: "_blank",
              rel: "noopener"
            }, "Vue Test Utils", -1)),
            _cache[29] || (_cache[29] = _createTextVNode(", and ")),
            _cache[30] || (_cache[30] = _createElementVNode("a", {
              href: "https://github.com/vuejs/devtools",
              target: "_blank",
              rel: "noopener"
            }, "Vue Dev Tools", -1)),
            _cache[31] || (_cache[31] = _createTextVNode(". If you need more resources, we suggest paying ")),
            _cache[32] || (_cache[32] = _createElementVNode("a", {
              href: "https://github.com/vuejs/awesome-vue",
              target: "_blank",
              rel: "noopener"
            }, "Awesome Vue", -1)),
            _cache[33] || (_cache[33] = _createTextVNode(" a visit. "))
          ]),
          _: 1,
          __: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
        }),
        _createVNode$1(WelcomeItem, null, {
          icon: _withCtx(() => [
            _createVNode$1(CommunityIcon)
          ]),
          heading: _withCtx(() => _cache[34] || (_cache[34] = [
            _createTextVNode("Community")
          ])),
          default: _withCtx(() => [
            _cache[35] || (_cache[35] = _createTextVNode(" Got stuck? Ask your question on ")),
            _cache[36] || (_cache[36] = _createElementVNode("a", {
              href: "https://chat.vuejs.org",
              target: "_blank",
              rel: "noopener"
            }, "Vue Land", -1)),
            _cache[37] || (_cache[37] = _createTextVNode(" (our official Discord server), or ")),
            _cache[38] || (_cache[38] = _createElementVNode("a", {
              href: "https://stackoverflow.com/questions/tagged/vue.js",
              target: "_blank",
              rel: "noopener"
            }, "StackOverflow", -1)),
            _cache[39] || (_cache[39] = _createTextVNode(". You should also follow the official ")),
            _cache[40] || (_cache[40] = _createElementVNode("a", {
              href: "https://bsky.app/profile/vuejs.org",
              target: "_blank",
              rel: "noopener"
            }, "@vuejs.org", -1)),
            _cache[41] || (_cache[41] = _createTextVNode(" Bluesky account or the ")),
            _cache[42] || (_cache[42] = _createElementVNode("a", {
              href: "https://x.com/vuejs",
              target: "_blank",
              rel: "noopener"
            }, "@vuejs", -1)),
            _cache[43] || (_cache[43] = _createTextVNode(" X account for latest news in the Vue world. "))
          ]),
          _: 1,
          __: [35, 36, 37, 38, 39, 40, 41, 42, 43]
        }),
        _createVNode$1(WelcomeItem, null, {
          icon: _withCtx(() => [
            _createVNode$1(SupportIcon)
          ]),
          heading: _withCtx(() => _cache[44] || (_cache[44] = [
            _createTextVNode("Support Vue")
          ])),
          default: _withCtx(() => [
            _cache[45] || (_cache[45] = _createTextVNode(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ")),
            _cache[46] || (_cache[46] = _createElementVNode("a", {
              href: "https://vuejs.org/sponsor/",
              target: "_blank",
              rel: "noopener"
            }, "becoming a sponsor", -1)),
            _cache[47] || (_cache[47] = _createTextVNode(". "))
          ]),
          _: 1,
          __: [45, 46, 47]
        })
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "HomeView",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("main", null, [
        _createVNode(_sfc_main$1)
      ]);
    };
  }
});

const {createRouter,createWebHistory} = await importShared('vue-router');
const router = createRouter({
  history: createWebHistory("/vue-project/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: _sfc_main
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => __vitePreload(() => import('./AboutView-CDk0VQqm.js'),true              ?__vite__mapDeps([0,1,2]):void 0)
    }
  ]
});

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
