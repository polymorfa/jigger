__d("WAFlowsEmbeddedLink.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEmbeddedLinkFC.react",
	"WAFlowsEnvContext.react",
	"WAFlowsWELJUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["text"], s, u = s || (s = o("react"));
	function c(t) {
		var n = t.text, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o("WAFlowsEnvContext.react").useWAFlowsEnv().env.platform;
		return u.jsx(o("WAFlowsEmbeddedLinkFC.react").WAFlowsEmbeddedLinkFC, babelHelpers.extends({
			text: n,
			platform: a
		}, r));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = "EmbeddedLink", m = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			text: {
				type: "string",
				minLength: 1
			},
			visible: { type: "boolean" },
			onClick: {
				instanceof: "Function",
				properties: {
					name: { type: "string" },
					payload: { type: "object" }
				},
				required: ["name", "payload"]
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["text", "onClick"]
	}, o("WAFlowsWELJUtils").getSoftValidation([{
		prop: "text",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").EMBEDDED_LINK_MAX_LENGTH
	}]), { additionalProperties: !1 });
	l.WAFlowsEmbeddedLink = c, l.TYPE = d, l.SCHEMA = m;
}), 98);
