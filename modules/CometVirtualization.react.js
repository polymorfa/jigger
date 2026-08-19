__d("CometVirtualization.react", [
	"BaseView.react",
	"BaseViewHideable.react",
	"FBLogger",
	"HiddenSubtreeContextProvider.react",
	"HiddenSubtreePassiveContext",
	"VirtualizationConfig",
	"VirtualizationContainerContext",
	"VirtualizationContext",
	"cometVirtualizationPinExclusion",
	"gkx",
	"intersectionObserverEntryIsIntersecting",
	"justknobx",
	"nullIntersectionObserverEntryLogger",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useDynamicVirtualizationMargin.react",
	"useIntersectionObserver",
	"useMergeRefs",
	"useMutationStableChecker",
	"usePrevious",
	"useTimeoutStateSinceFirstMounting.react",
	"useVirtualizationContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.unstable_Activity, m = c.useCallback, p = c.useContext, _ = c.useEffect, f = c.useRef, g = c.useState, h = (function() {
		var e = null;
		return function() {
			if (e === null) {
				var t, n = (t = document) == null ? void 0 : t.documentElement;
				if (n == null) throw r("FBLogger")("comet_infra").mustfixThrow("Scroll anchoring feature detection called in an environment without a documentElement");
				e = n.style.overflowAnchor != null;
			}
			return e;
		};
	})();
	function y(e, t) {
		var n = o("react-compiler-runtime").c(3), r = e === void 0 ? null : e, a = t === void 0 ? !1 : t, i = g(r), l = i[0], s = i[1], u, c;
		return n[0] !== l ? (u = function() {
			l === null && s(C);
		}, c = [l], n[0] = l, n[1] = u, n[2] = c) : (u = n[1], c = n[2]), _(u, c), a || (l != null ? l : !1);
	}
	function C() {
		return h();
	}
	var b = {
		invisible: {
			display: "x1s85apg",
			$$css: !0
		},
		resetBlockFormattingContext: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		}
	}, v = r("justknobx")._("1003");
	function S(e) {
		return typeof e.replace == "function" ? e.replace(/\n/g, " ").replace(/\s+/g, " ") : "";
	}
	function R() {
		return typeof IntersectionObserver != "function" || typeof IntersectionObserver.toString != "function" ? !1 : S(IntersectionObserver.toString()).endsWith("{ [native code] }");
	}
	var L = R();
	function E(t) {
		var n = arguments, a, i = o("react-compiler-runtime").c(115), l = t.activityOnlyMode, s = t.allowVirtualizationWithNullNodeHeight, c = t.children, m = t.deferVirtualizationInMs, h = t.deferVirtualizationMutationIntervalInMs, C = t.deferVirtualizationPlaceholderSelector, S = t.delayHeightPlaceholderMs, R = t.disableHiding, E = t.fasterSizeMeasurement, k = t.hiddenMode, I = t.initialRenderConfig, T = t.innerContentXStyle, D = t.isInfiniteScrollUp, x = t.leftRightMargin, $ = t.mountXStyle, P = t.nullState, N = t.pinChildrenOnInteraction, M = t.pinChildrenWithPlayer, w = t.pinExclusionEnabled, A = t.ref, F = t.scrollport, O = t.skipScrollAnchoringCheck_UNSAFE, B = t.smartMargin, W = t.testid, q = t.textSearchable, U = t.topBottomMargin, V = t.unmountHiddenChildren, H = t.unmountXStyle, G = t.xstyle, z = l === void 0 ? !1 : l, j = s === void 0 ? !1 : s, K = m === void 0 ? 0 : m, Q = h === void 0 ? 0 : h, X = S === void 0 ? 0 : S, Y = E === void 0 ? !1 : E, J = k === void 0 ? "legacy" : k, Z = I === void 0 ? o("VirtualizationConfig").DEFAULT_INIT_RENDER_CONFIG : I, ee = D === void 0 ? !1 : D, te = x === void 0 ? o("VirtualizationConfig").HORIZONTAL_HIDEABLE_MARGIN : x, ne = P === void 0 ? null : P, re = F === void 0 ? null : F, oe = O === void 0 ? !1 : O, ae = B === void 0 ? !1 : B, ie = W === void 0 ? "hideable" : W, le = q === void 0 ? !1 : q, se = U === void 0 ? o("VirtualizationConfig").VERTICAL_HIDEABLE_MARGIN : U, ue = f(null), ce = f(null), de = p(r("HiddenSubtreePassiveContext")), me = g(!1), pe = me[0], _e = me[1], fe = f(null), ge = f(!0), he, ye;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (he = function() {
			return (function() {
				return fe.current == null ? void 0 : fe.current();
			});
		}, ye = [], i[0] = he, i[1] = ye) : (he = i[0], ye = i[1]), _(he, ye);
		var Ce = g(Z.isVisible), be = Ce[0], ve = Ce[1], Se = g(Z.nodeHeight), Re = Se[0], Le = Se[1], Ee = g(""), ke = Ee[0], Ie = Ee[1], Te = r("usePrevious")(be), De = r("useTimeoutStateSinceFirstMounting.react")(K), xe = r("useVirtualizationContext")(), $e = p(r("VirtualizationContainerContext")), Pe = f(null), Ne = $ != null ? $ : G, Me = H != null ? H : G, we;
		i[2] !== Y || i[3] !== be || i[4] !== Re || i[5] !== le ? (we = function() {
			var e = ge.current || Re == null && !be;
			if (ce.current != null && e) {
				if (Y || Le(ce.current.getBoundingClientRect().height), le) {
					var t, n;
					Ie((t = (n = ce.current) == null || (n = n.innerText) == null ? void 0 : n.trim()) != null ? t : "");
				}
				window.clearTimeout(Pe.current);
			}
		}, i[2] = Y, i[3] = be, i[4] = Re, i[5] = le, i[6] = we) : we = i[6];
		var Ae;
		i[7] !== Y || i[8] !== be || i[9] !== Re || i[10] !== le || i[11] !== Te ? (Ae = [
			Y,
			be,
			Re,
			Te,
			le
		], i[7] = Y, i[8] = be, i[9] = Re, i[10] = le, i[11] = Te, i[12] = Ae) : Ae = i[12], _(we, Ae);
		var Fe = X != null && X > 0, Oe;
		i[13] !== X || i[14] !== Y || i[15] !== de || i[16] !== Fe || i[17] !== le ? (Oe = function(t) {
			r("nullIntersectionObserverEntryLogger")(t, "IntersectionObserverEntry is null. num_arguments=" + n.length);
			var e = de.getCurrentState().hiddenOrBackgrounded_FIXME;
			if (r("intersectionObserverEntryIsIntersecting")(t)) Fe ? Pe.current = window.setTimeout(function() {
				Le(null);
			}, X) : (window.clearTimeout(Pe.current), Le(null)), ve(!0);
			else if (!e) {
				var o, a = Y ? (o = t == null ? void 0 : t.boundingClientRect) != null ? o : {} : t.target.getBoundingClientRect(), i = a.height, l = a.width;
				if (i > 0 && l > 0 && (ve(!1), Y && Le(i), Fe && (window.clearTimeout(Pe.current), Le(i), le))) {
					var s, u;
					Ie((s = (u = ue.current) == null || (u = u.innerText) == null ? void 0 : u.trim()) != null ? s : "");
				}
			}
		}, i[13] = X, i[14] = Y, i[15] = de, i[16] = Fe, i[17] = le, i[18] = Oe) : Oe = i[18];
		var Be = Oe, We = r("useMutationStableChecker")(Q, ce, C), qe, Ue;
		i[19] === Symbol.for("react.memo_cache_sentinel") ? (qe = function() {
			ge.current && (ge.current = !1);
		}, Ue = [], i[19] = qe, i[20] = Ue) : (qe = i[19], Ue = i[20]), _(qe, Ue);
		var Ve;
		i[21] !== te || i[22] !== se ? (Ve = {
			bottom: se,
			left: te,
			right: te,
			top: se
		}, i[21] = te, i[22] = se, i[23] = Ve) : Ve = i[23];
		var He = Ve, Ge = r("useDynamicVirtualizationMargin.react")(ae, te, se, ee, re), ze = ae ? Ge : He, je;
		i[24] !== re || i[25] !== ($e == null ? void 0 : $e.rootElementRef) ? (je = function() {
			var e = re != null ? re == null ? void 0 : re() : $e == null ? void 0 : $e.rootElementRef.current;
			return e instanceof Element ? e : null;
		}, i[24] = re, i[25] = $e == null ? void 0 : $e.rootElementRef, i[26] = je) : je = i[26];
		var Ke = je, Qe, Xe;
		i[27] !== ze ? (Qe = babelHelpers.extends({}, ze), Xe = babelHelpers.extends({}, ze), i[27] = ze, i[28] = Qe, i[29] = Xe) : (Qe = i[28], Xe = i[29]);
		var Ye;
		i[30] !== Qe || i[31] !== Xe || i[32] !== Ke ? (Ye = {
			root: Ke,
			rootMargin: Qe,
			scrollMargin: Xe,
			threshold: 0
		}, i[30] = Qe, i[31] = Xe, i[32] = Ke, i[33] = Ye) : Ye = i[33];
		var Je = r("useIntersectionObserver")(Be, Ye), Ze = p(r("VirtualizationContext")), et = r("useMergeRefs")(Ze == null ? xe.contentWrapperRef : null, Je, ue, A), tt;
		e: {
			if (!pe && Re !== null && (!j || Re != null && Re > 0) && V !== !1 && (Fe || !be)) {
				var nt;
				i[34] !== Re ? (nt = { minHeight: Re }, i[34] = Re, i[35] = nt) : nt = i[35], tt = nt;
				break e;
			}
			tt = void 0;
		}
		var rt = tt, ot = !be && (Re != null || j === !0), at = y((a = Z.hasScrollAnchoring) != null ? a : null, oe), it = v && at, lt = it ? et : A;
		if (r("gkx")("22947")) {
			var st;
			i[36] === Symbol.for("react.memo_cache_sentinel") ? (st = { className: "x78zum5 xdt5ytf" }, i[36] = st) : st = i[36];
			var ut;
			return i[37] !== c ? (ut = u.jsx("div", babelHelpers.extends({}, st, { children: u.jsx(r("BaseView.react"), { children: c }) })), i[37] = c, i[38] = ut) : ut = i[38], ut;
		}
		var ct;
		i[39] !== N || i[40] !== w ? (ct = function(t) {
			if (N === !0) {
				if (w === !0) {
					if (o("cometVirtualizationPinExclusion").isInteractionExcludedFromPin(t.target) || o("cometVirtualizationPinExclusion").isPortalFocusExcludedFromPin(t.type, t.target, t.currentTarget)) return;
					if (t.type === "focus") {
						fe.current == null || fe.current(), fe.current = o("cometVirtualizationPinExclusion").schedulePinAfterPendingHydration(t.target, function() {
							fe.current = null, _e(!0);
						});
						return;
					}
				}
				_e(!0);
			}
		}, i[39] = N, i[40] = w, i[41] = ct) : ct = i[41];
		var dt = ct, mt;
		i[42] !== M || i[43] !== xe ? (mt = (M != null ? M : !1) && xe.hasFlag("HAS_PLAYER"), i[42] = M, i[43] = xe, i[44] = mt) : mt = i[44];
		var pt = mt, _t;
		i[45] !== it || i[46] !== De || i[47] !== pt || i[48] !== ot || i[49] !== We || i[50] !== pe || i[51] !== V || i[52] !== xe ? (_t = L && it && V === !0 && ot && !pe && !xe.hasPin() && !pt && De && We, i[45] = it, i[46] = De, i[47] = pt, i[48] = ot, i[49] = We, i[50] = pe, i[51] = V, i[52] = xe, i[53] = _t) : _t = i[53];
		var ft = _t;
		xe.onVirtualizationChange(ft);
		var gt;
		i[54] !== it || i[55] !== pt || i[56] !== R || i[57] !== J || i[58] !== ot || i[59] !== pe || i[60] !== xe ? (gt = it && !(R != null && R) && ot && J !== "none" && !pe && !xe.hasPin() && !pt, i[54] = it, i[55] = pt, i[56] = R, i[57] = J, i[58] = ot, i[59] = pe, i[60] = xe, i[61] = gt) : gt = i[61];
		var ht = gt, yt = le && ke !== "";
		if (z) {
			var Ct;
			i[62] !== Ne || i[63] !== ft || i[64] !== Me ? (Ct = (e || (e = r("stylex")))(b.resetBlockFormattingContext, ft ? Me : Ne), i[62] = Ne, i[63] = ft, i[64] = Me, i[65] = Ct) : Ct = i[65];
			var bt;
			i[66] !== yt || i[67] !== ke ? (bt = yt ? u.jsx("div", {
				className: "xqtp20y x6ikm8r x10wlt62 xnalus7",
				children: ke
			}) : null, i[66] = yt, i[67] = ke, i[68] = bt) : bt = i[68];
			var vt;
			i[69] !== T ? (vt = (e || (e = r("stylex"))).props(T), i[69] = T, i[70] = vt) : vt = i[70];
			var St = ft ? "hidden" : "visible", Rt;
			i[71] !== c || i[72] !== St ? (Rt = u.jsx(d, {
				mode: St,
				children: c
			}), i[71] = c, i[72] = St, i[73] = Rt) : Rt = i[73];
			var Lt;
			i[74] !== vt || i[75] !== Rt ? (Lt = u.jsx("div", babelHelpers.extends({}, vt, {
				ref: ce,
				children: Rt
			})), i[74] = vt, i[75] = Rt, i[76] = Lt) : Lt = i[76];
			var Et;
			i[77] !== dt || i[78] !== rt || i[79] !== lt || i[80] !== ft || i[81] !== Ct || i[82] !== bt || i[83] !== Lt || i[84] !== ie ? (Et = u.jsxs("div", {
				className: Ct,
				"data-testid": void 0,
				"data-virtualized": ft,
				onClickCapture: dt,
				onFocusCapture: dt,
				onKeyPressCapture: dt,
				ref: lt,
				style: rt,
				children: [bt, Lt]
			}), i[77] = dt, i[78] = rt, i[79] = lt, i[80] = ft, i[81] = Ct, i[82] = bt, i[83] = Lt, i[84] = ie, i[85] = Et) : Et = i[85];
			var kt;
			return i[86] !== Et || i[87] !== xe ? (kt = u.jsx(r("VirtualizationContext").Provider, {
				value: xe,
				children: Et
			}), i[86] = Et, i[87] = xe, i[88] = kt) : kt = i[88], kt;
		}
		var It;
		i[89] !== Ne || i[90] !== ft || i[91] !== Me ? (It = (e || (e = r("stylex")))(b.resetBlockFormattingContext, ft ? Me : Ne), i[89] = Ne, i[90] = ft, i[91] = Me, i[92] = It) : It = i[92];
		var Tt;
		i[93] !== yt || i[94] !== ke ? (Tt = yt ? u.jsx("div", {
			className: "xqtp20y x6ikm8r x10wlt62 xnalus7",
			children: ke
		}) : null, i[93] = yt, i[94] = ke, i[95] = Tt) : Tt = i[95];
		var Dt;
		i[96] !== c || i[97] !== J || i[98] !== T || i[99] !== ht || i[100] !== ne || i[101] !== ft ? (Dt = J === "legacy" ? u.jsx(r("BaseViewHideable.react"), {
			hidden: ht,
			ref: ce,
			xstyle: [T, ht && b.invisible],
			children: ft ? null : u.jsx(r("HiddenSubtreeContextProvider.react"), {
				isHidden: ht,
				children: c
			})
		}) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(T), {
			ref: ce,
			children: ft ? ne : c
		})), i[96] = c, i[97] = J, i[98] = T, i[99] = ht, i[100] = ne, i[101] = ft, i[102] = Dt) : Dt = i[102];
		var xt;
		i[103] !== dt || i[104] !== rt || i[105] !== lt || i[106] !== ft || i[107] !== It || i[108] !== Tt || i[109] !== Dt || i[110] !== ie ? (xt = u.jsxs("div", {
			className: It,
			"data-testid": void 0,
			"data-virtualized": ft,
			onClickCapture: dt,
			onFocusCapture: dt,
			onKeyPressCapture: dt,
			ref: lt,
			style: rt,
			children: [Tt, Dt]
		}), i[103] = dt, i[104] = rt, i[105] = lt, i[106] = ft, i[107] = It, i[108] = Tt, i[109] = Dt, i[110] = ie, i[111] = xt) : xt = i[111];
		var $t;
		return i[112] !== xt || i[113] !== xe ? ($t = u.jsx(r("VirtualizationContext").Provider, {
			value: xe,
			children: xt
		}), i[112] = xt, i[113] = xe, i[114] = $t) : $t = i[114], $t;
	}
	l.default = E;
}), 98);
