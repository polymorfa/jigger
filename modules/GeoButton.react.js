__d("GeoButton.react", [
	"BUIPrivateButtonLayoutContext",
	"GeoALSurface",
	"GeoPrivateBaseButton.react",
	"GeoPrivateButtonLayerActionContext",
	"GeoPrivateButtonStyleContext",
	"GeoPrivateHoverCardContext",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoPrivateButtonGroupChildStyles",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"ariaLabel",
		"autoFocus",
		"containerRef",
		"isDepressed",
		"layerAction",
		"logging",
		"loggingName",
		"maxWidth",
		"minWidth",
		"onClick",
		"onHoverChange",
		"ref",
		"shrink",
		"width",
		"grow",
		"isDisabled",
		"type",
		"xstyle"
	], s = ["marginLeft"], u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = m.useRef;
	function h(t) {
		var n = o("react-compiler-runtime").c(64), a, i, l, c, m, f, h, C, b, v, S, R, L, E, k, I, T, D, x;
		n[0] !== t ? (a = t.ariaLabel, L = t.autoFocus, i = t.containerRef, c = t.isDepressed, m = t.layerAction, f = t.logging, E = t.loggingName, h = t.maxWidth, C = t.minWidth, b = t.onClick, v = t.onHoverChange, R = t.ref, k = t.shrink, D = t.width, l = t.grow, I = t.isDisabled, T = t.type, x = t.xstyle, S = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = c, n[5] = m, n[6] = f, n[7] = h, n[8] = C, n[9] = b, n[10] = v, n[11] = S, n[12] = R, n[13] = L, n[14] = E, n[15] = k, n[16] = I, n[17] = T, n[18] = D, n[19] = x) : (a = n[1], i = n[2], l = n[3], c = n[4], m = n[5], f = n[6], h = n[7], C = n[8], b = n[9], v = n[10], S = n[11], R = n[12], L = n[13], E = n[14], k = n[15], I = n[16], T = n[17], D = n[18], x = n[19]);
		var $ = L === void 0 ? !1 : L, P = E === void 0 ? "GeoButton" : E, N = k === void 0 ? !1 : k, M = I === void 0 ? !1 : I, w = T === void 0 ? "button" : T, A = g(null), F = r("BUIPrivateButtonLayoutContext").useLayoutContext(), O = F[0], B = F[1], W;
		if (n[20] !== O) {
			var q = O.marginLeft, U = babelHelpers.objectWithoutPropertiesLoose(O, s);
			W = U, n[20] = O, n[21] = W;
		} else W = n[21];
		var V = r("useGeoPrivateButtonGroupChildStyles")(), H = p(r("GeoPrivateButtonStyleContext")), G = H.width, z = G != null ? G : D, j = p(r("GeoPrivateHoverCardContext")), K = j.isHoverCard, Q = K ? "fill" : l, X = i != null ? i : R, Y = r("useMergeRefs")(X, A);
		Y = r("useMergeRefs")(Y, B);
		var J;
		e: {
			switch (m) {
				case "confirm": {
					J = "layerConfirm";
					break e;
				}
				case "cancel": {
					J = "layerCancel";
					break e;
				}
				case "button": {
					J = "layerButton";
					break e;
				}
			}
			J = null;
		}
		var Z = J, ee, te;
		n[22] !== $ ? (ee = function() {
			if ($) {
				var e;
				(e = A.current) == null || e.focus();
			}
		}, te = [A, $], n[22] = $, n[23] = ee, n[24] = te) : (ee = n[23], te = n[24]), _(ee, te);
		var ne = z != null || C != null || h != null, re = C, oe = h, ae;
		e: {
			if (f == null) {
				ae = f;
				break e;
			}
			if (f.nodeRef != null) {
				ae = f;
				break e;
			}
			var ie;
			n[25] !== f ? (ie = babelHelpers.extends({}, f, { nodeRef: A }), n[25] = f, n[26] = ie) : ie = n[26];
			var le = ie;
			if (f.capability == null) ae = le;
			else {
				var se;
				n[27] === Symbol.for("react.memo_cache_sentinel") ? (se = { display: "inline" }, n[27] = se) : se = n[27];
				var ue;
				n[28] !== f.capability ? (ue = babelHelpers.extends({}, f.capability, { wrapperStyle: se }), n[28] = f.capability, n[29] = ue) : ue = n[29];
				var ce = ue, de;
				n[30] !== le || n[31] !== ce ? (de = babelHelpers.extends({}, le, { capability: ce }), n[30] = le, n[31] = ce, n[32] = de) : de = n[32], ae = de;
			}
		}
		var me = ae, pe;
		n[33] !== V || n[34] !== Q || n[35] !== N || n[36] !== x ? (pe = (u || (u = r("stylex")))(y.buttonWrapper, V, Q === "fill" && y.grow, N === !0 && y.shrink, x), n[33] = V, n[34] = Q, n[35] = N, n[36] = x, n[37] = pe) : pe = n[37];
		var _e;
		n[38] !== W || n[39] !== oe || n[40] !== re || n[41] !== z ? (_e = babelHelpers.extends({}, W, {
			width: z,
			minWidth: re,
			maxWidth: oe
		}), n[38] = W, n[39] = oe, n[40] = re, n[41] = z, n[42] = _e) : _e = n[42];
		var fe = a != null ? a : void 0, ge = ne || Q === "fill" ? "fill" : void 0, he;
		n[43] !== c || n[44] !== M || n[45] !== P || n[46] !== Y || n[47] !== b || n[48] !== v || n[49] !== S || n[50] !== fe || n[51] !== ge || n[52] !== w ? (he = d.jsx(r("GeoPrivateBaseButton.react"), babelHelpers.extends({}, S, {
			"aria-label": fe,
			containerRef: Y,
			grow: ge,
			isDepressed: c,
			isDisabled: M,
			loggingName: P,
			onClick: b,
			onHoverChange: v,
			shouldIncludeGroupStyles: !1,
			type: w
		})), n[43] = c, n[44] = M, n[45] = P, n[46] = Y, n[47] = b, n[48] = v, n[49] = S, n[50] = fe, n[51] = ge, n[52] = w, n[53] = he) : he = n[53];
		var ye;
		n[54] !== pe || n[55] !== _e || n[56] !== he ? (ye = d.jsx("div", {
			className: pe,
			role: "none",
			style: _e,
			children: he
		}), n[54] = pe, n[55] = _e, n[56] = he, n[57] = ye) : ye = n[57];
		var Ce;
		n[58] !== Z || n[59] !== ye ? (Ce = d.jsx(r("GeoPrivateButtonLayerActionContext").Provider, {
			value: Z,
			children: ye
		}), n[58] = Z, n[59] = ye, n[60] = Ce) : Ce = n[60];
		var be;
		return n[61] !== me || n[62] !== Ce ? (be = d.jsx(r("GeoALSurface"), {
			logging: me,
			name: "GeoButton",
			children: Ce
		}), n[61] = me, n[62] = Ce, n[63] = be) : be = n[63], be;
	}
	var y = {
		buttonWrapper: {
			display: "x3nfvp2",
			maxWidth: "x193iq5w",
			verticalAlign: "xxymvpz",
			minWidth: "xeuugli",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		grow: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			$$css: !0
		},
		shrink: {
			flexShrink: "xs83m0k",
			$$css: !0
		}
	}, C = o("GeoPrivateMakeComponent").makeGeoComponent("GeoButton", h);
	l.default = C;
}), 98);
