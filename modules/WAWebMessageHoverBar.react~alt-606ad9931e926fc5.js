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
		var t = e.allowTabEscape, n = t === void 0 ? !1 : t, a = e.canAnimateExpand, i = a === void 0 ? !1 : a, l = e.canReact, c = l === void 0 ? !0 : l, _ = e.collapseLabel, f = _ === void 0 ? "less" : _, y = e.disableAutoFocus, C = y === void 0 ? !0 : y, b = e.isExpanded, v = b === void 0 ? !1 : b, S = e.messageSenderDisplayName, R = e.onCollapseEmojiPicker, L = e.onEdit, E = e.onEscape, k = e.onMoreOptions, I = e.onMouseEnter, T = e.onMouseLeave, D = e.onOpenEmojiPicker, x = e.onReaction, $ = e.onReply, P = e.onShiftTabToMenu, N = e.onTabToMenu, M = e.reactions, w = e.reactionsChangeOnExpand, A = w === void 0 ? !0 : w, F = e.rotateFocusArrowsRef, O = e.selectedIndex, B = e.toggleButtonRef, W = p(null), q = F != null ? F : W, U = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled(), V = f === "less" && o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === !0 ? r("WDSIconWdsIcMoodAdd.react") : r("WDSIconIcAdd.react"), H = (function(e) {
			if (Array.isArray(e) && e.length === 2 && e[0] === !1) return V;
			if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === "menu") return r("WDSIconIcMoreVert.react");
			if (Array.isArray(e) && e.length === 2 && e[0] === !0) return r("WDSIconIcChevronLeft.react");
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})([v, f]), G = v ? R : D, z;
		S != null ? z = s._(
			/*BTDS*/
			"",
			[s._param("senderName", S)]
		) : z = s._(
			/*BTDS*/
			""
		);
		var j = (function(e) {
			if (Array.isArray(e) && e.length === 2 && e[0] === !1) return z;
			if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === "menu") return s._(
				/*BTDS*/
				""
			);
			if (Array.isArray(e) && e.length === 2 && e[0] === !0) return s._(
				/*BTDS*/
				""
			);
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})([v, f]), K = i && U, Q = K && A, X = (function(e) {
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
		})([v, f]), Y = M.length, J = G != null ? Y++ : null, Z = $ != null ? Y++ : null, ee = L != null ? Y++ : null, te = k != null ? Y++ : null, ne = function(t) {
			var e;
			return t == null ? null : (e = h[t]) != null ? e : h[h.length - 1];
		};
		m(function() {
			if (C !== !0) {
				var e;
				(e = q.current) == null || e.focusFirst();
			}
		}, [C, q]);
		var re = p(!1), oe = d(function(e) {
			e != null && re.current && (re.current = !1, e.focus());
		}, []), ae = r("useMergeRefs")(B, oe);
		return u.jsx("div", {
			onMouseEnter: I,
			onMouseLeave: T,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: {
					esc: function(t) {
						t.preventDefault(), t.stopPropagation(), E == null || E();
					},
					"shift+tab": n ? null : function(e) {
						e.preventDefault(), e.stopPropagation(), P == null || P();
					},
					tab: n ? null : function(e) {
						e.preventDefault(), e.stopPropagation(), N == null || N();
					}
				},
				tabIndex: null,
				children: u.jsx(r("WAWebKeyboardRotateFocusArrows.react"), {
					ref: q,
					children: u.jsxs(r("WDSMenu.react"), {
						isHorizontalMenu: !0,
						gap: 2,
						children: [
							c && x != null && u.jsxs(u.Fragment, { children: [
								M.map(function(e, t) {
									var n = O != null && t === O;
									return u.jsx(r("WDSButton.react"), {
										Icon: r("WAWebCreateEmojiIcon")(e, 22),
										variant: "borderless",
										size: "small",
										onPress: function() {
											return x(e);
										},
										testid: "hover-bar-reaction-" + t,
										"aria-pressed": n,
										xstyle: [
											n && g.selectedButton,
											Q && g.reactionPopIn,
											Q && ne(t)
										]
									}, A ? t + "-" + String(v) : t);
								}),
								G != null && u.jsx(r("WDSTooltip.react"), {
									label: X,
									children: u.jsx(r("WDSButton.react"), {
										ref: ae,
										Icon: H,
										variant: "borderless",
										size: "small",
										onPress: function() {
											re.current = !0, G();
										},
										"aria-label": j,
										testid: v ? "hover-bar-collapse-reactions" : "hover-bar-emoji-picker",
										xstyle: [K && g.reactionPopIn, K && ne(J)]
									}, String(v))
								}),
								($ != null || L != null || k != null) && u.jsx("div", { className: "x1i1rx1s xxk0z11 x3x0x6p x1wbi8v6 x7g7pl8 x2lah0s" })
							] }),
							$ != null && u.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								children: u.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcReply.react"),
									variant: "borderless",
									size: "small",
									onPress: $,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									testid: "hover-bar-reply",
									xstyle: [K && g.reactionPopIn, K && ne(Z)]
								})
							}),
							L != null && u.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								children: u.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcEdit.react"),
									variant: "borderless",
									size: "small",
									onPress: L,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									testid: "hover-bar-edit",
									xstyle: [K && g.reactionPopIn, K && ne(ee)]
								})
							}),
							k != null && u.jsx(r("WDSTooltip.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								children: u.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcMoreVert.react"),
									variant: "borderless",
									size: "small",
									onPress: k,
									"aria-label": s._(
										/*BTDS*/
										""
									),
									testid: "hover-bar-more-options",
									xstyle: [K && g.reactionPopIn, K && ne(te)]
								})
							})
						]
					})
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
