__d("WAFlowsImageCarousel.react", [
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsGet",
	"WAFlowsScrollable.react",
	"WDSNativeImageCarousel.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 3;
	function c(e) {
		var t, n = e.images.map(function(e) {
			var t;
			return babelHelpers.extends({}, e, { altText: (t = r("WAFlowsGet")(e, ["alt-text"])) != null ? t : e.altText });
		}), a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env, l = i.isRTL, u = i.platform;
		return s.jsx(o("WDSNativeImageCarousel.react").WDSNativeImageCarousel, babelHelpers.extends({ ScrollableComponent: r("WAFlowsScrollable.react") }, e, {
			images: n,
			aspectRatio: (t = e.aspectRatio) != null ? t : "4:3",
			platform: u,
			isRTL: l
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = "ImageCarousel", m = {
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			aspectRatio: {
				type: "string",
				enum: ["4:3", "16:9"]
			},
			images: {
				type: "array",
				minItems: 1,
				maxItems: u,
				items: {
					type: "object",
					properties: {
						src: { type: "string" },
						"alt-text": { type: "string" }
					},
					required: ["src", "alt-text"],
					additionalProperties: !1
				}
			},
			scaleType: { enum: [
				"cover",
				"contain",
				"stretch"
			] },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["images", "isSoftValidationMode"],
		additionalProperties: !1
	};
	l.WAFLOWS_IMAGE_CAROUSEL_MAX_IMAGES = u, l.WAFlowsImageCarousel = c, l.TYPE = d, l.SCHEMA = m;
}), 98);
