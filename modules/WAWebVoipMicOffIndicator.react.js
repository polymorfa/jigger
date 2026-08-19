__d("WAWebVoipMicOffIndicator.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSIconIcMicOffFilled.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		wrapper: {
			position: "x10l6tqk",
			zIndex: "x1u8a7rm",
			insetInlineStart: "x4brfc7",
			left: null,
			right: null,
			top: "xugynej",
			$$css: !0
		},
		wrapperInset: {
			insetInlineStart: "xxrlk4x",
			left: null,
			right: null,
			top: "xymx5cc",
			$$css: !0
		},
		badge: {
			backgroundColor: "x1rk1j4g",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x17t9dm2",
			lineHeight: "x14ju556",
			$$css: !0
		},
		small: {
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		medium: {
			width: "x1td3qas x154bzus",
			height: "x10w6t97 x1amrg0d",
			$$css: !0
		},
		large: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			$$css: !0
		}
	}, d = {
		small: 14,
		medium: 20,
		large: 24
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(17), n = e.inset, a = e.size, i = a === void 0 ? "medium" : a, l = d[i], m = r("useWAWebVoipWindowPopoutTooltipProps")(), p = m.tooltipAnchorRef, _ = m.tooltipOwnerDocument, f;
		t[0] !== n ? (f = {
			0: { className: "x10l6tqk x1u8a7rm x4brfc7 xugynej" },
			1: { className: "x10l6tqk x1u8a7rm xxrlk4x xymx5cc" }
		}[(n === !0) << 0], t[0] = n, t[1] = f) : f = t[1];
		var g;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[2] = g) : g = t[2];
		var h = c[i], y;
		t[3] !== h ? (y = [c.badge, h], t[3] = h, t[4] = y) : y = t[4];
		var C;
		t[5] !== l ? (C = u.jsx(r("WDSIconIcMicOffFilled.react"), {
			height: l,
			width: l
		}), t[5] = l, t[6] = C) : C = t[6];
		var b;
		t[7] !== y || t[8] !== C ? (b = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			role: "status",
			"aria-label": "Microphone is muted",
			xstyle: y,
			children: C
		}), t[7] = y, t[8] = C, t[9] = b) : b = t[9];
		var v;
		t[10] !== b || t[11] !== p || t[12] !== _ ? (v = u.jsx(r("WDSTooltip.react"), {
			label: g,
			ownerAnchorRef: p,
			ownerDocument: _,
			children: b
		}), t[10] = b, t[11] = p, t[12] = _, t[13] = v) : v = t[13];
		var S;
		return t[14] !== f || t[15] !== v ? (S = u.jsx("div", babelHelpers.extends({}, f, { children: v })), t[14] = f, t[15] = v, t[16] = S) : S = t[16], S;
	}
	l.default = m;
}), 226);
