__d("WAWebAppRootInteractionContext.react", [
	"CometHeroHoldTrigger.react",
	"CometHeroInteractionIDContext",
	"CometHeroInteractionWithDiv.react",
	"InteractionTracing",
	"getInteractionIDWithInheritance",
	"react",
	"useWAWebCometInteractionTracing"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.use, d = u.useCallback, m = u.useMemo, p = u.useState, _ = {
		completeManuallyHoldInteraction: function() {},
		getActiveTrace: function() {},
		setManualInteractionHold: function() {},
		updateInteractionId: function() {}
	}, f = s.createContext(_), g = { container: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		height: "x5yr21d",
		$$css: !0
	} };
	function h(e) {
		var t, n, o = e.children, a = c(r("CometHeroInteractionIDContext")), i = p(!1), l = i[0], u = i[1], _ = p(), h = _[0], y = _[1], C = d(function() {
			return h != null ? r("InteractionTracing").getPendingInteractionById(h) : null;
		}, [h]), b = d(function(e) {
			y(e);
		}, []), v = d(function() {
			u(!1);
		}, []), S = m(function() {
			return {
				completeManuallyHoldInteraction: v,
				getActiveTrace: C,
				setManualInteractionHold: u,
				updateInteractionId: b
			};
		}, [
			v,
			C,
			u,
			b
		]), R = r("getInteractionIDWithInheritance")(a, h), L = R != null ? r("InteractionTracing").getPendingInteractionById(R) : null;
		return s.jsx(f.Provider, {
			value: S,
			children: s.jsxs(r("CometHeroInteractionWithDiv.react"), {
				interactionDesc: (t = L == null || (n = L.getTrace()) == null ? void 0 : n.tracePolicy) != null ? t : "AppRootInteraction",
				interactionUUID: R,
				observeTextMutation: !0,
				pageletName: "AppRoot",
				xstyle: g.container,
				children: [s.jsx(r("CometHeroHoldTrigger.react"), {
					description: "AppRoot interaction hold",
					hold: l
				}), o]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.manualHold, n = t === void 0 ? !1 : t, o = e.shouldUseNavigationAsInteraction, a = o === void 0 ? !1 : o, i = e.timeout, l = i === void 0 ? 60 : i, s = e.tracePolicy, u = c(f), m = u.setManualInteractionHold, p = u.updateInteractionId, _ = r("useWAWebCometInteractionTracing")(s, a, l), g = _.failInteraction, h = _.startInteraction, y = d(function(e) {
			n && m(!0), h(function(t) {
				p(t.getTraceId()), e && e(t);
			});
		}, [
			n,
			m,
			h,
			p
		]), C = d(function() {
			n && m(!1);
		}, [n, m]);
		return {
			failInteraction: g,
			startInteraction: y,
			stopInteraction: C
		};
	}
	function C() {
		return c(f);
	}
	l.WAWebAppRootInteractionContextProvider = h, l.useInteractionWithAppRootContext = y, l.useWAWebAppRootInteractionContext = C;
}), 98);
