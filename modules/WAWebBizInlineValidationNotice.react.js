__d("WAWebBizInlineValidationNotice.react", [
	"WAWebFlex.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcError.react",
	"WDSIconIcInfo.react",
	"WDSIconIcWarning.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(13), n = e.cta, a = e.message, i = e.onActionOverride, l = e.type, _ = l === void 0 ? "error" : l, f = m[_], g = p[_], h = r("useWAWebBizNoticeCTAHandler")(n, i), y = c[_], C;
		t[0] !== f || t[1] !== y ? (C = s.jsx(f, {
			height: d,
			width: d,
			xstyle: y
		}), t[0] = f, t[1] = y, t[2] = C) : C = t[2];
		var b;
		t[3] !== n || t[4] !== h ? (b = n != null ? s.jsxs(s.Fragment, { children: [" ", s.jsx(r("WDSTextualLink.react"), {
			onClick: h,
			children: n.label
		})] }) : null, t[3] = n, t[4] = h, t[5] = b) : b = t[5];
		var v;
		t[6] !== g || t[7] !== a || t[8] !== b ? (v = s.jsxs(r("WDSText.react"), {
			type: "Body2",
			colorName: g,
			children: [a, b]
		}), t[6] = g, t[7] = a, t[8] = b, t[9] = v) : v = t[9];
		var S;
		return t[10] !== C || t[11] !== v ? (S = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: u.container,
			children: [C, v]
		}), t[10] = C, t[11] = v, t[12] = S) : S = t[12], S;
	}
	l.default = _;
}), 98);
