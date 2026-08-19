__d("WAWebVoipGroupCallPaginationControls.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 2, d = { pageNumberHidden: {
		visibility: "xlshs6z",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e.displayPage, a = e.hidden, i = e.totalPages, l = a === void 0 ? !1 : a;
		if (i <= c) return null;
		var m = l ? d.pageNumberHidden : void 0, p;
		t[0] !== n || t[1] !== i ? (p = s._(
			/*BTDS*/
			"",
			[s._param("displayPage", n, [0]), s._param("totalPages", i, [0])]
		), t[0] = n, t[1] = i, t[2] = p) : p = t[2];
		var _;
		return t[3] !== m || t[4] !== p ? (_ = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			selectable: !1,
			xstyle: m,
			children: p
		}), t[3] = m, t[4] = p, t[5] = _) : _ = t[5], _;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(18), n = e.currentPage, a = e.onPrevPage, i = e.size, l = e.totalPages, c = e.xstyle, d = i === void 0 ? "small" : i, p = r("useWAWebVoipWindowPopoutTooltipProps")(), _ = p.tooltipAnchorRef, f = p.tooltipOwnerDocument;
		if (l <= 1) return null;
		var g = n === 0, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[0] = h) : h = t[0];
		var y = h, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x3nfvp2 xdt5ytf x6s0dn4 x129bwdz" }, t[1] = C) : C = t[1];
		var b;
		t[2] !== g || t[3] !== a || t[4] !== d || t[5] !== c ? (b = u.jsx(r("WDSButton.react"), {
			disabled: g,
			directional: !0,
			Icon: r("WDSIconIcChevronLeft.react"),
			onPress: a,
			size: d,
			type: "media",
			variant: "filled",
			xstyle: c,
			"aria-label": y
		}), t[2] = g, t[3] = a, t[4] = d, t[5] = c, t[6] = b) : b = t[6];
		var v;
		t[7] !== b || t[8] !== _ || t[9] !== f ? (v = u.jsx(r("WDSTooltip.react"), {
			label: y,
			ownerAnchorRef: _,
			ownerDocument: f,
			children: b
		}), t[7] = b, t[8] = _, t[9] = f, t[10] = v) : v = t[10];
		var S;
		t[11] !== n || t[12] !== g || t[13] !== l ? (S = u.jsx(m, {
			displayPage: n,
			hidden: g,
			totalPages: l
		}), t[11] = n, t[12] = g, t[13] = l, t[14] = S) : S = t[14];
		var R;
		return t[15] !== v || t[16] !== S ? (R = u.jsxs("div", babelHelpers.extends({}, C, { children: [v, S] })), t[15] = v, t[16] = S, t[17] = R) : R = t[17], R;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(18), n = e.currentPage, a = e.onNextPage, i = e.size, l = e.totalPages, c = e.xstyle, d = i === void 0 ? "small" : i, p = r("useWAWebVoipWindowPopoutTooltipProps")(), _ = p.tooltipAnchorRef, f = p.tooltipOwnerDocument;
		if (l <= 1) return null;
		var g = n === l - 1, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[0] = h) : h = t[0];
		var y = h, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x3nfvp2 xdt5ytf x6s0dn4 x129bwdz" }, t[1] = C) : C = t[1];
		var b;
		t[2] !== g || t[3] !== a || t[4] !== d || t[5] !== c ? (b = u.jsx(r("WDSButton.react"), {
			disabled: g,
			directional: !0,
			Icon: r("WDSIconIcChevronRight.react"),
			onPress: a,
			size: d,
			type: "media",
			variant: "filled",
			xstyle: c,
			"aria-label": y
		}), t[2] = g, t[3] = a, t[4] = d, t[5] = c, t[6] = b) : b = t[6];
		var v;
		t[7] !== b || t[8] !== _ || t[9] !== f ? (v = u.jsx(r("WDSTooltip.react"), {
			label: y,
			ownerAnchorRef: _,
			ownerDocument: f,
			children: b
		}), t[7] = b, t[8] = _, t[9] = f, t[10] = v) : v = t[10];
		var S = n + 2, R;
		t[11] !== g || t[12] !== S || t[13] !== l ? (R = u.jsx(m, {
			displayPage: S,
			hidden: g,
			totalPages: l
		}), t[11] = g, t[12] = S, t[13] = l, t[14] = R) : R = t[14];
		var L;
		return t[15] !== v || t[16] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, C, { children: [v, R] })), t[15] = v, t[16] = R, t[17] = L) : L = t[17], L;
	}
	l.WAWebVoipGroupCallPrevPageButton = p, l.WAWebVoipGroupCallNextPageButton = _;
}), 226);
