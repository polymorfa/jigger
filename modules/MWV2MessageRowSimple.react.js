__d("MWV2MessageRowSimple.react", [
	"FocusWithinHandler.react",
	"MWEditMessageOverlay.react",
	"MWMessageTableFocusTable.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useMAWEditMessageData",
	"useMWPEditMessageDeemphasizer"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = {
		row: {
			position: "x1n2onr6",
			$$css: !0
		},
		rowFocusVisible: {
			zIndex: "x1vjfegm",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(12), a = t.children, i = t.domElementRef, l = t.focusCellOnRender, s = l === void 0 ? !1 : l, c = r("useMAWEditMessageData")(), _ = c != null, f = r("useMWPEditMessageDeemphasizer")(), g = m(null), h, y;
		n[0] !== s ? (h = function() {
			if (s) {
				var e, t;
				(e = g.current) == null || e.focus(), (t = g.current) == null || t.scrollIntoView();
			}
		}, y = [s], n[0] = s, n[1] = h, n[2] = y) : (h = n[1], y = n[2]), d(h, y);
		var C;
		n[3] !== f ? (C = (e || (e = r("stylex"))).props(f), n[3] = f, n[4] = C) : C = n[4];
		var b;
		n[5] !== a || n[6] !== _ ? (b = u.jsx(o("MWMessageTableFocusTable.react").FocusTable[2], { children: u.jsx(r("FocusWithinHandler.react"), { children: function(n, i) {
			return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.row, i ? p.rowFocusVisible : !1), {
				"data-release-focus-from": "CLICK",
				"data-scope": o("MWMessageTableFocusTable.react").scopeID,
				ref: g,
				tabIndex: _ ? -1 : 0,
				children: [a, u.jsx(r("MWEditMessageOverlay.react"), {})]
			}));
		} }) }), n[5] = a, n[6] = _, n[7] = b) : b = n[7];
		var v;
		return n[8] !== i || n[9] !== C || n[10] !== b ? (v = u.jsx(o("MWMessageTableFocusTable.react").FocusTable[1], { children: u.jsx("div", babelHelpers.extends({}, C, {
			ref: i,
			role: "none",
			children: b
		})) }), n[8] = i, n[9] = C, n[10] = b, n[11] = v) : v = n[11], v;
	}
	l.default = _;
}), 98);
