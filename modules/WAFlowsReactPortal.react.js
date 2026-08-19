__d("WAFlowsReactPortal.react", [
	"WAFlowsInstanceIdContext.react",
	"WDSNativeReactPortalTarget.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = e.ref, r = e.targetId, a = e.wrapperId, i = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), l = i.flowInstanceId;
		return s.jsx(o("WDSNativeReactPortalTarget.react").WDSNativeReactPortal, {
			idFunc: l,
			targetId: r,
			wrapperId: a,
			ref: n,
			children: t
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.id, n = e.testId, r = e.xstyle, a = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), i = a.flowInstanceId;
		return s.jsx(o("WDSNativeReactPortalTarget.react").WDSPortalTarget, {
			idFunc: i,
			id: t,
			testId: n,
			xstyle: r
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.WAFlowsReactPortal = u, l.WAFlowsPortalTarget = c;
}), 98);
