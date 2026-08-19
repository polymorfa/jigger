__d("WAWebProductCatalogSelectProductsModal.react", [
	"fbt",
	"WAWebCatalogCollection",
	"WAWebProductCatalogSendCatalogButton.react",
	"WAWebSelectModal.react",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t, n = o("react-compiler-runtime").c(20), a = e.onCancel, i = e.onConfirm, l = e.onShare, d = e.ref, m = e.singleSelect, p = c(!1), _ = p[0], f = p[1], g;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [], n[0] = g) : g = n[0];
		var h = c(g), y = h[0], C = h[1], b;
		n[1] !== i || n[2] !== m ? (b = function(t) {
			var e = t.item, n = t.selected, r = t.selectedItems;
			f(r.length === 0), m === !0 && n && i({ selectedItems: [e] });
		}, n[1] = i, n[2] = m, n[3] = b) : b = n[3];
		var v = b, S;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			var e = t;
			C(e), f(e.length > 0);
		}, n[4] = S) : S = n[4];
		var R = S, L;
		if (n[5] !== l || n[6] !== ((t = y[0]) == null ? void 0 : t.catalogWid)) {
			var E;
			L = function() {
				var e, t = r("nullthrows")((e = y[0]) == null ? void 0 : e.catalogWid), n = r("nullthrows")(o("WAWebCatalogCollection").CatalogCollection.get(t));
				l(n);
			}, n[5] = l, n[6] = (E = y[0]) == null ? void 0 : E.catalogWid, n[7] = L;
		} else L = n[7];
		var k = L, I = !_, T;
		n[8] !== k || n[9] !== I ? (T = u.jsx(r("WAWebProductCatalogSendCatalogButton.react"), {
			disabled: I,
			onClick: k
		}), n[8] = k, n[9] = I, n[10] = T) : T = n[10];
		var D = T, x;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), n[11] = x) : x = n[11];
		var $ = m === !0 ? 1 : void 0, P;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (P = {
			surface: "unknown",
			viewName: "select-products"
		}, n[12] = P) : P = n[12];
		var N;
		return n[13] !== D || n[14] !== v || n[15] !== a || n[16] !== i || n[17] !== d || n[18] !== $ ? (N = u.jsx(o("WAWebSelectModal.react").SelectModal, {
			ref: d,
			title: x,
			onCancel: a,
			onConfirm: i,
			listType: o("WAWebSelectModal.react").ListType.ProductSelectModal,
			enableSearchBox: !1,
			maxItems: $,
			customHeader: D,
			onSelectionChanged: v,
			onDataLoaded: R,
			tsNavigationData: P
		}), n[13] = D, n[14] = v, n[15] = a, n[16] = i, n[17] = d, n[18] = $, n[19] = N) : N = n[19], N;
	}
	l.default = d;
}), 226);
