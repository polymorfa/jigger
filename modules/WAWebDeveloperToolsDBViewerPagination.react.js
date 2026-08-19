__d("WAWebDeveloperToolsDBViewerPagination.react", [
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcArrowForward.react",
	"err",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		container: {
			maxWidth: "x1j9u4d2",
			$$css: !0
		},
		largeContainer: {
			minWidth: "x13o0s5z",
			maxWidth: "x65f84u",
			$$css: !0
		},
		paginationWrapper: {
			width: "xh8yej3",
			maxHeight: "xkgu5aw",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	}, c = 5;
	function d(e) {
		var t = o("react-compiler-runtime").c(49), n = e.offset, a = e.onOffsetChange, i = e.rowCount, l;
		t[0] !== n || t[1] !== i ? (l = m(i, n), t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var c = l, d = c.canGoBack, p = c.canGoForward, _ = c.currentPage, f = c.endPage, g = c.startPage, h = c.totalPages, y = !d, C;
		t[3] !== n || t[4] !== a ? (C = function() {
			a(n - 1);
		}, t[3] = n, t[4] = a, t[5] = C) : C = t[5];
		var b;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = s.jsx(r("WDSIconIcArrowBack.react"), {}), t[6] = b) : b = t[6];
		var v;
		t[7] !== d || t[8] !== y || t[9] !== C ? (v = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			isActive: d,
			disabled: y,
			onClick: C,
			children: b
		}), t[7] = d, t[8] = y, t[9] = C, t[10] = v) : v = t[10];
		var S = v, R;
		if (t[11] !== _ || t[12] !== f || t[13] !== a || t[14] !== g) {
			var L;
			t[16] !== _ || t[17] !== a || t[18] !== g ? (L = function(t, n) {
				var e = g + n;
				return s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
					disabled: _ === e,
					isActive: _ === e,
					onClick: function() {
						a(e - 1);
					},
					children: e
				}, e);
			}, t[16] = _, t[17] = a, t[18] = g, t[19] = L) : L = t[19], R = Array.from({ length: f - g + 1 }, L), t[11] = _, t[12] = f, t[13] = a, t[14] = g, t[15] = R;
		} else R = t[15];
		var E = R, k = !p, I;
		t[20] !== n || t[21] !== a ? (I = function() {
			a(n + 1);
		}, t[20] = n, t[21] = a, t[22] = I) : I = t[22];
		var T;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (T = s.jsx(r("WDSIconIcArrowForward.react"), {
			height: 30,
			width: 30
		}), t[23] = T) : T = t[23];
		var D;
		t[24] !== p || t[25] !== k || t[26] !== I ? (D = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			isActive: p,
			disabled: k,
			onClick: I,
			children: T
		}), t[24] = p, t[25] = k, t[26] = I, t[27] = D) : D = t[27];
		var x = D, $;
		t[28] !== a ? ($ = s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			onClick: function() {
				a(0);
			},
			children: "1"
		}), t[28] = a, t[29] = $) : $ = t[29];
		var P;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (P = s.jsx(o("WAWebText.react").WAWebTextSmall, { children: "•" }), t[30] = P) : P = t[30];
		var N;
		t[31] !== $ ? (N = s.jsxs(s.Fragment, { children: [$, P] }), t[31] = $, t[32] = N) : N = t[32];
		var M = N, w;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (w = s.jsx(o("WAWebText.react").WAWebTextSmall, { children: "•" }), t[33] = w) : w = t[33];
		var A;
		t[34] !== a || t[35] !== h ? (A = function() {
			a(h - 1);
		}, t[34] = a, t[35] = h, t[36] = A) : A = t[36];
		var F;
		t[37] !== A || t[38] !== h ? (F = s.jsxs(s.Fragment, { children: [w, s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
			onClick: A,
			children: h
		})] }), t[37] = A, t[38] = h, t[39] = F) : F = t[39];
		var O = F, B = h > 6 && u.largeContainer, W;
		t[40] !== B ? (W = [u.container, B], t[40] = B, t[41] = W) : W = t[41];
		var q = g > 1 && M, U = f < h && O, V;
		return t[42] !== S || t[43] !== x || t[44] !== E || t[45] !== W || t[46] !== q || t[47] !== U ? (V = s.jsx(r("WAWebDeveloperBorderBox.react"), {
			xstyle: u.paginationWrapper,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				xstyle: W,
				gap: 4,
				children: [
					S,
					q,
					E,
					U,
					x
				]
			})
		}), t[42] = S, t[43] = x, t[44] = E, t[45] = W, t[46] = q, t[47] = U, t[48] = V) : V = t[48], V;
	}
	function m(e, t) {
		if (e < 0) throw r("err")("Row count is invalid");
		if (t < 0) throw r("err")("Current offset is invalid");
		var n = t + 1, a = n > 1, i = o("WAWebDeveloperToolsLoadTable").MAX_ROWS * n < e, l = Math.ceil(e / o("WAWebDeveloperToolsLoadTable").MAX_ROWS), s = Math.max(1, n - Math.floor(c / 2)), u = Math.min(l, s + c);
		return u - s < c && (s = Math.max(1, l - c)), {
			canGoBack: a,
			currentPage: n,
			canGoForward: i,
			totalPages: l,
			startPage: s,
			endPage: u
		};
	}
	l.DeveloperToolsDBViewerPagination = d, l.getPaginationData = m;
}), 98);
