__d("WAWebBizInlineValidationNotice.react", [
	"WAWebFlex.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcError.react",
	"WDSIconIcInfo.react",
	"WDSIconIcWarning.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"useWAWebBizNoticeCTAHandler"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		columnGap: "x1s70e7g",
		$$css: !0
	} }, c = {
		error: {
			color: "x30a034",
			$$css: !0
		},
		success: {
			color: "xhslqc4",
			$$css: !0
		},
		tip: {
			color: "xhslqc4",
			$$css: !0
		},
		warning: {
			color: "x1f81s73",
			$$css: !0
		}
	}, d = 16, m = {
		error: r("WDSIconIcError.react"),
		success: r("WDSIconIcCheckCircle.react"),
		tip: r("WDSIconIcInfo.react"),
		warning: r("WDSIconIcWarning.react")
	}, p = {
		error: "secondaryNegative",
		success: "contentDeemphasized",
		tip: "contentDeemphasized",
		warning: "contentDeemphasized"
	};
	function _(e) {
		var t = e.cta, n = e.message, a = e.onActionOverride, i = e.type, l = i === void 0 ? "error" : i, _ = m[l], f = p[l], g = r("useWAWebBizNoticeCTAHandler")(t, a);
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: u.container,
			children: [s.jsx(_, {
				height: d,
				width: d,
				xstyle: c[l]
			}), s.jsxs(r("WDSText.react"), {
				type: "Body2",
				colorName: f,
				children: [n, t != null ? s.jsxs(s.Fragment, { children: [" ", s.jsx(r("WDSTextualLink.react"), {
					onClick: g,
					children: t.label
				})] }) : null]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
