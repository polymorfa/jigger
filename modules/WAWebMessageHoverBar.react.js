__d("WAWebMessageHoverBar.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCreateEmojiIcon",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebReactionGatingUtils",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcReply.react",
	"WDSIconWdsIcMoodAdd.react",
	"WDSMenu.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useLayoutEffect, p = c.useRef, _ = "x1x8a09s-B", f = "xekv6nw-B", g = {
		selectedButton: {
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		reactionPopIn: {
			animationName: "x6rgwf7",
			animationDuration: "x1p1cywj x1ddz9gh",
			animationTimingFunction: "x1j02p76",
			animationFillMode: "x1u6ievf",
			$$css: !0
		},
		reactionStagger0: {
			animationDelay: "x1k7gots",
			$$css: !0
		},
		reactionStagger1: {
			animationDelay: "xkgrfdk",
			$$css: !0
		},
		reactionStagger2: {
			animationDelay: "x9ch8kx",
			$$css: !0
		},
		reactionStagger3: {
			animationDelay: "xrfifu6",
			$$css: !0
		},
		reactionStagger4: {
			animationDelay: "x7nwlfj",
			$$css: !0
		},
		reactionStagger5: {
			animationDelay: "x1a0zpit",
			$$css: !0
		}
	}, h = [
		g.reactionStagger0,
		g.reactionStagger1,
		g.reactionStagger2,
		g.reactionStagger3,
		g.reactionStagger4,
		g.reactionStagger5
	];
	function y(e) {
		var t = o("react-compiler-runtime").c(81), n = e.allowTabEscape, a = e.canAnimateExpand, i = e.canReact, l = e.collapseLabel, c = e.disableAutoFocus, d = e.isExpanded, _ = e.messageSenderDisplayName, f = e.onCollapseEmojiPicker, h = e.onEdit, y = e.onEscape, v = e.onMoreOptions, S = e.onMouseEnter, R = e.onMouseLeave, L = e.onOpenEmojiPicker, E = e.onReaction, k = e.onReply, I = e.onShiftTabToMenu, T = e.onTabToMenu, D = e.reactions, x = e.reactionsChangeOnExpand, $ = e.rotateFocusArrowsRef, P = e.selectedIndex, N = e.toggleButtonRef, M = n === void 0 ? !1 : n, w = a === void 0 ? !1 : a, A = i === void 0 ? !0 : i, F = l === void 0 ? "less" : l, O = c === void 0 ? !0 : c, B = d === void 0 ? !1 : d, W = x === void 0 ? !0 : x, q = p(null), U = $ != null ? $ : q, V;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (V = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled(), t[0] = V) : V = t[0];
		var H = V, G = F === "less" && o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === !0 ? r("WDSIconWdsIcMoodAdd.react") : r("WDSIconIcAdd.react"), z;
		t[1] !== G ? (z = function(t) {
			if (Array.isArray(t) && t.length === 2 && t[0] === !1) return G;
			if (Array.isArray(t) && t.length === 2 && t[0] === !0 && t[1] === "menu") return r("WDSIconIcMoreVert.react");
			if (Array.isArray(t) && t.length === 2 && t[0] === !0) return r("WDSIconIcChevronLeft.react");
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}, t[1] = G, t[2] = z) : z = t[2];
		var j;
		t[3] !== F || t[4] !== B ? (j = [B, F], t[3] = F, t[4] = B, t[5] = j) : j = t[5];
		var K;
		t[6] !== j || t[7] !== z ? (K = z(j), t[6] = j, t[7] = z, t[8] = K) : K = t[8];
		var Q = K, X = B ? f : L, Y;
		if (t[9] !== F || t[10] !== B || t[11] !== _) {
			var J;
			_ != null ? J = s._(
				/*BTDS*/
				"",
				[s._param("senderName", _)]
			) : J = s._(
				/*BTDS*/
				""
			);
			var Z;
			t[13] !== F || t[14] !== B ? (Z = [B, F], t[13] = F, t[14] = B, t[15] = Z) : Z = t[15], Y = (function(e) {
				if (Array.isArray(e) && e.length === 2 && e[0] === !1) return J;
				if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === "menu") return s._(
					/*BTDS*/
					""
				);
				if (Array.isArray(e) && e.length === 2 && e[0] === !0) return s._(
					/*BTDS*/
					""
				);
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
			})(Z), t[9] = F, t[10] = B, t[11] = _, t[12] = Y;
		} else Y = t[12];
		var ee = Y, te = w && H, ne = te && W, re;
		t[16] !== F || t[17] !== B ? (re = b([B, F]), t[16] = F, t[17] = B, t[18] = re) : re = t[18];
		var oe = re, ae = D.length, ie = X != null ? ae++ : null, le = k != null ? ae++ : null, se = h != null ? ae++ : null, ue = v != null ? ae++ : null, ce = C, de, me;
		t[19] !== O || t[20] !== U ? (de = function() {
			if (O !== !0) {
				var e;
				(e = U.current) == null || e.focusFirst();
			}
		}, me = [O, U], t[19] = O, t[20] = U, t[21] = de, t[22] = me) : (de = t[21], me = t[22]), m(de, me);
		var pe = p(!1), _e;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (_e = function(t) {
			t != null && pe.current && (pe.current = !1, t.focus());
		}, t[23] = _e) : _e = t[23];
		var fe = _e, ge = r("useMergeRefs")(N, fe), he;
		t[24] !== y ? (he = function(t) {
			t.preventDefault(), t.stopPropagation(), y == null || y();
		}, t[24] = y, t[25] = he) : he = t[25];
		var ye;
		t[26] !== M || t[27] !== I ? (ye = M ? null : function(e) {
			e.preventDefault(), e.stopPropagation(), I == null || I();
		}, t[26] = M, t[27] = I, t[28] = ye) : ye = t[28];
		var Ce;
		t[29] !== M || t[30] !== T ? (Ce = M ? null : function(e) {
			e.preventDefault(), e.stopPropagation(), T == null || T();
		}, t[29] = M, t[30] = T, t[31] = Ce) : Ce = t[31];
		var be;
		t[32] !== he || t[33] !== ye || t[34] !== Ce ? (be = {
			esc: he,
			"shift+tab": ye,
			tab: Ce
		}, t[32] = he, t[33] = ye, t[34] = Ce, t[35] = be) : be = t[35];
		var ve;
		t[36] !== te || t[37] !== ne || t[38] !== A || t[39] !== ee || t[40] !== X || t[41] !== Q || t[42] !== oe || t[43] !== B || t[44] !== ge || t[45] !== h || t[46] !== v || t[47] !== E || t[48] !== k || t[49] !== D || t[50] !== W || t[51] !== P || t[52] !== ie ? (ve = A && E != null && u.jsxs(u.Fragment, { children: [
			D.map(function(e, t) {
				var n = P != null && t === P;
				return u.jsx(r("WDSButton.react"), {
					Icon: r("WAWebCreateEmojiIcon")(e, 22),
					variant: "borderless",
					size: "small",
					onPress: function() {
						return E(e);
					},
					testid: "hover-bar-reaction-" + t,
					"aria-pressed": n,
					xstyle: [
						n && g.selectedButton,
						ne && g.reactionPopIn,
						ne && ce(t)
					]
				}, W ? t + "-" + String(B) : t);
			}),
			X != null && u.jsx(r("WDSTooltip.react"), {
				label: oe,
				children: u.jsx(r("WDSButton.react"), {
					ref: ge,
					Icon: Q,
					variant: "borderless",
					size: "small",
					onPress: function() {
						pe.current = !0, X();
					},
					"aria-label": ee,
					testid: B ? "hover-bar-collapse-reactions" : "hover-bar-emoji-picker",
					xstyle: [te && g.reactionPopIn, te && ce(ie)]
				}, String(B))
			}),
			(k != null || h != null || v != null) && u.jsx("div", { className: "x1i1rx1s xxk0z11 x3x0x6p x1wbi8v6 x7g7pl8 x2lah0s" })
		] }), t[36] = te, t[37] = ne, t[38] = A, t[39] = ee, t[40] = X, t[41] = Q, t[42] = oe, t[43] = B, t[44] = ge, t[45] = h, t[46] = v, t[47] = E, t[48] = k, t[49] = D, t[50] = W, t[51] = P, t[52] = ie, t[53] = ve) : ve = t[53];
		var Se;
		t[54] !== te || t[55] !== k || t[56] !== le ? (Se = k != null && u.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcReply.react"),
				variant: "borderless",
				size: "small",
				onPress: k,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				testid: "hover-bar-reply",
				xstyle: [te && g.reactionPopIn, te && ce(le)]
			})
		}), t[54] = te, t[55] = k, t[56] = le, t[57] = Se) : Se = t[57];
		var Re;
		t[58] !== te || t[59] !== se || t[60] !== h ? (Re = h != null && u.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcEdit.react"),
				variant: "borderless",
				size: "small",
				onPress: h,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				testid: "hover-bar-edit",
				xstyle: [te && g.reactionPopIn, te && ce(se)]
			})
		}), t[58] = te, t[59] = se, t[60] = h, t[61] = Re) : Re = t[61];
		var Le;
		t[62] !== te || t[63] !== ue || t[64] !== v ? (Le = v != null && u.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcMoreVert.react"),
				variant: "borderless",
				size: "small",
				onPress: v,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				testid: "hover-bar-more-options",
				xstyle: [te && g.reactionPopIn, te && ce(ue)]
			})
		}), t[62] = te, t[63] = ue, t[64] = v, t[65] = Le) : Le = t[65];
		var Ee;
		t[66] !== ve || t[67] !== Se || t[68] !== Re || t[69] !== Le ? (Ee = u.jsxs(r("WDSMenu.react"), {
			isHorizontalMenu: !0,
			gap: 2,
			children: [
				ve,
				Se,
				Re,
				Le
			]
		}), t[66] = ve, t[67] = Se, t[68] = Re, t[69] = Le, t[70] = Ee) : Ee = t[70];
		var ke;
		t[71] !== U || t[72] !== Ee ? (ke = u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
			ref: U,
			children: Ee
		}), t[71] = U, t[72] = Ee, t[73] = ke) : ke = t[73];
		var Ie;
		t[74] !== be || t[75] !== ke ? (Ie = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: be,
			tabIndex: null,
			children: ke
		}), t[74] = be, t[75] = ke, t[76] = Ie) : Ie = t[76];
		var Te;
		return t[77] !== S || t[78] !== R || t[79] !== Ie ? (Te = u.jsx("div", {
			onMouseEnter: S,
			onMouseLeave: R,
			children: Ie
		}), t[77] = S, t[78] = R, t[79] = Ie, t[80] = Te) : Te = t[80], Te;
	}
	function C(e) {
		var t;
		return e == null ? null : (t = h[e]) != null ? t : h[h.length - 1];
	}
	function b(e) {
		if (Array.isArray(e) && e.length === 2 && e[0] === !1) return s._(
			/*BTDS*/
			""
		);
		if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === "menu") return s._(
			/*BTDS*/
			""
		);
		if (Array.isArray(e) && e.length === 2 && e[0] === !0) return s._(
			/*BTDS*/
			""
		);
		throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
	}
	l.default = y;
}), 226);
