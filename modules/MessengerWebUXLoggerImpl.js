__d("MessengerWebUXLoggerImpl", [
	"CurrentAppID",
	"I64",
	"LSIntEnum",
	"MWConsole",
	"MWThreadKey.react",
	"MessagingThreadType",
	"MessengerWebUxEventFalcoEvent",
	"ODS",
	"WebUXLoggingEntryPointContextProvider",
	"WebUXLoggingSurfaceContextProvider",
	"cr:6873",
	"gkx",
	"isMessengerPWA",
	"react",
	"react-compiler-runtime",
	"useSinglePartialViewImpression"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = e || (e = o("react")), m = d.useCallback, p = d.useContext, _ = d.useInsertionEffect, f = d.useRef;
	function g() {
		var e = o("react-compiler-runtime").c(2), t = v(), n;
		return e[0] !== t ? (n = function(n) {
			var e;
			t(typeof n == "string" ? {
				eventName: n,
				eventType: "interaction"
			} : babelHelpers.extends({}, n, { eventType: (e = n.eventType) != null ? e : "interaction" }));
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	function h() {
		var e = o("react-compiler-runtime").c(2), t = g(), n;
		return e[0] !== t ? (n = function(n, r) {
			return n != null && r != null ? function(e) {
				n(e), t(r);
			} : n;
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	function y() {
		var e = o("react-compiler-runtime").c(2), t = v(), n;
		return e[0] !== t ? (n = function(n) {
			t(babelHelpers.extends({}, n, { eventType: "impression" }));
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	function C(e, t) {
		var n = o("react-compiler-runtime").c(4), a = v(), i;
		return n[0] !== t || n[1] !== e || n[2] !== a ? (i = { onImpressionStart: function() {
			a(babelHelpers.extends({}, e, { eventType: "impression" })), t == null || t();
		} }, n[0] = t, n[1] = e, n[2] = a, n[3] = i) : i = n[3], r("useSinglePartialViewImpression")(i);
	}
	function b(e) {
		var t, n = (s || (s = o("LSIntEnum"))).toNumber(e), a = (t = Object.entries(r("MessagingThreadType")).find(function(e) {
			var t = e[0], r = e[1];
			return r === n;
		})) != null ? t : ["unknown"], i = a[0];
		return i;
	}
	function v() {
		var e = o("react-compiler-runtime").c(5), t = p(o("WebUXLoggingEntryPointContextProvider").WebUXEntryPointLoggingContext), a = f(t), i = p(o("WebUXLoggingSurfaceContextProvider").WebUXSurfaceLoggingContext), l = f(i), d = o("MWThreadKey.react").useMWThreadKeyMemoized(), m = f(d), g;
		e[0] !== t || e[1] !== i || e[2] !== d ? (g = function() {
			a.current = t, m.current = d, l.current = i;
		}, e[0] = t, e[1] = i, e[2] = d, e[3] = g) : g = e[3], _(g, void 0);
		var h;
		return e[4] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			var e = t.ctaType, i = t.entryPoint, d = t.eventName, p = t.eventType, _ = t.extraData, f = t.flowInstanceId, g = t.surface, h = t.threadKey, y = t.threadType, C = h != null ? h : m.current, v = i != null ? i : a.current, R = y ? b(y) : "unknown", L = {
				cta_type: e,
				entry_point: v,
				event_type: p != null ? p : "interaction",
				extra_data: r("gkx")("1709") && r("isMessengerPWA")() ? babelHelpers.extends({}, _, { is_pwa: "1" }) : _,
				flow_instance_id: f,
				surface: g != null ? g : l.current,
				thread_fbid: C != null ? (u || (u = o("I64"))).to_string(C) : void 0,
				thread_type: y != null ? (s || (s = o("LSIntEnum"))).unwrapIntEnum(y) : void 0
			};
			if (r("MessengerWebUxEventFalcoEvent").log(function() {
				return babelHelpers.extends({
					client_timestamp_ms: Date.now().toString(),
					event_name: d
				}, L);
			}), (c || (c = o("ODS"))).bumpEntityKey(S(), t.eventName + "_" + R, v), n("cr:6873") != null && p === "interaction") {
				var E = n("cr:6873").getInstance("user_experience");
				E.debug(JSON.stringify(L), d);
			}
		}, e[4] = h) : h = e[4], h;
	}
	function S() {
		var e = o("CurrentAppID").getAppID();
		switch (e) {
			case String(0x453bf7349370c):
			case String(936619743392459):
			case String(0x3ae327b82f808):
			case String(487152425211411): return 938;
			case String(0x7e36f3fcc43bc): return 3185;
			case String(772021112871879): return 3297;
			default: return 3185;
		}
	}
	l.useInteractionLogger = g, l.useLogOnPressInteraction = h, l.useImpressionLogger = y, l.useImpressionLoggerRef = C;
}), 98);
