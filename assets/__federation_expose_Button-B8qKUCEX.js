import { importShared } from './__federation_fn_import-CaJbCybZ.js';
import { _export_sfc } from './_plugin-vue_export-helper-8ijppmbV.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {renderSlot:_renderSlot,normalizeClass:_normalizeClass,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "FederationButton"
  },
  __name: "Button",
  props: {
    type: {},
    size: {}
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("button", {
        class: _normalizeClass(["federation-button", [_ctx.type, _ctx.size]]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});

const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4aade69"]]);

export { Button as default };
