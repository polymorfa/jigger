__d("WAWebLexicalTypeAheadRow.react", [
	"ReactDOM",
	"WAWebAccessibility.react",
	"WAWebPortalThemeWrapper.react",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime",
	"useWAWebLexicalTypeAheadContainer",
	"useWAWebLexicalTypeAheadKeyboardNavigation"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} }, _ = 10, f = 7, g = { itemsContainer: {
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		backgroundColor: "x1311tq3",
		boxShadow: "xvh3i5d",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		overflowX: "x14aock7",
		$$css: !0
	} };
	function h(e) {
		var t = o("react-compiler-runtime").c(33), n = e.itemHeight, a = e.items, i = e.itemWidth, l = e.leadOffset, u = e.onCancel, d = a.length, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = [], t[0] = h) : h = t[0];
		var C = m(h), b;
		e: {
			if (d > f) {
				var v = i / 2 + _;
				b = i * f - v + _ * 2;
				break e;
			}
			b = i * d + _ * 2;
		}
		var S = b, R = a.length === 0 ? 0 : S, L = n + _ * 2, E = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(l, R, L), k = E.containerEle, I = E.hideContainer, T;
		t[1] !== I || t[2] !== u ? (T = {
			onSelect: y,
			onCancel: function() {
				I(), u();
			}
		}, t[1] = I, t[2] = u, t[3] = T) : T = t[3];
		var D = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(a, 0, "row", T), x = D.activeIndex, $ = D.setActiveIndex, P, N;
		t[4] !== x ? (P = function() {
			var e = C.current[x];
			e && e.scrollIntoView();
		}, N = [x], t[4] = x, t[5] = P, t[6] = N) : (P = t[5], N = t[6]), c(P, N);
		var M;
		t[7] !== x || t[8] !== a || t[9] !== $ ? (M = a.map(function(e, t) {
			return s.jsx(r("WAWebUnstyledButton.react"), {
				ref: function(n) {
					return C.current[t] = n;
				},
				"aria-label": e.ariaLabel,
				onClick: function(n) {
					n.preventDefault(), n.stopPropagation(), e.onSelect();
				},
				onMouseEnter: function() {
					$(t);
				},
				children: e.renderFn(t === x)
			}, t);
		}), t[7] = x, t[8] = a, t[9] = $, t[10] = M) : M = t[10];
		var w = M;
		if (w.length === 0) return null;
		var A, F, O, B, W;
		if (t[11] !== x || t[12] !== I || t[13] !== a) {
			var q, U = [g.itemsContainer, p.padding10], V = a[x];
			F = (q = V == null ? void 0 : V.ariaLabel) != null ? q : "", W = o("ReactDOM").createPortal, A = r("WAWebPortalThemeWrapper.react"), O = I, B = { className: "x78zum5 x1q0g3np x1311tq3 xvh3i5d x6nvzda x4i4b9w xhl9efl xj65ea0 x14aock7 x889kno x2vl965 x1a8lsjc xe2zdcy" }, t[11] = x, t[12] = I, t[13] = a, t[14] = A, t[15] = F, t[16] = O, t[17] = B, t[18] = W;
		} else A = t[14], F = t[15], O = t[16], B = t[17], W = t[18];
		var H;
		t[19] !== F ? (H = s.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
			text: F,
			assertive: !0
		}), t[19] = F, t[20] = H) : H = t[20];
		var G;
		t[21] !== w || t[22] !== H || t[23] !== O || t[24] !== B ? (G = s.jsxs("div", babelHelpers.extends({ onClick: O }, B, { children: [w, H] })), t[21] = w, t[22] = H, t[23] = O, t[24] = B, t[25] = G) : G = t[25];
		var z;
		t[26] !== A || t[27] !== G ? (z = s.jsx(A, { children: G }), t[26] = A, t[27] = G, t[28] = z) : z = t[28];
		var j;
		return t[29] !== k || t[30] !== z || t[31] !== W ? (j = W(z, k), t[29] = k, t[30] = z, t[31] = W, t[32] = j) : j = t[32], j;
	}
	function y(e) {
		e.onSelect();
	}
	l.default = h;
}), 98);
