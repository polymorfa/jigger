__d("WAWebMediaStateControlDownload.react", [
	"WAWebL10nFilesize",
	"WAWebMediaStateControlSharedStyles",
	"WDSIconIcDownload.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef;
	function p(t) {
		var n = o("react-compiler-runtime").c(18), a = t.filesize, i = t.onClick, l = t.ref, s = t.tabIndex, c = a === void 0 ? 0 : a, p = s === void 0 ? 0 : s, _ = m(), f;
		if (n[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			return { getElement: function() {
				return _.current;
			} };
		}, n[0] = f) : f = n[0], d(l, f), c > 0) {
			var g;
			n[1] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), n[1] = g) : g = n[1];
			var h;
			n[2] === Symbol.for("react.memo_cache_sentinel") ? (h = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").btnMeta, r("WAWebMediaStateControlSharedStyles").cursorPointer), n[2] = h) : h = n[2];
			var y;
			n[3] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSIconIcDownload.react"), { xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta }), n[3] = y) : y = n[3];
			var C;
			n[4] !== c ? (C = o("WAWebL10nFilesize").getL10nFilesize(c), n[4] = c, n[5] = C) : C = n[5];
			var b;
			n[6] !== C ? (b = u.jsx("span", { children: C }), n[6] = C, n[7] = b) : b = n[7];
			var v;
			return n[8] !== i || n[9] !== b || n[10] !== p ? (v = u.jsx("div", babelHelpers.extends({ ref: _ }, g, {
				"data-testid": "media-state-download",
				children: u.jsxs("button", babelHelpers.extends({ tabIndex: p }, h, {
					onClick: i,
					children: [y, b]
				}))
			})), n[8] = i, n[9] = b, n[10] = p, n[11] = v) : v = n[11], v;
		}
		var S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").controls), n[12] = S) : S = n[12];
		var R;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (R = (e || (e = r("stylex"))).props(r("WAWebMediaStateControlSharedStyles").button, r("WAWebMediaStateControlSharedStyles").cursorPointer), n[13] = R) : R = n[13];
		var L;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSIconIcDownload.react"), {}), n[14] = L) : L = n[14];
		var E;
		return n[15] !== i || n[16] !== p ? (E = u.jsx("div", babelHelpers.extends({ ref: _ }, S, {
			"data-testid": "media-state-download",
			children: u.jsx("button", babelHelpers.extends({ tabIndex: p }, R, {
				onClick: i,
				children: L
			}))
		})), n[15] = i, n[16] = p, n[17] = E) : E = n[17], E;
	}
	l.default = p;
}), 98);
