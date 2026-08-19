__d("WAWebLexicalTypeAheadList.react", [
	"ReactDOM",
	"WAWebPortalThemeWrapper.react",
	"WAWebUnstyledButton.react",
	"react",
	"react-compiler-runtime",
	"sumBy",
	"useWAWebLexicalTypeAheadContainer",
	"useWAWebLexicalTypeAheadKeyboardNavigation"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} }, _ = 10, f = { itemsContainer: {
		display: "x78zum5",
		height: "x5yr21d",
		width: "xh8yej3",
		overflowX: "x6ikm8r",
		overflowY: "x1odjw0f",
		flexDirection: "xdt5ytf",
		backgroundColor: "x1280gxy",
		boxShadow: "xvh3i5d",
		boxSizing: "x9f619",
		borderStartStartRadius: "x6nvzda",
		borderStartEndRadius: "x4i4b9w",
		borderEndEndRadius: "xhl9efl",
		borderEndStartRadius: "xj65ea0",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(29), n = e.anchorElRef, a = e.items, i = e.leadOffset, l = e.maxVisibleItems, u = e.onCancel, d = e.startingIndex, g = l === void 0 ? 7 : l, b = d === void 0 ? 0 : d, v;
		t[0] !== a || t[1] !== g ? (v = r("sumBy")(a.slice(0, g), C), t[0] = a, t[1] = g, t[2] = v) : v = t[2];
		var S = v, R = S + _ * 2, L = a.reduce(y, 0), E = a.length === 0 ? 0 : L + _ * 2, k = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(i, E, R, n), I = k.containerEle, T = k.hideContainer, D;
		t[3] !== T || t[4] !== u ? (D = {
			onSelect: h,
			onCancel: function() {
				T(), u();
			}
		}, t[3] = T, t[4] = u, t[5] = D) : D = t[5];
		var x = o("useWAWebLexicalTypeAheadKeyboardNavigation").useLexicalTypeAheadKeyboardNavigation(a, b, "column", D), $ = x.activeIndex, P = x.setActiveIndex, N = m(null), M;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			var e;
			(e = N.current) == null || e.scrollIntoView({ block: "nearest" });
		}, t[6] = M) : M = t[6];
		var w;
		if (t[7] !== $ ? (w = [$], t[7] = $, t[8] = w) : w = t[8], c(M, w), a.length !== 0) {
			var A;
			t[9] !== $ || t[10] !== a || t[11] !== P ? (A = a.map(function(e, t) {
				return s.jsx(r("WAWebUnstyledButton.react"), {
					ref: function(n) {
						t === $ && (N.current = n);
					},
					onClick: function() {
						e.onSelect();
					},
					onMouseEnter: function() {
						P(t);
					},
					children: e.renderFn(t === $)
				}, t);
			}), t[9] = $, t[10] = a, t[11] = P, t[12] = A) : A = t[12];
			var F = A, O, B, W, q;
			if (t[13] !== T) {
				var U = [f.itemsContainer, p.padding10];
				B = o("ReactDOM").createPortal, O = r("WAWebPortalThemeWrapper.react"), W = T, q = { className: "x78zum5 x5yr21d xh8yej3 x6ikm8r x1odjw0f xdt5ytf x1280gxy xvh3i5d x9f619 x6nvzda x4i4b9w xhl9efl xj65ea0 x889kno x2vl965 x1a8lsjc xe2zdcy" }, t[13] = T, t[14] = O, t[15] = B, t[16] = W, t[17] = q;
			} else O = t[14], B = t[15], W = t[16], q = t[17];
			var V;
			t[18] !== F || t[19] !== W || t[20] !== q ? (V = s.jsx("div", babelHelpers.extends({ onClick: W }, q, { children: F })), t[18] = F, t[19] = W, t[20] = q, t[21] = V) : V = t[21];
			var H;
			t[22] !== O || t[23] !== V ? (H = s.jsx(O, { children: V }), t[22] = O, t[23] = V, t[24] = H) : H = t[24];
			var G;
			return t[25] !== I || t[26] !== B || t[27] !== H ? (G = B(H, I), t[25] = I, t[26] = B, t[27] = H, t[28] = G) : G = t[28], G;
		}
	}
	function h(e) {
		e.onSelect();
	}
	function y(e, t) {
		return Math.max(e, t.width);
	}
	function C(e) {
		return e.height;
	}
	l.default = g;
}), 98);
