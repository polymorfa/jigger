__d("useWAWebBizAdCreationCatalogMedia", [
	"FBLogger",
	"WAAbortError",
	"WAFilteredCatch",
	"WAPromiseRaceAbort",
	"WAWebBackendErrors",
	"WAWebCatalogCollection",
	"WAWebNoop",
	"WAWebUserPrefsMeUser",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo, d = s.useRef, m = s.useState;
	function p() {
		return o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
	}
	function _() {
		var e = p();
		return e != null ? e.productCollection.getProductModels() : [];
	}
	function f(e) {
		var t = parseInt(e.replace("_", ""), 10);
		return Number.isNaN(t) ? -1 : t;
	}
	function g(e, t) {
		return t.lazyloadProductImageCollection().toArray().filter(function(e) {
			return e.videoUrl == null && e.mediaUrl != null && e.mediaUrl !== "";
		}).map(function(n) {
			var r = f(n.id), o = null;
			if (r === 0) o = t.imageHash;
			else if (r > 0) {
				var a;
				o = (a = t.additionalImageHashes[r - 1]) != null ? a : null;
			}
			return {
				item: {
					catalogId: e,
					entImageId: o,
					imageId: n.id,
					productId: t.id.toString()
				},
				productImage: n
			};
		}).filter(function(e) {
			return e.item.entImageId != null;
		});
	}
	function h(e, t, n, r) {
		return e ? t && r === 0 ? "error" : n && r === 0 ? "loading" : "loaded" : "no-catalog";
	}
	function y(e, t) {
		return t.filter(function(e) {
			return !e.isHidden;
		}).map(function(t) {
			return {
				sectionId: t.id.toString(),
				sectionTitle: t.name,
				tiles: g(e, t)
			};
		}).filter(function(e) {
			return e.tiles.length > 0;
		});
	}
	function C() {
		var e = o("react-compiler-runtime").c(18), t = r("useWAWebUnmountSignal")(), n = m(_), a = n[0], i = n[1], l = m(!0), s = l[0], c = l[1], f = m(!0), g = f[0], h = f[1], y = m(!0), C = y[0], b = y[1], v = m(!1), S = v[0], R = v[1], L = d(!1), E;
		e[0] !== t ? (E = function(n) {
			var e = n === void 0 ? !1 : n;
			if (!L.current) {
				var a = p();
				if (a == null) {
					c(!1), h(!1);
					return;
				}
				var l = !a.afterCursor;
				if (l) {
					i(a.productCollection.getProductModels()), c(!1), h(!1);
					return;
				}
				L.current = !0, c(!0), R(!1), r("WAPromiseRaceAbort")(o("WAWebCatalogCollection").CatalogCollection.findNextProductPage(a.id, e), t).then(function(e) {
					var t;
					i(e), c(!1), h(!!((t = p()) != null && t.afterCursor)), L.current = !1;
				}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
					r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).warn("Catalog media pagination error"), c(!1), h(!1), R(!0), L.current = !1;
				});
			}
		}, e[0] = t, e[1] = E) : E = e[1];
		var k = E, I;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			R(!0), c(!1), h(!1), L.current = !1;
		}, e[2] = I) : I = e[2];
		var T = I, D;
		e[3] !== k || e[4] !== t ? (D = function() {
			if (!L.current) {
				L.current = !0;
				var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
				c(!0), r("WAPromiseRaceAbort")(o("WAWebCatalogCollection").CatalogCollection.find(e), t).then(function() {
					L.current = !1, k(!0);
				}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
					b(e.status !== 404), T();
				})).catch(o("WAFilteredCatch").filteredCatch([o("WAWebBackendErrors").CatalogUnknownError, o("WAWebBackendErrors").AdAccountRecoveryRequiredError], T)).catch(function(e) {
					r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Unexpected catalog load error"), T();
				});
			}
		}, e[3] = k, e[4] = t, e[5] = D) : D = e[5];
		var x = D, $ = r("useWAWebStableCallback")(x), P, N;
		e[6] !== $ ? (P = function() {
			$();
		}, N = [$], e[6] = $, e[7] = P, e[8] = N) : (P = e[7], N = e[8]), u(P, N);
		var M;
		e[9] !== k ? (M = function() {
			return k();
		}, e[9] = k, e[10] = M) : M = e[10];
		var w = r("useWAWebStableCallback")(M), A;
		return e[11] !== g || e[12] !== C || e[13] !== S || e[14] !== s || e[15] !== w || e[16] !== a ? (A = {
			canLoadMore: g,
			catalogExists: C,
			hasLoadError: S,
			isLoadingMore: s,
			loadMore: w,
			products: a
		}, e[11] = g, e[12] = C, e[13] = S, e[14] = s, e[15] = w, e[16] = a, e[17] = A) : A = e[17], A;
	}
	function b() {
		var e = o("react-compiler-runtime").c(14), t = C(), n = t.canLoadMore, r = t.catalogExists, a = t.hasLoadError, i = t.isLoadingMore, l = t.loadMore, s = t.products, u;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var c;
			u = (c = p()) == null ? void 0 : c.id.toString(), e[0] = u;
		} else u = e[0];
		var d = u, m;
		e[1] !== s ? (m = d != null ? y(d, s) : [], e[1] = s, e[2] = m) : m = e[2];
		var _ = m, f;
		e[3] !== r || e[4] !== a || e[5] !== i || e[6] !== s.length ? (f = h(r, a, i, s.length), e[3] = r, e[4] = a, e[5] = i, e[6] = s.length, e[7] = f) : f = e[7];
		var g = f, b;
		return e[8] !== n || e[9] !== i || e[10] !== l || e[11] !== g || e[12] !== _ ? (b = {
			canLoadMore: n,
			isLoadingMore: i,
			loadMore: l,
			loadState: g,
			sections: _
		}, e[8] = n, e[9] = i, e[10] = l, e[11] = g, e[12] = _, e[13] = b) : b = e[13], b;
	}
	l.default = b;
}), 98);
