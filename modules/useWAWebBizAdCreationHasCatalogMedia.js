__d("useWAWebBizAdCreationHasCatalogMedia", [
	"FBLogger",
	"WAAbortError",
	"WAFilteredCatch",
	"WAPromiseRaceAbort",
	"WAWebBackendErrors",
	"WAWebCatalogCollection",
	"WAWebNoop",
	"WAWebUserPrefsMeUser",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d() {
		return o("WAWebCatalogCollection").CatalogCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
	}
	function m(e) {
		return e.some(function(e) {
			return !e.isHidden && e.imageCdnUrl != null && e.imageCdnUrl !== "";
		});
	}
	function p() {
		var e = o("react-compiler-runtime").c(13), t = r("useWAWebUnmountSignal")(), a = c(!0), i = a[0], l = a[1], s = c(!1), p = s[0], _ = s[1], f;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function() {
			_(!1), l(!1);
		}, e[0] = f) : f = e[0];
		var g = f, h;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			var e = d();
			_(e != null && m(e.productCollection.getProductModels())), l(!1);
		}, e[1] = h) : h = e[1];
		var y = h, C;
		e[2] !== t ? (C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = d();
				if (e != null && e.afterCursor && !m(e.productCollection.getProductModels())) {
					yield r("WAPromiseRaceAbort")(o("WAWebCatalogCollection").CatalogCollection.findNextProductPage(e.id, !1), t), yield C();
					return;
				}
				y();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), e[2] = t, e[3] = C) : C = e[3];
		var b;
		e[4] !== C || e[5] !== t ? (b = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			r("WAPromiseRaceAbort")(o("WAWebCatalogCollection").CatalogCollection.find(e), t).then(function() {
				return C();
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch([
				o("WAWebBackendErrors").ServerStatusCodeError,
				o("WAWebBackendErrors").CatalogUnknownError,
				o("WAWebBackendErrors").AdAccountRecoveryRequiredError
			], g)).catch(function(e) {
				r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("Unexpected catalog availability error"), g();
			});
		}, e[4] = C, e[5] = t, e[6] = b) : b = e[6];
		var v = b, S = r("useWAWebStableCallback")(v), R, L;
		e[7] !== S ? (R = function() {
			S();
		}, L = [S], e[7] = S, e[8] = R, e[9] = L) : (R = e[8], L = e[9]), u(R, L);
		var E;
		return e[10] !== p || e[11] !== i ? (E = {
			hasCatalogMedia: p,
			isLoading: i
		}, e[10] = p, e[11] = i, e[12] = E) : E = e[12], E;
	}
	l.default = p;
}), 98);
