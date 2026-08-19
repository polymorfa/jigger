__d("WAWebSendReactionsTrayV2.react", [
	"fbt",
	"WAWebCreateEmojiIcon",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardRotateFocusArrows.react",
	"WAWebL10N",
	"WAWebReactionGatingUtils",
	"WAWebReactionUserJourneyLogger",
	"WDSButton.react",
	"WDSGlobalContext",
	"WDSIconIcAdd.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useRef, g = d.useState, h = "__more_reactions__", y = "x1p1bido-B", C = "xekv6nw-B", b = "xpldhdr-B", v = "xhi3f1f-B", S = "x1idb06i-B", R = "x4318q0-B", L = {
		trayContainer: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xuqqiot",
			borderStartEndRadius: "x1lkg3h2",
			borderEndEndRadius: "x17mbzc4",
			borderEndStartRadius: "xcouhex",
			paddingTop: "x1tiyuxx",
			paddingInlineStart: "x181vq82",
			paddingBottom: "xa0aww2",
			paddingInlineEnd: "x1j8ymqv",
			position: "x1n2onr6",
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		trayContainerBackground: {
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_insetInlineStart": "x1682cnc",
			"::before_top": "x1y3wzot",
			"::before_width": "x1rmj1tg",
			"::before_height": "xszcg87",
			"::before_backgroundColor": "x1xkdbmx",
			"::before_boxShadow": "x1gli9xx",
			"::before_borderStartStartRadius": "x13u126r",
			"::before_borderStartEndRadius": "xfd7154",
			"::before_borderEndEndRadius": "x1izptsd",
			"::before_borderEndStartRadius": "xbfqeeh",
			"::before_borderTopColor": "x1wr5goe",
			"::before_borderInlineEndColor": "x71iooo",
			"::before_borderBottomColor": "xkhwigo",
			"::before_borderInlineStartColor": "x4vc7s6",
			"::before_borderTopStyle": "xnvurfn",
			"::before_borderInlineEndStyle": "x1v3rft4",
			"::before_borderBottomStyle": "x1opv7go",
			"::before_borderInlineStartStyle": "x1rovbrg",
			"::before_borderTopWidth": "xm4vf9w",
			"::before_borderInlineEndWidth": "x1ggjbpq",
			"::before_borderBottomWidth": "xu20p9z",
			"::before_borderInlineStartWidth": "x1t6kmxa",
			"::before_zIndex": "xy5mcqj",
			"::before_transform": "x1ox0wv9",
			"::before_animationFillMode": "x4vjblf",
			"::before_willChange": "xmksmyx",
			"::before_animationName": "x9bpk4s",
			"::before_animationDuration": "x11jsb0w",
			"::before_animationTimingFunction": "xihg8qz",
			$$css: !0
		},
		trayContainerAnimateLeft: {
			"::before_transformOrigin": "xfqct0e",
			$$css: !0
		},
		trayContainerAnimateRight: {
			"::before_transformOrigin": "x7awuxw",
			$$css: !0
		},
		trayContainerStatic: {
			backgroundColor: "x16w0wmm",
			boxShadow: "xvktan5",
			borderTopColor: "x1ekq09l",
			borderInlineEndColor: "xlmuga0",
			borderBottomColor: "x54tcbp",
			borderInlineStartColor: "xlzwp1d",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			$$css: !0
		},
		trayClosing: {
			animationName: "x15r5tu9",
			animationDuration: "xbn3cbp",
			animationTimingFunction: "xmgxswx",
			animationFillMode: "x10e4vud",
			$$css: !0
		},
		selectedButton: {
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		}
	}, E = {
		emojiItem: {
			backfaceVisibility: "xlp1x4z",
			transform: "x1cmvv92",
			animationFillMode: "x10e4vud",
			animationName: "xqzvon3",
			animationDuration: "x1khvrug",
			animationTimingFunction: "xygk8lx",
			$$css: !0
		},
		staggerLeft0: {
			animationDelay: "x1k7gots",
			$$css: !0
		},
		staggerLeft1: {
			animationDelay: "x1daqvy5",
			$$css: !0
		},
		staggerLeft2: {
			animationDelay: "xgfvxhe",
			$$css: !0
		},
		staggerLeft3: {
			animationDelay: "x1yvtal6",
			$$css: !0
		},
		staggerLeft4: {
			animationDelay: "x5spour",
			$$css: !0
		},
		staggerLeft5: {
			animationDelay: "x1dr692l",
			$$css: !0
		},
		staggerLeft6: {
			animationDelay: "x12cbgk8",
			$$css: !0
		},
		staggerRight0: {
			animationDelay: "x12cbgk8",
			$$css: !0
		},
		staggerRight1: {
			animationDelay: "x1dr692l",
			$$css: !0
		},
		staggerRight2: {
			animationDelay: "x5spour",
			$$css: !0
		},
		staggerRight3: {
			animationDelay: "x1yvtal6",
			$$css: !0
		},
		staggerRight4: {
			animationDelay: "xgfvxhe",
			$$css: !0
		},
		staggerRight5: {
			animationDelay: "x1daqvy5",
			$$css: !0
		}
	}, k = [
		E.staggerLeft0,
		E.staggerLeft1,
		E.staggerLeft2,
		E.staggerLeft3,
		E.staggerLeft4,
		E.staggerLeft5,
		E.staggerLeft6
	], I = [
		E.staggerRight0,
		E.staggerRight1,
		E.staggerRight2,
		E.staggerRight3,
		E.staggerRight4,
		E.staggerRight5
	];
	function T(t) {
		var n = o("react-compiler-runtime").c(47), a = t.allowTabEscape, i = t.disableAutoFocus, l = t.isMoreSelected, u = t.isParentMsgSentByMe, d = t.onShiftTabToMenu, m = t.onTabToMenu, y = t.reactions, C = t.rotateFocusArrowsRef, b = t.selectedCallback, S = t.selectedIndex, R = t.showMoreOption, T = a === void 0 ? !1 : a, D = i === void 0 ? !1 : i, x = l === void 0 ? !1 : l, $ = u === void 0 ? !1 : u, P = R === void 0 ? !1 : R, N = f(null), M = C != null ? C : N, w = p(o("WDSGlobalContext").WDSContext), A = w.closeAllMenus, F;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled(), n[0] = F) : F = n[0];
		var O = F, B = r("WAWebL10N").isRTL() ? $ : !$, W = g(!1), q = W[0], U = W[1], V = f(null), H;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (H = function() {
			var e = V.current;
			e != null && (V.current = null, e.send(e.reaction));
		}, n[1] = H) : H = n[1];
		var G = H, z, j;
		n[2] !== D || n[3] !== M ? (z = function() {
			if (D !== !0) {
				var e;
				(e = M.current) == null || e.focusFirst();
			}
		}, j = [D, M], n[2] = D, n[3] = M, n[4] = z, n[5] = j) : (z = n[4], j = n[5]), _(z, j), r("useWAWebOnUnmount")(G);
		var K;
		n[6] !== T || n[7] !== A || n[8] !== d ? (K = T ? null : function(e) {
			e.preventDefault(), d != null ? d() : A();
		}, n[6] = T, n[7] = A, n[8] = d, n[9] = K) : K = n[9];
		var Q;
		n[10] !== T || n[11] !== A || n[12] !== m ? (Q = T ? null : function(e) {
			e.preventDefault(), m != null ? m() : A();
		}, n[10] = T, n[11] = A, n[12] = m, n[13] = Q) : Q = n[13];
		var X;
		n[14] !== K || n[15] !== Q ? (X = {
			"shift+tab": K,
			tab: Q
		}, n[14] = K, n[15] = Q, n[16] = X) : X = n[16];
		var Y = X, J;
		n[17] !== A || n[18] !== b ? (J = function() {
			o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.searchOpen(), A(), b(h);
		}, n[17] = A, n[18] = b, n[19] = J) : J = n[19];
		var Z = J, ee;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (ee = function(t) {
			t.animationName === v.toString() && G();
		}, n[20] = ee) : ee = n[20];
		var te = ee, ne;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (ne = s._(
			/*BTDS*/
			""
		), n[21] = ne) : ne = n[21];
		var re;
		n[22] !== B || n[23] !== q ? (re = (e || (e = r("stylex"))).props(L.trayContainer, O ? [
			L.trayContainerBackground,
			B ? L.trayContainerAnimateLeft : L.trayContainerAnimateRight,
			q && L.trayClosing
		] : L.trayContainerStatic), n[22] = B, n[23] = q, n[24] = re) : re = n[24];
		var oe = q ? te : void 0, ae;
		n[25] !== B || n[26] !== A || n[27] !== y || n[28] !== b || n[29] !== S ? (ae = y.map(function(t, n) {
			var o, a = function() {
				if (A(), O) {
					V.current = {
						reaction: t,
						send: b
					}, U(!0);
					return;
				}
				b(t);
			}, i = S != null && n === S, l = B ? k : I;
			return c.jsx("div", babelHelpers.extends({}, O ? (e || (e = r("stylex"))).props(E.emojiItem, (o = l[n]) != null ? o : l[l.length - 1]) : void 0, {
				"data-testid": i ? "selected" : void 0,
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WAWebCreateEmojiIcon")(t),
					variant: "borderless",
					onPress: a,
					testid: "reactions-option-" + n,
					"aria-pressed": i,
					"aria-label": t,
					xstyle: i && L.selectedButton
				}, n)
			}), n);
		}), n[25] = B, n[26] = A, n[27] = y, n[28] = b, n[29] = S, n[30] = ae) : ae = n[30];
		var ie;
		n[31] !== B || n[32] !== Z || n[33] !== x || n[34] !== P ? (ie = P && (O ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xg01cxk x10e4vud x1x7npyb x1e3411s x1ci4q39 x1ooo47y" },
			1: { className: "xg01cxk x10e4vud x1fbm1x7 x1e3411s x1ci4q39 x1ooo47y" }
		}[!!B << 0], { children: c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcAdd.react"),
			variant: "borderless",
			onPress: Z,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"aria-pressed": x,
			xstyle: x && L.selectedButton,
			testid: "reactions-show-more"
		}) })) : c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcAdd.react"),
			variant: "borderless",
			onPress: Z,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"aria-pressed": x,
			xstyle: x && L.selectedButton,
			testid: "reactions-show-more"
		})), n[31] = B, n[32] = Z, n[33] = x, n[34] = P, n[35] = ie) : ie = n[35];
		var le;
		n[36] !== re || n[37] !== oe || n[38] !== ae || n[39] !== ie ? (le = c.jsxs("div", babelHelpers.extends({
			"data-menu-content": !0,
			role: "toolbar",
			"aria-label": ne
		}, re, {
			onAnimationEnd: oe,
			children: [ae, ie]
		})), n[36] = re, n[37] = oe, n[38] = ae, n[39] = ie, n[40] = le) : le = n[40];
		var se;
		n[41] !== M || n[42] !== le ? (se = c.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
			ref: M,
			role: null,
			children: le
		}), n[41] = M, n[42] = le, n[43] = se) : se = n[43];
		var ue;
		return n[44] !== Y || n[45] !== se ? (ue = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: Y,
			tabIndex: null,
			children: se
		}), n[44] = Y, n[45] = se, n[46] = ue) : ue = n[46], ue;
	}
	l.default = T;
}), 226);
