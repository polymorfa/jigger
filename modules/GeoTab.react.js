__d("GeoTab.react", [
	"GeoALSurface",
	"GeoHStack.react",
	"GeoIcon.react",
	"GeoPopoverUtils",
	"GeoPrivateFBIconOrImageish.react",
	"GeoPrivateFbtOrTooltip.react",
	"GeoPrivateLoggingAction",
	"GeoPrivateLoggingClassification",
	"GeoPrivateMakeComponent",
	"GeoPrivatePressable.react",
	"GeoPrivateTooltipTriggerContext",
	"GeoTabFocusGroup",
	"GeoTabGroupContext",
	"GeoTooltip.react",
	"meta-brand-triangle-down-filled-16",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoPrivateResponsiveTabs",
	"useGeoPrivateTabStyles",
	"useGeoPrivateTextStyle",
	"useGeoPrivateWithLogging",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useMemo, _ = c.useRef, f = c.useState, g = "geo-tab-overflow-value", h = {
		icon: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		label: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		labelPositioner: {
			height: "xqtp20y",
			visibility: "xlshs6z",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			userSelect: "x87ps6o",
			pointerEvents: "x47corl",
			$$css: !0
		},
		stack: {
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(75), n = e["aria-haspopup"], a = e.badge, i = e.containerRef, l = e["data-testid"], s = e.href, c = e.icon, d = e.id, p = e.isLabelHidden, y = e.label, b = e.logging, v = e.loggingName, S = e.onActivate, R = e.onHoverEnd, L = e.onHoverStart, E = e.prefetchQueriesOnHover, k = e.tooltip, I = e.value, T = e.xstyle, D = v === void 0 ? "GeoTab" : v, x = E === void 0 ? !1 : E, $ = f(!1), P = $[0], N = $[1], M = f(!1), w = M[0], A = M[1], F = P || w, O = f(!1), B = O[0], W = O[1], q = m(r("GeoTabGroupContext")), U = q.grow, V = q.hasAnimation, H = q.isFirst, G = q.isLabelHidden, z = q.isVisible, j = q.onPress, K = q.onResize, Q = q.selectedValue, X = Q === I, Y = I === g, J = p != null ? p : G, Z = o("useGeoPrivateResponsiveTabs").useWidthChanged(K), ee = _(null), te = r("useMergeRefs")(i, U === "fill" ? null : Z, ee), ne;
		t[0] !== j || t[1] !== S || t[2] !== I ? (ne = function(t) {
			S == null || S(I, t), j(I, t);
		}, t[0] = j, t[1] = S, t[2] = I, t[3] = ne) : ne = t[3];
		var re = ne, oe;
		t[4] !== D ? (oe = {
			name: D,
			action: r("GeoPrivateLoggingAction").CLICK,
			classification: r("GeoPrivateLoggingClassification").USER_ACTION
		}, t[4] = D, t[5] = oe) : oe = t[5];
		var ae = r("useGeoPrivateWithLogging")(re, oe), ie;
		t[6] !== U || t[7] !== V || t[8] !== B || t[9] !== H || t[10] !== J || t[11] !== Y || t[12] !== X || t[13] !== z || t[14] !== F ? (ie = {
			grow: U,
			hasAnimation: V,
			isFirst: H,
			isLabelHidden: J,
			isVisuallyHovered: F,
			isSelected: X,
			isVisible: z,
			isActive: B,
			isOverflowTab: Y
		}, t[6] = U, t[7] = V, t[8] = B, t[9] = H, t[10] = J, t[11] = Y, t[12] = X, t[13] = z, t[14] = F, t[15] = ie) : ie = t[15];
		var le = r("useGeoPrivateTabStyles")(ie), se;
		t[16] !== s || t[17] !== Y || t[18] !== X || t[19] !== z ? (se = s != null ? null : babelHelpers.extends({ hidden: !z }, Y ? null : { selected: X }), t[16] = s, t[17] = Y, t[18] = X, t[19] = z, t[20] = se) : se = t[20];
		var ue = se, ce;
		t[21] !== n ? (ce = { haspopup: n }, t[21] = n, t[22] = ce) : ce = t[22];
		var de = Y ? "button" : s != null ? "link" : "tab", me;
		t[23] !== s || t[24] !== x ? (me = s != null ? {
			url: s.toString(),
			prefetchQueriesOnHover: x
		} : null, t[23] = s, t[24] = x, t[25] = me) : me = t[25];
		var pe;
		t[26] !== R ? (pe = function(t) {
			N(!1), R == null || R(t);
		}, t[26] = R, t[27] = pe) : pe = t[27];
		var _e;
		t[28] !== L ? (_e = function(t) {
			N(!0), L == null || L(t);
		}, t[28] = L, t[29] = _e) : _e = t[29];
		var fe = s == null, ge;
		t[30] !== le || t[31] !== T ? (ge = [le, T], t[30] = le, t[31] = T, t[32] = ge) : ge = t[32];
		var he;
		t[33] !== c ? (he = c && u.jsx(r("GeoPrivateFBIconOrImageish.react"), {
			color: "inherit",
			icon: c,
			xstyle: h.icon
		}), t[33] = c, t[34] = he) : he = t[34];
		var ye;
		t[35] !== c || t[36] !== J || t[37] !== y ? (ye = c && J && u.jsx(r("GeoTooltip.react"), {
			content: y,
			renderDelay: o("GeoPopoverUtils").DEFAULT_TOOLTIP_DELAY
		}), t[35] = c, t[36] = J, t[37] = y, t[38] = ye) : ye = t[38];
		var Ce;
		t[39] !== J || t[40] !== X || t[41] !== y ? (Ce = !J && u.jsx(C, {
			isSelected: X,
			children: y
		}), t[39] = J, t[40] = X, t[41] = y, t[42] = Ce) : Ce = t[42];
		var be;
		t[43] !== n ? (be = n === !0 && u.jsx(r("GeoIcon.react"), {
			color: "inherit",
			icon: o("meta-brand-triangle-down-filled-16").metaBrandTriangleDownTriangleDownFilled16
		}), t[43] = n, t[44] = be) : be = t[44];
		var ve;
		t[45] !== a || t[46] !== he || t[47] !== ye || t[48] !== Ce || t[49] !== be ? (ve = u.jsxs(r("GeoHStack.react"), {
			alignItems: "center",
			xstyle: h.stack,
			children: [
				he,
				ye,
				Ce,
				be,
				a
			]
		}), t[45] = a, t[46] = he, t[47] = ye, t[48] = Ce, t[49] = be, t[50] = ve) : ve = t[50];
		var Se;
		t[51] !== k ? (Se = u.jsx(r("GeoPrivateFbtOrTooltip.react"), { children: k }), t[51] = k, t[52] = Se) : Se = t[52];
		var Re;
		t[53] !== ue || t[54] !== l || t[55] !== d || t[56] !== y || t[57] !== ae || t[58] !== te || t[59] !== pe || t[60] !== _e || t[61] !== fe || t[62] !== ge || t[63] !== ve || t[64] !== Se || t[65] !== ce || t[66] !== de || t[67] !== me ? (Re = u.jsx(r("GeoPrivateTooltipTriggerContext").Provider, {
			value: ee,
			children: u.jsxs(r("GeoPrivatePressable.react"), {
				accessibilityLabel: y,
				accessibilityRelationship: ce,
				accessibilityRole: de,
				accessibilityState: ue,
				forwardedRef: te,
				link: me,
				nativeID: d,
				onFocusVisibleChange: A,
				onHoverEnd: pe,
				onHoverStart: _e,
				onPress: ae,
				onPressChange: W,
				preventDefault: fe,
				testID: l,
				xstyle: ge,
				children: [ve, Se]
			})
		}), t[53] = ue, t[54] = l, t[55] = d, t[56] = y, t[57] = ae, t[58] = te, t[59] = pe, t[60] = _e, t[61] = fe, t[62] = ge, t[63] = ve, t[64] = Se, t[65] = ce, t[66] = de, t[67] = me, t[68] = Re) : Re = t[68];
		var Le;
		t[69] !== b || t[70] !== Re ? (Le = u.jsx(r("GeoALSurface"), {
			logging: b,
			name: "GeoTab",
			children: Re
		}), t[69] = b, t[70] = Re, t[71] = Le) : Le = t[71];
		var Ee = Le, ke;
		return t[72] !== z || t[73] !== Ee ? (ke = z ? u.jsx(o("GeoTabFocusGroup").FocusItem, { children: Ee }) : Ee, t[72] = z, t[73] = Ee, t[74] = ke) : ke = t[74], ke;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(24), a = t.children, i = t.isSelected, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			textAlign: "center",
			whiteSpace: "nowrap"
		}, n[0] = l) : l = n[0];
		var s = r("useGeoPrivateTextStyle")(l), c;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (c = {
			color: "inherit",
			textAlign: "center",
			weight: "bold",
			whiteSpace: "nowrap"
		}, n[1] = c) : c = n[1];
		var d = r("useGeoPrivateTextStyle")(c), m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x3nfvp2 xdt5ytf xs83m0k xeuugli x6ikm8r x10wlt62" }, n[2] = m) : m = n[2];
		var p;
		n[3] !== i || n[4] !== s || n[5] !== d ? (p = (e || (e = r("stylex"))).props(h.label, i ? d : s), n[3] = i, n[4] = s, n[5] = d, n[6] = p) : p = n[6];
		var _;
		n[7] !== a || n[8] !== p ? (_ = u.jsx("span", babelHelpers.extends({}, p, { children: a })), n[7] = a, n[8] = p, n[9] = _) : _ = n[9];
		var f;
		n[10] !== s ? (f = (e || (e = r("stylex"))).props(s, h.labelPositioner), n[10] = s, n[11] = f) : f = n[11];
		var g;
		n[12] !== a || n[13] !== f ? (g = u.jsx("span", babelHelpers.extends({}, f, { children: a })), n[12] = a, n[13] = f, n[14] = g) : g = n[14];
		var y;
		n[15] !== d ? (y = (e || (e = r("stylex"))).props(d, h.labelPositioner), n[15] = d, n[16] = y) : y = n[16];
		var C;
		n[17] !== a || n[18] !== y ? (C = u.jsx("span", babelHelpers.extends({}, y, { children: a })), n[17] = a, n[18] = y, n[19] = C) : C = n[19];
		var b;
		return n[20] !== _ || n[21] !== g || n[22] !== C ? (b = u.jsxs("div", babelHelpers.extends({ "aria-hidden": !0 }, m, { children: [
			_,
			g,
			C
		] })), n[20] = _, n[21] = g, n[22] = C, n[23] = b) : b = n[23], b;
	}
	var b = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTab", y);
	l.default = b;
}), 98);
