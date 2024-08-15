var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var keystone_default = (0, import_core.config)({
  db: {
    provider: "postgresql",
    url: "postgresql://keystone_owner:Blfr2KwHu1tG@ep-solitary-breeze-a1prsw6a.ap-southeast-1.aws.neon.tech/keystone?sslmode=require"
  },
  lists: {
    User: (0, import_core.list)({
      access: import_access.allowAll,
      fields: {
        name: (0, import_fields.text)({ validation: { isRequired: true } }),
        email: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique" })
      }
    })
  }
});
//# sourceMappingURL=config.js.map
