__d("WAFlowsText.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsRichText.react",
	"WAFlowsWELJUtils",
	"WDSNativeResponsiveWrapper.react",
	"filterObject",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"data-testid",
		"display",
		"fontWeight",
		"lineheight",
		"maxLines",
		"strikethrough",
		"tag",
		"text",
		"textAlign",
		"type",
		"xstyle"
	], s, u, c = u || (u = o("react")), d = {
		start: "left",
		center: "center",
		end: "right"
	}, m = {
		heading: "h1",
		subheading: "h2",
		body: "p",
		"body-2": "p",
		"body-small": "p",
		"body-subtitle": "p",
		caption: "p"
	}, p = { text: {
		whiteSpace: "x126k92a",
		overflowWrap: "xj0a0fe",
		$$css: !0
	} }, _ = {
		heading: {
			fontWeight: "x1irvuf2",
			fontSize: "xdp7e5e",
			fontFamily: "xd0pvjn",
			lineHeight: "x1v2y4xr",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "x1ebhnzs",
			$$css: !0
		},
		subheading: {
			fontWeight: "x1xq4eza",
			fontSize: "x1f21by1",
			fontFamily: "x128sirl",
			lineHeight: "x3rfehz",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "xda9baz",
			$$css: !0
		},
		body: {
			fontWeight: "x10vqnp0",
			fontSize: "x197yli1",
			fontFamily: "x8t4l1e",
			lineHeight: "x193rm8m",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "x11xsogm",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		"body-2": {
			fontWeight: "x10vqnp0",
			fontSize: "x187uvkv",
			fontFamily: "x8t4l1e",
			lineHeight: "xx66zjs",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "x1g4lutg",
			$$css: !0
		},
		"body-small": {
			fontWeight: "x10vqnp0",
			fontSize: "x16lw3ta",
			fontFamily: "x8t4l1e",
			lineHeight: "x1o9prue",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "xj96hs2",
			$$css: !0
		},
		"body-subtitle": {
			fontWeight: "x10vqnp0",
			fontSize: "x1ygijvp",
			fontFamily: "x8t4l1e",
			lineHeight: "x1m59w3q",
			textAlign: "xdpxx8g",
			color: "x14ug900",
			letterSpacing: "xj96hs2",
			$$css: !0
		},
		caption: {
			fontWeight: "x10vqnp0",
			fontSize: "xsums3z",
			fontFamily: "x8t4l1e",
			lineHeight: "x1qfl8hi",
			textAlign: "xdpxx8g",
			color: "xhslqc4",
			letterSpacing: "xi8r2on",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.children, a = t["data-testid"], i = t.display, l = t.fontWeight, u = t.lineheight, f = t.maxLines, g = t.strikethrough, h = g === void 0 ? !1 : g, y = t.tag, C = t.text, b = t.textAlign, v = t.type, S = t.xstyle, R = babelHelpers.objectWithoutPropertiesLoose(t, e), L = y != null ? y : m[v], E = _[v], k = l === "italic" || l === "bold_italic", I = r("filterObject")(babelHelpers.extends({
			fontWeight: l != null ? "var(--waf-wds-text-font-weight-" + l + ")" : void 0,
			textAlign: b != null ? d[b] : "start",
			display: i != null ? i : void 0,
			textDecoration: h ? "line-through" : void 0,
			direction: "auto",
			fontStyle: k ? "italic" : void 0
		}, f != null ? {
			WebkitLineClamp: f,
			WebkitBoxOrient: "vertical",
			display: i != null ? i : "-webkit-box",
			overflow: "hidden"
		} : {}), function(e) {
			return e != null;
		});
		return c.jsx(o("WDSNativeResponsiveWrapper.react").WDSNativeResponsiveWrapper, {
			type: v,
			children: c.jsx(L, babelHelpers.extends({}, R, {
				style: I,
				className: (s || (s = r("stylex")))(E, p.text, S),
				"data-testid": void 0,
				dir: "auto",
				children: n != null ? n : C
			}))
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e["data-testid"], n = e.testingid, r = n === void 0 ? "" : n, a = e.text, i = e.textAlign, l = e.xstyle, s = o("WAFlowsEnvContext.react").useWAFlowsEnv(), u = s.env;
		return c.jsx(f, {
			xstyle: l,
			textAlign: i,
			testingid: r,
			type: "heading",
			text: a,
			"data-testid": void 0,
			maxLines: u.platform === "android" ? o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_HEADING_ANDROID : o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_HEADING_IOS
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e["data-testid"], n = e.testingid, r = n === void 0 ? "" : n, a = e.text, i = e.xstyle;
		return c.jsx(f, {
			xstyle: i,
			testingid: r,
			type: "subheading",
			text: a,
			"data-testid": void 0,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_SUBHEADING
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e["data-testid"], n = e.display, r = e.fontWeight, a = e.isFlowInDraft, i = a === void 0 ? !1 : a, l = e.markdown, s = l === void 0 ? !1 : l, u = e.strikethrough, d = e.testingid, m = e.text, p = e.textAlign, _ = e.xstyle, g = Array.isArray(m) ? m.join("\n") : m != null ? m : "";
		return s === !0 ? c.jsx(f, {
			tag: "div",
			type: "body",
			testingid: d,
			xstyle: _,
			children: c.jsx(o("WAFlowsRichText.react").WAFlowsRichText, {
				isFlowInDraft: i,
				type: "body",
				text: g
			})
		}) : c.jsx(f, {
			textAlign: p,
			display: n,
			fontWeight: r,
			testingid: d,
			strikethrough: u,
			xstyle: _,
			type: "body",
			text: g,
			"data-testid": void 0,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_BODY
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e["data-testid"], n = e.fontWeight, r = e.strikethrough, o = e.testingid, a = o === void 0 ? "" : o, i = e.text, l = e.textAlign, s = e.xstyle;
		return c.jsx(f, {
			textAlign: l,
			fontWeight: n,
			testingid: a,
			strikethrough: r,
			xstyle: s,
			type: "body-small",
			text: i,
			"data-testid": void 0
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e["data-testid"], n = e.fontWeight, r = e.isFlowInDraft, a = r === void 0 ? !1 : r, i = e.markdown, l = i === void 0 ? !1 : i, s = e.strikethrough, u = e.testingid, d = u === void 0 ? "" : u, m = e.text, p = e.textAlign, _ = e.xstyle, g = Array.isArray(m) ? m.join("\n") : m != null ? m : "";
		return l === !0 ? c.jsx(f, {
			tag: "div",
			type: "caption",
			strikethrough: s,
			textAlign: p,
			testingid: d,
			"data-testid": void 0,
			xstyle: _,
			children: c.jsx(o("WAFlowsRichText.react").WAFlowsRichText, {
				isFlowInDraft: a,
				type: "caption",
				text: g
			})
		}) : c.jsx(f, {
			fontWeight: n,
			strikethrough: s,
			testingid: d,
			xstyle: _,
			textAlign: p,
			type: "caption",
			text: g,
			"data-testid": void 0,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_CAPTION
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = "TextHeading", S = babelHelpers.extends({
		type: "object",
		required: ["text", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getSoftValidation([{
		prop: "text",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_HEADING_MAX_LENGTH
	}]), {
		additionalProperties: !1,
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			text: { type: "string" },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}), R = "TextSubheading", L = babelHelpers.extends({
		type: "object",
		required: ["text", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getSoftValidation([{
		prop: "text",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_SUBHEADING_MAX_LENGTH
	}]), {
		additionalProperties: !1,
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			text: { type: "string" },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}), E = "TextBody", k = babelHelpers.extends({
		type: "object",
		required: ["text", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getSoftValidation([{
		prop: "text",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_BODY_MAX_LENGTH
	}]), {
		additionalProperties: !1,
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			text: { oneOf: [{ type: "string" }, {
				type: "array",
				items: { type: "string" }
			}] },
			strikethrough: { type: "boolean" },
			fontWeight: { enum: [
				"bold",
				"italic",
				"bold_italic",
				"normal"
			] },
			visible: { type: "boolean" },
			markdown: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties)
	}), I = "TextCaption", T = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			text: { oneOf: [{ type: "string" }, {
				type: "array",
				items: { type: "string" }
			}] },
			markdown: { type: "boolean" },
			strikethrough: { type: "boolean" },
			fontWeight: { enum: [
				"bold",
				"italic",
				"bold_italic",
				"normal"
			] },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: ["text", "isSoftValidationMode"]
	}, o("WAFlowsWELJUtils").getSoftValidation([{
		prop: "text",
		keyword: "maxLength",
		value: o("WAFlowsComponentConstants").TEXT_CAPTION_MAX_LENGTH
	}]), { additionalProperties: !1 });
	l.WAFlowsText = f, l.WAFlowsTextBody = y, l.WAFlowsTextBodySmall = C, l.WAFlowsTextCaption = b, l.WAFlowsTextSubheading = h, l.WAFlowsTextHeading = g, l.TEXT_HEADING_TYPE = v, l.TEXT_HEADING_SCHEMA = S, l.TEXT_SUBHEADING_TYPE = R, l.TEXT_SUBHEADING_SCHEMA = L, l.TEXT_BODY_TYPE = E, l.TEXT_BODY_SCHEMA = k, l.TEXT_CAPTION_TYPE = I, l.TEXT_CAPTION_SCHEMA = T;
}), 98);
