__d("WAWebChatInfoDrawerRow.react", [
	"WAWebChatInfoDrawerBlock.react",
	"WAWebChevronIcon.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"icon",
		"secondaryTitle",
		"side",
		"spaced",
		"title",
		"xstyle"
	], s = [
		"containerXstyle",
		"icon",
		"secondaryTitle",
		"side",
		"title",
		"xstyle"
	], u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		marginInlineEnd14: {
			marginInlineEnd: "x1my54xf",
			$$css: !0
		},
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInline10: {
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineStart14: {
			marginInlineStart: "xcev3uh",
			$$css: !0
		}
	}, g = {
		iconContainer: {
			marginInlineEnd: "x1xegmmw",
			width: "x100vrsf",
			height: "xxk0z11",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainerRefreshed: {
			width: "x100vrsf",
			height: "x16wdlz0",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			color: "xhslqc4",
			$$css: !0
		},
		contentRefreshed: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minWidth: "xeuugli",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		drawerSide: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			width: "x14qfxbe",
			$$css: !0
		},
		drawerSideRefreshed: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		hoverStateRefreshed: {
			borderStartStartRadius: "x7zqoo0",
			borderStartEndRadius: "xt1g1te",
			borderEndEndRadius: "x1iz9ej4",
			borderEndStartRadius: "x1ga13z8",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		suppressOutlineRefreshed: {
			backgroundColor: "xjbqb8w",
			outlineStyle: "xi5y0ii",
			$$css: !0
		},
		focusOffsetInset: {
			outlineOffset: "x9gec7p",
			outlineWidth: "xgf5m5d",
			$$css: !0
		}
	};
	function h(e) {
		var t = e.title;
		return d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: t });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.testid, n = e.title;
		return d.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			testid: t,
			children: n
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.children, n = e.hasSecondaryTitle, r = e.isRefresh;
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: r === !0 ? [
				g.iconContainerRefreshed,
				n === !0 && f.paddingTop5,
				f.marginInlineEnd14
			] : g.iconContainer,
			children: t
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n = t.icon, o = t.secondaryTitle, a = t.side, i = t.spaced, l = i === void 0 ? !1 : i, s = t.title, u = t.xstyle, c = babelHelpers.objectWithoutPropertiesLoose(t, e), m = S({
			icon: n,
			title: s,
			rightSide: a
		});
		return d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({ xstyle: u }, c, {
			multiline: !0,
			children: d.jsxs("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "xymharo x2pibh5" }
			}[!!l << 0], { children: [m, d.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "x19wmrak x2pibh5" }
			}[(m != null) << 0], { children: o }))] }))
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.containerXstyle, n = e.icon, a = e.secondaryTitle, i = e.side, l = e.title, c = e.xstyle, m = babelHelpers.objectWithoutPropertiesLoose(e, s), h = m.onClick != null, y = r("useWAWebIsKeyboardUser")(), b = y.isKeyboardUser, v = p(null), S = _(!1), R = S[0], L = S[1], E = h && b && R;
		return d.jsx("div", {
			ref: v,
			role: "none",
			onFocus: function() {
				return L(!0);
			},
			onBlur: function(t) {
				var e = t.relatedTarget;
				v.current != null && (!(e instanceof Element) || !v.current.contains(e)) && L(!1);
			},
			children: d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({
				isRefresh: !0,
				multiline: !0,
				xstyle: [c, h && g.suppressOutlineRefreshed]
			}, m, { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor20, f.paddingBlock10, f.marginInline10, h && g.hoverStateRefreshed, E && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, E && g.focusOffsetInset, t), { children: d.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "stretch",
				children: [
					n != null ? d.jsx(C, {
						hasSecondaryTitle: a != null,
						isRefresh: !0,
						children: n
					}) : null,
					d.jsxs(o("WAWebFlex.react").FlexColumn, {
						grow: 1,
						children: [d.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							className: u([g.contentRefreshed, a == null && [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, f.paddingBottom10]]),
							grow: 1,
							children: l
						}), d.jsx(o("WAWebFlex.react").FlexRow, { children: a })]
					}),
					d.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "end",
						xstyle: [g.drawerSideRefreshed, f.marginInlineStart14],
						children: i
					})
				]
			}) })) }))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.icon, n = e.rightSide, r = e.title;
		if (t == null && r == null && n == null) return null;
		var a = n != null ? n : "";
		a === "chevron" && (a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: g.secondaryColor,
			directional: !0,
			height: 21
		}));
		var i = t != null ? d.jsx(C, { children: t }) : null;
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			children: [
				i,
				d.jsx("div", {
					className: "x1iyjqo2 xs83m0k xeuugli x1mzt3pk x1u7k74",
					children: r
				}),
				d.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "end",
					xstyle: g.drawerSide,
					children: a
				})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.DrawerRowTitleRefreshed = h, l.DrawerRowSecondaryTitleRefreshed = y, l.ChatInfoDrawerRow = b, l.ChatInfoDrawerRowRefreshed = v;
}), 98);
