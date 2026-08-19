__d("WAWebListIconStacked.react", [
	"WAWebLabelCollection",
	"WAWebListUtils",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = 2, d = 12, m = 9, p = { container: {
		display: "x3nfvp2",
		alignItems: "x6s0dn4",
		position: "x1n2onr6",
		flexShrink: "x2lah0s",
		$$css: !0
	} };
	function _(t) {
		var n = o("react-compiler-runtime").c(37), a = t.horizontalOffset, i = t.labelIds, l = t.size, s = t.xstyle, _ = a === void 0 ? m : a, g = l === void 0 ? d : l;
		if (i.length === 0) return null;
		var h, y;
		if (n[0] !== i) {
			y = Symbol.for("react.early_return_sentinel");
			e: {
				var C = f(i);
				if (C.length === 0) {
					y = null;
					break e;
				}
				h = C.slice(0, c);
			}
			n[0] = i, n[1] = h, n[2] = y;
		} else h = n[1], y = n[2];
		if (y !== Symbol.for("react.early_return_sentinel")) return y;
		var b = h, v = b.length === 1 ? g : g + (b.length - 1) * _;
		if (b.length === 1) {
			var S;
			n[3] !== s ? (S = (e || (e = r("stylex"))).props(p.container, s), n[3] = s, n[4] = S) : S = n[4];
			var R;
			n[5] !== g || n[6] !== v ? (R = {
				width: v,
				height: g
			}, n[5] = g, n[6] = v, n[7] = R) : R = n[7];
			var L;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo" }, n[8] = L) : L = n[8];
			var E;
			n[9] !== g || n[10] !== b[0] ? (E = u.jsx("span", babelHelpers.extends({}, L, { style: {
				backgroundColor: b[0],
				width: g,
				height: g,
				left: 0
			} })), n[9] = g, n[10] = b[0], n[11] = E) : E = n[11];
			var k;
			return n[12] !== S || n[13] !== R || n[14] !== E ? (k = u.jsx("span", babelHelpers.extends({ "data-testid": "list-icon-stacked" }, S, {
				style: R,
				children: E
			})), n[12] = S, n[13] = R, n[14] = E, n[15] = k) : k = n[15], k;
		}
		var I = g / 2 - _, T = g / 2, D = g / 2 + 2.5, x;
		n[16] !== s ? (x = (e || (e = r("stylex"))).props(p.container, s), n[16] = s, n[17] = x) : x = n[17];
		var $;
		n[18] !== g || n[19] !== v ? ($ = {
			width: v,
			height: g
		}, n[18] = g, n[19] = v, n[20] = $) : $ = n[20];
		var P;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk x1vjfegm" }, n[21] = P) : P = n[21];
		var N = "radial-gradient(circle at " + I + "px " + T + "px, transparent 0, transparent " + D + "px, black " + D + "px)", M = "radial-gradient(circle at " + I + "px " + T + "px, transparent 0, transparent " + D + "px, black " + D + "px)", w;
		n[22] !== _ || n[23] !== g || n[24] !== N || n[25] !== M || n[26] !== b[1] ? (w = u.jsx("span", babelHelpers.extends({}, P, { style: {
			backgroundColor: b[1],
			width: g,
			height: g,
			left: _,
			maskImage: N,
			WebkitMaskImage: M
		} })), n[22] = _, n[23] = g, n[24] = N, n[25] = M, n[26] = b[1], n[27] = w) : w = n[27];
		var A;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo" }, n[28] = A) : A = n[28];
		var F;
		n[29] !== g || n[30] !== b[0] ? (F = u.jsx("span", babelHelpers.extends({}, A, { style: {
			backgroundColor: b[0],
			width: g,
			height: g,
			left: 0
		} })), n[29] = g, n[30] = b[0], n[31] = F) : F = n[31];
		var O;
		return n[32] !== w || n[33] !== F || n[34] !== x || n[35] !== $ ? (O = u.jsxs("span", babelHelpers.extends({ "data-testid": "list-icon-stacked" }, x, {
			style: $,
			children: [w, F]
		})), n[32] = w, n[33] = F, n[34] = x, n[35] = $, n[36] = O) : O = n[36], O;
	}
	function f(e) {
		var t = [].concat(e).filter(function(e) {
			return !Number.isNaN(parseInt(e, 10));
		}).sort(function(e, t) {
			return parseInt(t, 10) - parseInt(e, 10);
		}), n = t.length >= c ? t : e, r = [];
		for (var a of n) {
			if (r.length >= c) break;
			var i = o("WAWebLabelCollection").LabelCollection.get(a);
			if (i != null) {
				var l = i.colorIndex != null ? o("WAWebListUtils").colorIndexToHex(i.colorIndex) : i.color;
				l != null && r.push(l);
			}
		}
		return r;
	}
	l.default = _;
}), 98);
