__d("WAFlowsImage.react", [
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"WDSNativeImage.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env;
		return s.jsx(o("WDSNativeImage.react").WDSNativeImage, babelHelpers.extends({}, e, { platform: n.platform }));
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = "Image", d = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			width: { type: "number" },
			height: { type: "number" },
			aspectRatio: { type: "number" },
			src: { type: "string" },
			scaleType: { enum: [
				"cover",
				"contain",
				"stretch"
			] },
			altText: { type: "string" },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["src", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getSoftValidation([], [o("WAFlowsValidationConstants").IMAGE_SIZE_IS_UNDER_300KB]), { additionalProperties: !1 });
	l.WAFlowsImage = u, l.TYPE = c, l.SCHEMA = d;
}), 98);
