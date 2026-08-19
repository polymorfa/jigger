__d("WAWebVoipSplitButton.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WAWebVoipSplitButtonSurface",
	"WAWebVoipUiPopoutWindowContext",
	"WDSIconIcArrowDropDown.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = {
		splitButton: {
			backgroundColor: "x1od0jb8",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			cursor: "x1ypdohk",
			height: "x1vqgdyp",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			color: "x17t9dm2",
			$$css: !0
		},
		splitButtonSmall: {
			height: "x10w6t97",
			$$css: !0
		},
		mutedSplitButton: {
			backgroundColor: "x1p8t8ri",
			color: "x1lljey2",
			$$css: !0
		},
		lightSplitButton: {
			backgroundColor: "x1od0jb8",
			borderTopColor: "x18aof6w",
			borderInlineEndColor: "xoz6bk6",
			borderBottomColor: "x1ct8bjc",
			borderInlineStartColor: "x357qen",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			color: "xuwfzo9",
			height: "xt7dq6l",
			$$css: !0
		},
		lightMutedSplitButton: {
			backgroundColor: "x1e6sl3u",
			borderTopColor: "x18aof6w",
			borderInlineEndColor: "xoz6bk6",
			borderBottomColor: "x1ct8bjc",
			borderInlineStartColor: "x357qen",
			color: "x17t9dm2",
			$$css: !0
		},
		lightSplitButtonLeft: {
			height: "xt7dq6l",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1uc92m",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		lightSplitButtonRight: {
			height: "xt7dq6l",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x181vq82",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		splitButtonLeft: {
			borderStartStartRadius: "xt8t1vi",
			borderEndStartRadius: "x15urzxu",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			height: "x1vqgdyp",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		splitButtonLeftSmall: {
			height: "x10w6t97",
			paddingInlineEnd: "x1j8ymqv",
			$$css: !0
		},
		splitButtonRight: {
			borderStartStartRadius: "x1bczwif",
			borderEndStartRadius: "x11o6v7j",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			height: "x1vqgdyp",
			width: "xezivpi",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		splitButtonRightSmall: {
			height: "x10w6t97",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		disabled: {
			opacity: "xti2d7y",
			cursor: "x1h6gzvc",
			$$css: !0
		},
		buttonBase: {
			alignItems: "x6s0dn4",
			backgroundColor: "xjbqb8w",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		buttonHover: {
			":hover_backgroundColor": "x1k5h0tu",
			$$css: !0
		},
		focusInner: {
			":focus-visible_outlineOffset": "xyu9ima",
			":focus-visible_outlineWidth": "x100v1rl",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.Icon, n = e.disabled, a = n === void 0 ? !1 : n, i = e.disableDropdownButton, l = i === void 0 ? !1 : i, d = e.disableMainButton, m = d === void 0 ? !1 : d, p = e.dropdownButtonLabel, _ = e.dropdownButtonTestId, f = e.dropdownRef, g = e.isMuted, h = g === void 0 ? !1 : g, y = e.mainButtonLabel, C = e.mainButtonTestId, b = e.onDropdownClick, v = e.onMainClick, S = e.surface, R = S === void 0 ? o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_UI : S, L = e.testId, E = e.tooltipOwnerAnchorRef, k = e.tooltipOwnerDocument, I = u(r("WAWebVoipUiPopoutWindowContext")), T = I.isContextInPopoutWindow && !I.isDocPip, D = R === o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_LINK_LANDING_PAGE, x = T ? 24 : 20;
		return s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x3oybdh x11xpdln x13t8fmb xum2xem" },
			2: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xlbypd8" },
			1: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xm9wxh" },
			3: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xlbypd8 xm9wxh" }
		}[!a << 1 | !!h << 0], { children: s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			role: "group",
			"aria-label": y,
			xstyle: [
				c.splitButton,
				!T && !D && c.splitButtonSmall,
				D && c.lightSplitButton,
				h && (D ? c.lightMutedSplitButton : c.mutedSplitButton),
				a && c.disabled
			],
			testid: L,
			children: [s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				shrink: 0,
				children: s.jsx(r("WDSTooltip.react"), {
					label: y,
					ownerAnchorRef: E,
					ownerDocument: k,
					children: s.jsx(r("WAWebUnstyledButton.react"), {
						testid: C,
						disabled: a || m,
						onClick: v,
						xstyle: [
							c.buttonBase,
							c.splitButtonLeft,
							!T && !D && c.splitButtonLeftSmall,
							D && c.lightSplitButtonLeft,
							!a && !m && c.buttonHover,
							!a && m && c.disabled,
							c.focusInner
						],
						"aria-label": y,
						children: s.jsx(t, {
							height: x,
							width: x
						})
					})
				})
			}), s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 0,
				shrink: 0,
				basis: "auto",
				children: s.jsx(r("WDSTooltip.react"), {
					label: p,
					ownerAnchorRef: E,
					ownerDocument: k,
					children: s.jsx(r("WAWebUnstyledButton.react"), {
						testid: _,
						disabled: a || l,
						onClick: b,
						xstyle: [
							c.buttonBase,
							c.splitButtonRight,
							!T && !D && c.splitButtonRightSmall,
							D && c.lightSplitButtonRight,
							!a && !l && c.buttonHover,
							!a && l && c.disabled,
							c.focusInner
						],
						ref: f,
						"aria-label": p,
						children: s.jsx(r("WDSIconIcArrowDropDown.react"), {
							height: x,
							width: x
						})
					})
				})
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
