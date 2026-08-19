__d("WDSContextualLayer.react", [
	"BaseContextualLayerAnchorRoot.react",
	"WDSGlobalContext",
	"WDSToastContainerID",
	"deferredLoadComponent",
	"react",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState, p = r("deferredLoadComponent")(r("requireDeferred")("WDSDialogManager.react").__setRef("WDSContextualLayer.react")), _ = r("deferredLoadComponent")(r("requireDeferred")("WDSToastProvider.react").__setRef("WDSContextualLayer.react"));
	function f(e) {
		var t = e.children, n = m(new Map()), a = n[0], i = n[1], l = c(function(e, t) {
			i(function(n) {
				var r = new Map(n);
				return r.set(e, t), r;
			});
		}, []), u = c(function(e) {
			i(function(t) {
				var n = new Map(t);
				return n.delete(e), n;
			});
		}, []), f = c(function() {
			a.forEach(function(e) {
				e();
			}), i(new Map());
		}, [a]), g = d(function() {
			return {
				currentOpenMenus: a,
				registerMenu: l,
				unregisterMenu: u,
				closeAllMenus: f
			};
		}, [
			a,
			l,
			u,
			f
		]);
		return s.jsx(o("WDSGlobalContext").WDSContext.Provider, {
			value: g,
			children: s.jsxs(r("BaseContextualLayerAnchorRoot.react"), { children: [s.jsx(p, {}), s.jsx(_, {
				target: "#" + r("WDSToastContainerID"),
				children: t
			})] })
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WDSContextualLayer = f;
}), 98);
