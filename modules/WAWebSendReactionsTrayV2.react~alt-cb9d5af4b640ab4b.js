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
		var n = t.allowTabEscape, a = n === void 0 ? !1 : n, i = t.disableAutoFocus, l = i === void 0 ? !1 : i, u = t.isMoreSelected, d = u === void 0 ? !1 : u, y = t.isParentMsgSentByMe, C = y === void 0 ? !1 : y, b = t.onShiftTabToMenu, S = t.onTabToMenu, R = t.reactions, T = t.rotateFocusArrowsRef, D = t.selectedCallback, x = t.selectedIndex, $ = t.showMoreOption, P = $ === void 0 ? !1 : $, N = f(null), M = T != null ? T : N, w = p(o("WDSGlobalContext").WDSContext), A = w.closeAllMenus, F = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled(), O = r("WAWebL10N").isRTL() ? C : !C, B = g(!1), W = B[0], q = B[1], U = f(null), V = m(function() {
			var e = U.current;
			e != null && (U.current = null, e.send(e.reaction));
		}, []);
		_(function() {
			if (l !== !0) {
				var e;
				(e = M.current) == null || e.focusFirst();
			}
		}, [l, M]), r("useWAWebOnUnmount")(V);
		var H = {
			"shift+tab": a ? null : function(e) {
				e.preventDefault(), b != null ? b() : A();
			},
			tab: a ? null : function(e) {
				e.preventDefault(), S != null ? S() : A();
			}
		}, G = function() {
			o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.searchOpen(), A(), D(h);
		}, z = m(function(e) {
			e.animationName === v.toString() && V();
		}, [V]);
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: H,
			tabIndex: null,
			children: c.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
				ref: M,
				role: null,
				children: c.jsxs("div", babelHelpers.extends({
					"data-menu-content": !0,
					role: "toolbar",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				}, (e || (e = r("stylex"))).props(L.trayContainer, F ? [
					L.trayContainerBackground,
					O ? L.trayContainerAnimateLeft : L.trayContainerAnimateRight,
					W && L.trayClosing
				] : L.trayContainerStatic), {
					onAnimationEnd: W ? z : void 0,
					children: [R.map(function(t, n) {
						var o, a = function() {
							if (A(), F) {
								U.current = {
									reaction: t,
									send: D
								}, q(!0);
								return;
							}
							D(t);
						}, i = x != null && n === x, l = O ? k : I;
						return c.jsx("div", babelHelpers.extends({}, F ? (e || (e = r("stylex"))).props(E.emojiItem, (o = l[n]) != null ? o : l[l.length - 1]) : void 0, {
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
					}), P && (F ? c.jsx("div", babelHelpers.extends({}, {
						0: { className: "xg01cxk x10e4vud x1x7npyb x1e3411s x1ci4q39 x1ooo47y" },
						1: { className: "xg01cxk x10e4vud x1fbm1x7 x1e3411s x1ci4q39 x1ooo47y" }
					}[!!O << 0], { children: c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						variant: "borderless",
						onPress: G,
						"aria-label": s._(
							/*BTDS*/
							""
						),
						"aria-pressed": d,
						xstyle: d && L.selectedButton,
						testid: "reactions-show-more"
					}) })) : c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						variant: "borderless",
						onPress: G,
						"aria-label": s._(
							/*BTDS*/
							""
						),
						"aria-pressed": d,
						xstyle: d && L.selectedButton,
						testid: "reactions-show-more"
					}))]
				}))
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
