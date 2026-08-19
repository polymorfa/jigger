__d("WAMFlowsFlowProvider.react", [
	"FBLogger",
	"WAFlowsMeta",
	"WhatsAppFlowsDataAPIVersion",
	"WhatsAppFlowsStringUtils",
	"WhatsAppFlowsTemplateVersion",
	"XFBWhatsAppFlowsDataAPIVersionUtils.facebook",
	"XFBWhatsAppFlowsTemplateVersionUtils.facebook",
	"react",
	"tryParseJSONMixed",
	"useDebouncedComet"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useCallback, m = u.useContext, p = u.useEffect, _ = u.useMemo, f = u.useState, g = c(null);
	function h(e) {
		var t = e.children, n = e.initialFlowJSONString, o = e.initialIsFlowVisible, a = o === void 0 ? !1 : o, i = f(!1), l = i[0], u = i[1], c = f(a), m = c[0], h = c[1], y = f(!1), C = y[0], b = y[1], v = f(!1), S = v[0], R = v[1], L = f(null), k = L[0], I = L[1], T = f(), D = T[0], x = T[1], $ = f(n != null ? n : ""), P = $[0], N = $[1], M = d(function() {
			var e = r("tryParseJSONMixed")(P);
			if (!(e == null || e.version == null)) {
				var t = e.version, n = E(P);
				R(n), I(t);
				try {
					var o = new (r("WAFlowsMeta"))(e, !0);
					u(o.getIsShoppingFlow());
				} catch (e) {
					u(!1);
				}
			}
		}, [P]), w = r("useDebouncedComet")(M, { wait: 500 });
		p(function() {
			return w(), function() {
				w.reset();
			};
		}, [P, w]);
		var A = _(function() {
			return {
				flowJSONEditorValue: P,
				flowVersion: k,
				hasCompletedDynamicSetup: D,
				hasUnsavedChanges: C,
				isFlowDynamic: S,
				isFlowVisible: m,
				isShoppingFlow: l,
				setFlowJSONEditorValue: N,
				setFlowVersion: I,
				setHasCompletedDynamicSetup: x,
				setHasUnsavedChanges: b,
				setIsFlowDynamic: R,
				setIsFlowVisible: h,
				setIsShoppingFlow: u
			};
		}, [
			m,
			C,
			S,
			l,
			k,
			D,
			P
		]);
		return s.jsx(g.Provider, {
			value: A,
			children: t
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.split("."), n = t[0], r = t[1];
		if (!(n == null || r == null || !n.match(/^[1-9][0-9]*$/) || !r.match(/^[0-9]+$/))) {
			var o = Number(n), a = Number(r);
			if (!(a > 99)) return o * 100 + a;
		}
	}
	function C(e) {
		if (!(typeof e != "number" && typeof e != "string")) {
			var t = typeof e == "number" ? e : y(e);
			return o("XFBWhatsAppFlowsTemplateVersionUtils.facebook").fromJSEnum(r("WhatsAppFlowsTemplateVersion").cast(t));
		}
	}
	function b(e) {
		if (!(typeof e != "number" && typeof e != "string")) {
			var t = typeof e == "number" ? e : y(e);
			return r("WhatsAppFlowsTemplateVersion").cast(t);
		}
	}
	function v(e) {
		var t = o("XFBWhatsAppFlowsTemplateVersionUtils.facebook").toJSEnum(e);
		if (t != null) {
			var n = t;
			if (n <= 200) return r("WhatsAppFlowsTemplateVersion").cast(n);
			var a = Math.floor(n / 100), i = n % 100;
			return a + "." + i;
		}
	}
	function S(e) {
		var t = o("XFBWhatsAppFlowsDataAPIVersionUtils.facebook").toJSEnum(e);
		if (t != null) {
			var n = t;
			if (n <= 200) return r("WhatsAppFlowsDataAPIVersion").cast(n);
			var a = Math.floor(n / 100), i = n % 100;
			return a + "." + i;
		}
	}
	var R = 703, L = "3.0";
	function E(e) {
		var t = o("WhatsAppFlowsStringUtils").removeTrailingCommas(e), n = {};
		try {
			n = JSON.parse(t);
		} catch (e) {
			return !1;
		}
		return typeof n != "object" || !Object.prototype.hasOwnProperty.call(n, "version") && !Object.prototype.hasOwnProperty.call(n, "data_api_version") || typeof n.version != "string" && typeof n.version != "number" ? !1 : n.data_api_version != null;
	}
	function k() {
		var e = m(g);
		if (e == null) throw r("FBLogger")("wa_flows").mustfixThrow("useWAMFlow must be used in a component wrapped in WAMFlowProvider");
		return e;
	}
	l.WAMFlowProvider = h, l.getFlowsRelayVersion = C, l.getFlowsJSVersion = b, l.flowRelayVersionToSemver = v, l.flowRelayDataAPIVersionToSemver = S, l.LATEST_FLOW_VERSION = R, l.LATEST_DATA_API_VERSION = L, l.canFlowStartWithDataExchange = E, l.useWAMFlow = k;
}), 98);
