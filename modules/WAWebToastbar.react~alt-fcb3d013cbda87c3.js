__d("WAWebToastbar.react", [
	"fbt",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WAWebVelocityTransitionGroup",
	"WDSFocusStateStyles",
	"WDSIconIcClose.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"react",
	"useHoverState",
	"useWAWebFocusState"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = {
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineStart13: {
			marginInlineStart: "x2kejxg",
			$$css: !0
		}
	}, m = 24, p = {
		container: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			zIndex: "xoz0ns6",
			width: "xh8yej3",
			backgroundColor: "x1280gxy",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		childrenContainer: {
			display: "x3nfvp2",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.alwaysShowDismissBtn, n = e.children, a = e.childrenXStyle, i = e.dismissible, l = e.dismissXstyle, _ = e.hidden, f = _ === void 0 ? !1 : _, g = e.onClick, h = e.onDismiss, y = e.wrapperXstyle, C = c(!1), b = C[0], v = C[1], S = r("useHoverState")(), R = S.isHovered, L = S.onMouseEnter, E = S.onMouseLeave, k = r("useWAWebFocusState")(), I = k[0], T = k[1], D = r("useWAWebFocusState")(), x = D[0], $ = D[1], P = s._(
			/*BTDS*/
			""
		), N = u.jsx(r("WDSTooltip.react"), {
			label: P,
			children: u.jsx(r("WDSIconIcClose.react"), {
				height: m,
				"aria-label": P,
				xstyle: p.icon
			})
		}), M = null;
		if (!b && !f) {
			var w = !t && !R && !T && !$ ? null : u.jsx(o("WAWebClickable.react").Clickable, {
				ref: x,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				onClick: function(t) {
					t == null || t.preventDefault(), t == null || t.stopPropagation(), v(!0), h == null || h();
				},
				children: N
			});
			M = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				xstyle: [
					o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
					d.paddingBottom10,
					p.container,
					y
				],
				children: [u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						d.marginInlineStart13,
						p.childrenContainer,
						T && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
						a
					],
					align: "center",
					justify: "center",
					grow: 1,
					children: n
				}), i === !0 && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd20, l],
					grow: 0,
					shrink: 0,
					basis: m,
					children: u.jsx(r("WAWebVelocityTransitionGroup"), {
						transitionName: "noop",
						children: w
					})
				})]
			});
		}
		var A = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onMouseEnter: L,
			onMouseLeave: E,
			children: u.jsx(r("WAWebVelocityTransitionGroup"), {
				component: "div",
				transitionName: "toast-transition",
				children: M
			})
		});
		return M != null ? u.jsx(o("WAWebClickable.react").Clickable, {
			ref: I,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			onClick: g,
			children: A
		}) : A;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
