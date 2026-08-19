__d("GeoAccordionListItem.react", [
	"BUIListAccordionContext",
	"GeoAccordionListContext",
	"GeoBaseInteractiveRow.react",
	"GeoDivider.react",
	"GeoFlexbox.react",
	"GeoIcon.react",
	"GeoPrivateAccordionListItemContent.react",
	"GeoPrivateDisabledContext",
	"GeoPrivateListLayoutContext",
	"GeoPrivateMakeComponent",
	"GeoWrappedListItemContext",
	"geoMargin",
	"gkx",
	"meta-brand-caret-down-outline-16",
	"meta-brand-caret-up-outline-16",
	"meta-brand-pencil-filled-16",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useBoolean",
	"useCallbackListener",
	"useGeoSelection",
	"useGeoTheme",
	"useMergeRefs",
	"useUniqueID"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useImperativeHandle, f = c.useMemo, g = c.useRef, h = c.useState, y = { endContent: {
		flexShrink: "x2lah0s",
		marginInlineStart: "xvc5jky",
		$$css: !0
	} }, C = r("gkx")("24835"), b = r("gkx")("18970");
	function v(e) {
		var t = o("react-compiler-runtime").c(67), n = e.children, a = e.containerRef, i = e["data-testid"], l = e.disabledMessage, s = e.endContent, c = e.id, d = e.isDisabled, f = e.isInitiallyExpanded, b = e.item, v = e.itemContainerRef, L = e.itemRef, E = e.logging, k = e.mode, I = e.onChange, T = e.onClick, D = d === void 0 ? !1 : d, x = f === void 0 ? !1 : f, $ = k === void 0 ? "default" : k, P = r("useUniqueID")(), N = c != null ? c : P, M = m(r("GeoAccordionListContext")), w = M.onInitiallySelected, A = M.registerItem, F = M.variant, O = r("useGeoSelection")(N), B = O.isSelected, W = O.removeSelection, q = O.setSelection, U = O.toggleSelection, V = g(!1), H = m(r("GeoPrivateDisabledContext")), G = H != null ? H : D, z, j;
		t[0] !== W || t[1] !== q ? (z = function() {
			return {
				collapse: W,
				expand: q
			};
		}, j = [W, q], t[0] = W, t[1] = q, t[2] = z, t[3] = j) : (z = t[2], j = t[3]), _(L, z, j), r("useCallbackListener")(I, B);
		var K, Q;
		t[4] !== x || t[5] !== N || t[6] !== w ? (K = function() {
			x && V.current === !1 && (V.current = !0, w(N));
		}, Q = [
			x,
			N,
			w
		], t[4] = x, t[5] = N, t[6] = w, t[7] = K, t[8] = Q) : (K = t[7], Q = t[8]), p(K, Q);
		var X, Y;
		t[9] !== N || t[10] !== A ? (X = function() {
			A == null || A(N);
		}, Y = [N, A], t[9] = N, t[10] = A, t[11] = X, t[12] = Y) : (X = t[11], Y = t[12]), p(X, Y);
		var J;
		t[13] !== B ? (J = {
			isInListAccordion: !0,
			isExpanded: B
		}, t[13] = B, t[14] = J) : J = t[14];
		var Z = J, ee;
		t[15] !== G || t[16] !== B ? (ee = {
			disabled: G,
			expanded: B
		}, t[15] = G, t[16] = B, t[17] = ee) : ee = t[17];
		var te = ee, ne = r("GeoPrivateListLayoutContext").useLayoutContext(), re = ne[0], oe = ne[1], ae = re.isFirst, ie = F === "divided", le = F === "flat" || ie, se = r("useMergeRefs")(oe, v), ue = h(!1), ce = ue[0], de = ue[1], me = r("useBoolean")(!1), pe = me.setFalse, _e = me.setTrue, fe = me.value, ge = C ? fe : B, he;
		t[18] !== T || t[19] !== U ? (he = function(t) {
			T == null || T(t), U();
		}, t[18] = T, t[19] = U, t[20] = he) : he = t[20];
		var ye = he, Ce;
		t[21] !== ie || t[22] !== ae ? (Ce = ie && !ae && u.jsx(S, {}), t[21] = ie, t[22] = ae, t[23] = Ce) : Ce = t[23];
		var be = !le && ge, ve = !G, Se = !le && B, Re;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (Re = { className: "x1iyjqo2 xeuugli" }, t[24] = Re) : Re = t[24];
		var Le;
		t[25] !== G || t[26] !== b ? (Le = u.jsx("div", babelHelpers.extends({}, Re, { children: u.jsx(r("GeoPrivateDisabledContext").Provider, {
			value: G,
			children: b
		}) })), t[25] = G, t[26] = b, t[27] = Le) : Le = t[27];
		var Ee;
		t[28] !== s ? (Ee = s != null && u.jsx(r("GeoFlexbox.react"), {
			shrink: 0,
			xstyle: y.endContent,
			children: s
		}), t[28] = s, t[29] = Ee) : Ee = t[29];
		var ke;
		t[30] !== Le || t[31] !== Ee ? (ke = u.jsxs(r("GeoWrappedListItemContext").Provider, {
			value: !0,
			children: [Le, Ee]
		}), t[30] = Le, t[31] = Ee, t[32] = ke) : ke = t[32];
		var Ie;
		t[33] !== G || t[34] !== B || t[35] !== ce || t[36] !== $ ? (Ie = !G && u.jsx(R, {
			isExpanded: B,
			isHovered: ce,
			mode: $
		}), t[33] = G, t[34] = B, t[35] = ce, t[36] = $, t[37] = Ie) : Ie = t[37];
		var Te;
		t[38] !== te || t[39] !== l || t[40] !== G || t[41] !== E || t[42] !== se || t[43] !== ye || t[44] !== be || t[45] !== ve || t[46] !== Se || t[47] !== ke || t[48] !== Ie || t[49] !== i ? (Te = u.jsxs(r("GeoBaseInteractiveRow.react"), {
			accessibilityRole: "button",
			accessibilityState: te,
			containerRef: se,
			"data-testid": void 0,
			disabledMessage: l,
			isDisabled: G,
			isExpanded: be,
			isFocusable: ve,
			isHighlighted: Se,
			logging: E,
			onHoverChange: de,
			onPress: ye,
			children: [ke, Ie]
		}), t[38] = te, t[39] = l, t[40] = G, t[41] = E, t[42] = se, t[43] = ye, t[44] = be, t[45] = ve, t[46] = Se, t[47] = ke, t[48] = Ie, t[49] = i, t[50] = Te) : Te = t[50];
		var De;
		t[51] !== n || t[52] !== G || t[53] !== B || t[54] !== le || t[55] !== ce || t[56] !== pe || t[57] !== _e ? (De = !G && u.jsx(r("GeoPrivateAccordionListItemContent.react"), {
			isExpanded: B,
			isFlat: le,
			isHovered: ce,
			onCollapseEnd: C ? pe : void 0,
			onExpandStart: C ? _e : void 0,
			children: n
		}), t[51] = n, t[52] = G, t[53] = B, t[54] = le, t[55] = ce, t[56] = pe, t[57] = _e, t[58] = De) : De = t[58];
		var xe;
		t[59] !== a || t[60] !== Te || t[61] !== De ? (xe = u.jsxs("div", {
			ref: a,
			role: "listitem",
			children: [Te, De]
		}), t[59] = a, t[60] = Te, t[61] = De, t[62] = xe) : xe = t[62];
		var $e;
		return t[63] !== Z || t[64] !== Ce || t[65] !== xe ? ($e = u.jsxs(r("BUIListAccordionContext").Provider, {
			value: Z,
			children: [Ce, xe]
		}), t[63] = Z, t[64] = Ce, t[65] = xe, t[66] = $e) : $e = t[66], $e;
	}
	function S() {
		var t = o("react-compiler-runtime").c(5), n = r("useGeoTheme")(), a = n.selectSpacing, i;
		if (t[0] !== a) {
			var l = [a({
				context: "component",
				bounds: "external",
				relation: "unrelated",
				positions: ["vertical"]
			})];
			i = (e || (e = r("stylex"))).props(l), t[0] = a, t[1] = i;
		} else i = t[1];
		var s;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(r("GeoDivider.react"), { xstyle: r("geoMargin").all0 }), t[2] = s) : s = t[2];
		var c;
		return t[3] !== i ? (c = u.jsx("div", babelHelpers.extends({}, i, { children: s })), t[3] = i, t[4] = c) : c = t[4], c;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(8), n = e.isExpanded, a = e.isHovered, i = e.mode, l = n === void 0 ? !1 : n, s = a === void 0 ? !1 : a, c = o("meta-brand-caret-up-outline-16").metaBrandCaretUpOutline16;
		l || (c = i === "default" ? o("meta-brand-caret-down-outline-16").metaBrandCaretDownOutline16 : o("meta-brand-pencil-filled-16").metaBrandPencilFilled16);
		var d = !l && i === "edit", m = b && d, p;
		t[0] !== s || t[1] !== m ? (p = {
			0: { className: "x2lah0s xlup9mm" },
			2: { className: "x2lah0s xlup9mm xg01cxk" },
			1: { className: "x2lah0s xlup9mm x1hc1fzr" },
			3: { className: "x2lah0s xlup9mm x1hc1fzr" }
		}[!!m << 1 | !!(m && s) << 0], t[0] = s, t[1] = m, t[2] = p) : p = t[2];
		var _;
		t[3] !== c ? (_ = u.jsx(r("GeoIcon.react"), { icon: c }), t[3] = c, t[4] = _) : _ = t[4];
		var f;
		return t[5] !== p || t[6] !== _ ? (f = u.jsx("div", babelHelpers.extends({}, p, { children: _ })), t[5] = p, t[6] = _, t[7] = f) : f = t[7], f;
	}
	var L = o("GeoPrivateMakeComponent").makeGeoComponent("GeoAccordionListItem", v);
	l.default = L;
}), 98);
