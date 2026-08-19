__d("GeoNotice.react", [
	"fbt",
	"GeoGuidanceCard.react",
	"GeoGuidanceCardContent.react",
	"GeoGuidanceCardHeader.react",
	"GeoPrivateMakeComponent",
	"GeoPrivateNotice.react",
	"gkx",
	"isFalsey",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"action",
		"children",
		"id",
		"showIcon",
		"status",
		"xstyle"
	], u, c = u || (u = o("react")), d = {
		info: "active-feedback",
		warning: "warning",
		"policy-warning": "warning",
		error: "policy-violation",
		"policy-violation": "policy-violation",
		success: "success"
	}, m = s._(
		/*BTDS*/
		""
	), p = s._(
		/*BTDS*/
		""
	);
	function _(t) {
		var n = o("react-compiler-runtime").c(25), a = f(), i = a || r("gkx")("13966");
		if (i && r("GeoGuidanceCard.react") != null && r("GeoGuidanceCardContent.react") != null && r("GeoGuidanceCardHeader.react") != null) {
			var l, s, u, m, p;
			if (n[0] !== t) {
				var _ = t.action, y = t.children, C = t.id, b = t.showIcon, v = t.status, S = t.xstyle, R = babelHelpers.objectWithoutPropertiesLoose(t, e);
				l = _, s = y, u = v, p = S, m = R, n[0] = t, n[1] = l, n[2] = s, n[3] = u, n[4] = m, n[5] = p;
			} else l = n[1], s = n[2], u = n[3], m = n[4], p = n[5];
			if (r("isFalsey")(s)) return null;
			var L;
			n[6] !== u ? (L = g(u), n[6] = u, n[7] = L) : L = n[7];
			var E = L, k;
			n[8] !== E ? (k = E == null ? void 0 : c.jsx(r("GeoGuidanceCardHeader.react"), { heading: E }), n[8] = E, n[9] = k) : k = n[9];
			var I = k, T = d[u], D;
			n[10] !== s ? (D = s && c.jsx("div", { children: s }), n[10] = s, n[11] = D) : D = n[11];
			var x;
			n[12] !== l || n[13] !== D ? (x = c.jsxs(r("GeoGuidanceCardContent.react"), { children: [D, l] }), n[12] = l, n[13] = D, n[14] = x) : x = n[14];
			var $ = x, P;
			n[15] !== p ? (P = [p, h.root], n[15] = p, n[16] = P) : P = n[16];
			var N;
			return n[17] !== $ || n[18] !== I || n[19] !== m || n[20] !== T || n[21] !== P ? (N = c.jsx(r("GeoGuidanceCard.react"), babelHelpers.extends({
				header: I,
				status: T,
				xstyle: P
			}, m, { children: $ })), n[17] = $, n[18] = I, n[19] = m, n[20] = T, n[21] = P, n[22] = N) : N = n[22], N;
		}
		var M;
		return n[23] !== t ? (M = c.jsx(r("GeoPrivateNotice.react"), babelHelpers.extends({}, t)), n[23] = t, n[24] = M) : M = n[24], M;
	}
	function f() {
		var e = window.location.pathname;
		return e.startsWith("/adsmanager");
	}
	function g(e) {
		switch (e) {
			case "policy-violation": return m;
			case "policy-warning": return p;
			default: return;
		}
	}
	var h = { root: {
		alignSelf: "xkh2ocl",
		$$css: !0
	} }, y = o("GeoPrivateMakeComponent").makeGeoComponent("GeoNotice", _);
	l.default = y;
}), 226);
