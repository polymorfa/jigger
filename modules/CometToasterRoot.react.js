__d("CometToasterRoot.react", [
	"CometErrorBoundary.react",
	"CometLazyToasterView_DO_NOT_USE.react",
	"FBLogger",
	"gkx",
	"react",
	"useHideNotificationsToasts"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo, c = new Set(["CometToastNotification"]);
	function d(e) {
		r("FBLogger")("CometAppShell").catching(e).mustfix("The toaster is broken");
	}
	function m(e) {
		var t = e.align, n = e.maxWidth, o = e.position, a = e.xstyle, i = r("useHideNotificationsToasts")(), l = r("gkx")("11911"), m = l ? null : i === !0 ? c : null;
		return u(function() {
			return s.jsx(r("CometErrorBoundary.react"), {
				onError: d,
				children: s.jsx(r("CometLazyToasterView_DO_NOT_USE.react"), {
					align: t,
					filterToasts: m,
					maxWidth: n,
					position: o,
					xstyle: a
				})
			});
		}, [
			t,
			i,
			n
		]);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
