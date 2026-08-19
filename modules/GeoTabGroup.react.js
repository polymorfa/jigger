__d("GeoTabGroup.react", [
	"fbt",
	"DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
	"GeoPrivateMakeComponent",
	"GeoTabDropdown.react",
	"GeoTabFocusGroup",
	"GeoTabGroupContext",
	"emptyFunction",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoPrivateResponsiveTabs",
	"useGeoTheme",
	"usePrevious"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = r("gkx")("24835"), f = 100, g = "geo-tab-overflow-value", h = s._(
		/*BTDS*/
		""
	), y = {
		root: {
			display: "x78zum5",
			height: "xdmi676",
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		rootGrow: {
			width: "xh8yej3",
			$$css: !0
		},
		highlight: {
			height: "x5yr21d",
			position: "x10l6tqk",
			width: "xnalus7",
			$$css: !0
		},
		highlightTransition: {
			transitionProperty: "xttng2m",
			transitionTimingFunction: "xrk8b4e",
			$$css: !0
		},
		tabHidden: {
			visibility: "xlshs6z",
			$$css: !0
		}
	};
	function C(t) {
		var n = o("react-compiler-runtime").c(58), a = t.children, i = t["data-testid"], l = t.grow, s = t.hasAnimation, u = t.isLabelHidden, d = t.onChange, m = t.value, p = t.xstyle, f = l === void 0 ? "auto" : l, C = s === void 0 ? !1 : s, L = u === void 0 ? !1 : u, E, k;
		n[0] !== a ? (k = c.Children.toArray(a), E = k.some(S), n[0] = a, n[1] = E, n[2] = k) : (E = n[1], k = n[2]);
		var I = E, T;
		n[3] !== I || n[4] !== k ? (T = [k, I], n[3] = I, n[4] = k, n[5] = T) : T = n[5];
		var D = T, x = D[0], $ = D[1], P = c.Children.toArray(a), N = P.reduce(v, []), M = N.findIndex(function(e) {
			var t = r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e), n = t.props;
			return typeof n == "object" && (n == null ? void 0 : n.value) === m;
		}), w = _ && C, A = f === "fill", F = o("useGeoPrivateResponsiveTabs").useGeoPrivateResponsiveTabs(x, A, w), O = F[0], B = F[1], W = F[2], q = F[3], U = F[4], V = F[5], H = F[6], G;
		n[6] !== d || n[7] !== m ? (G = function(t, n) {
			m !== t && d(t, n);
		}, n[6] = d, n[7] = m, n[8] = G) : G = n[8];
		var z = G, j;
		if (n[9] !== W || n[10] !== A || n[11] !== B || n[12] !== x) {
			if (j = x, !A) {
				var K;
				n[14] !== W || n[15] !== x ? (K = W == null ? x : x.slice(0, W), n[14] = W, n[15] = x, n[16] = K) : K = n[16];
				var Q = K, X = W == null ? [] : x.slice(W), Y = X.reduce(b, []), J = c.jsx(r("GeoTabDropdown.react"), {
					containerRef: B,
					label: h,
					maxHeight: 400,
					value: g,
					xstyle: X.length === 0 && y.tabHidden,
					children: Y
				}, "more-tab");
				j = [].concat(Q, [J], X);
			}
			n[9] = W, n[10] = A, n[11] = B, n[12] = x, n[13] = j;
		} else j = n[13];
		var Z;
		if (n[17] !== W || n[18] !== q || n[19] !== f || n[20] !== w || n[21] !== L || n[22] !== z || n[23] !== m || n[24] !== j) {
			var ee;
			n[26] !== W || n[27] !== q || n[28] !== f || n[29] !== w || n[30] !== L || n[31] !== z || n[32] !== m ? (ee = function(t, n) {
				return {
					grow: f,
					hasAnimation: w,
					isFirst: n === 0,
					isLabelHidden: L,
					isVisible: W == null || n <= W,
					onPress: z,
					onResize: W == null ? r("emptyFunction") : q,
					selectedValue: m
				};
			}, n[26] = W, n[27] = q, n[28] = f, n[29] = w, n[30] = L, n[31] = z, n[32] = m, n[33] = ee) : ee = n[33], Z = j.map(ee), n[17] = W, n[18] = q, n[19] = f, n[20] = w, n[21] = L, n[22] = z, n[23] = m, n[24] = j, n[25] = Z;
		} else Z = n[25];
		var te = Z, ne;
		if (n[34] !== te || n[35] !== j) {
			var re;
			n[37] !== te ? (re = function(t, n) {
				var e = te[n];
				return c.jsx(r("GeoTabGroupContext").Provider, {
					value: e,
					children: t
				}, n);
			}, n[37] = te, n[38] = re) : re = n[38], ne = j.map(re), n[34] = te, n[35] = j, n[36] = ne;
		} else ne = n[36];
		var oe = ne, ae = r("useGeoTheme")(), ie = ae.selectFont, le = U[M];
		W != null && M >= W && (le = H);
		var se = r("usePrevious")(le), ue = R(le, se), ce = le != null ? le.width + "px" : void 0, de = le != null ? "translateX(" + (le.xOffset + le.startMargin) + "px)" : void 0, me;
		n[39] !== f || n[40] !== ie || n[41] !== p ? (me = (e || (e = r("stylex"))).props(y.root, f === "fill" && y.rootGrow, ie({ size: "value" }), p), n[39] = f, n[40] = ie, n[41] = p, n[42] = me) : me = n[42];
		var pe = $ ? "tablist" : "group", _e;
		n[43] !== w || n[44] !== de || n[45] !== V || n[46] !== ue || n[47] !== ce ? (_e = w && c.jsx("div", {
			className: (e || (e = r("stylex")))(ue),
			ref: V,
			style: {
				width: ce,
				transform: de
			}
		}), n[43] = w, n[44] = de, n[45] = V, n[46] = ue, n[47] = ce, n[48] = _e) : _e = n[48];
		var fe;
		n[49] !== oe ? (fe = c.jsx(o("GeoTabFocusGroup").FocusGroup, {
			orientation: "horizontal",
			preventScrollOnFocus: !0,
			tabScopeQuery: o("GeoTabFocusGroup").tabbableScopeQuery,
			wrap: !0,
			children: oe
		}), n[49] = oe, n[50] = fe) : fe = n[50];
		var ge;
		return n[51] !== i || n[52] !== O || n[53] !== pe || n[54] !== _e || n[55] !== fe || n[56] !== me ? (ge = c.jsxs("div", babelHelpers.extends({}, me, {
			"data-testid": void 0,
			ref: O,
			role: pe,
			children: [_e, fe]
		})), n[51] = i, n[52] = O, n[53] = pe, n[54] = _e, n[55] = fe, n[56] = me, n[57] = ge) : ge = n[57], ge;
	}
	function b(e, t) {
		return Object.prototype.hasOwnProperty.call(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props, "children") && r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props.children != null ? e.concat(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props.children) : e.concat(t);
	}
	function v(e, t) {
		return Object.prototype.hasOwnProperty.call(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props, "children") && r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props.children != null ? e.concat(c.Children.toArray(r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(t).props.children)) : e.concat(t);
	}
	function S(e) {
		var t = r("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(e), n = t.props;
		return typeof n == "object" && (n == null ? void 0 : n.href) == null;
	}
	function R(e, t) {
		var n, a = o("react-compiler-runtime").c(17), i = e != null && t != null, l = (n = t == null ? void 0 : t.xOffset) != null ? n : 0, s;
		a[0] !== i || a[1] !== e || a[2] !== l ? (s = i ? Math.abs(e.xOffset - l) : 0, a[0] = i, a[1] = e, a[2] = l, a[3] = s) : s = a[3];
		var u = s, c = r("useGeoTheme")(), d = c.selectBorderRadius, m = c.selectInteractiveColorPalette, p = c.selectTransition, _;
		a[4] !== d ? (_ = d({ context: "control" }), a[4] = d, a[5] = _) : _ = a[5];
		var g;
		a[6] !== m ? (g = m({ color: "navigation" }), a[6] = m, a[7] = g) : g = a[7];
		var h;
		a[8] !== u || a[9] !== i || a[10] !== p ? (h = i && p({
			duration: u > f ? "slow" : "short",
			timing: "fade"
		}), a[8] = u, a[9] = i, a[10] = p, a[11] = h) : h = a[11];
		var C = i && y.highlightTransition, b;
		return a[12] !== _ || a[13] !== g || a[14] !== h || a[15] !== C ? (b = [
			_,
			g,
			h,
			y.highlight,
			C
		], a[12] = _, a[13] = g, a[14] = h, a[15] = C, a[16] = b) : b = a[16], b;
	}
	var L = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTabGroup", C);
	l.default = L;
}), 226);
