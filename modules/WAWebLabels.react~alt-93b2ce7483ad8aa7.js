__d("WAWebLabels.react", [
	"WAWebEmojiText.react",
	"WAWebIcLabelFilledIcon.react",
	"WAWebLabelCollection",
	"WAWebLabelFilledIcon.react",
	"WAWebLabelGetters",
	"WAWebLabelStackIcon.react",
	"WAWebListIcon.react",
	"WAWebListIconStacked.react",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WDSMargins.stylex",
	"WDSText.react",
	"react",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} }, m = {
		container: {
			display: "x1rg5ohu",
			flexShrink: "x2lah0s",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		name: {
			flexShrink: "x2lah0s",
			fontSize: "x1f6kntn",
			lineHeight: "xggjnk3",
			color: "x14ug900",
			$$css: !0
		},
		labelFilter: {
			maxWidth: "x193iq5w",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		labelFilterWithCount: {
			display: "x78zum5",
			width: "xh8yej3",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		labelFilterIconContainer: {
			display: "x78zum5",
			flexShrink: "x2lah0s",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		labelFilterName: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			lineHeight: "x1o2sk6j",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		drawerTitle: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		drawerTitleIconContainer: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		drawerTitleName: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1jchvi3",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		containerFull: {
			display: "x3nfvp2",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		containerFullCircleIcon: {
			display: "x1rg5ohu",
			flexShrink: "x2lah0s",
			marginTop: "x1y332i5",
			color: "xhslqc4",
			$$css: !0
		},
		circleIconContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x100vrsf",
			height: "x1vqgdyp",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		listIconCircleContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			marginTop: "xav9cv8",
			$$css: !0
		},
		circleIcon: {
			color: "x17t9dm2",
			$$css: !0
		},
		circleIconSVG: {
			width: "xw4jnvo",
			height: "x1qx5ct2",
			$$css: !0
		},
		elipsifyName: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			maxWidth: "xw5ewwj",
			$$css: !0
		},
		labelStackIcon: {
			position: "x10l6tqk",
			top: "xxk6nc9",
			$$css: !0
		},
		listIcon: {
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		listIconStacked: {
			position: "x10l6tqk",
			top: "x1atx4j1",
			marginInlineStart: "x1wbi8v6",
			$$css: !0
		},
		nameWdsPill: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		},
		unreadCount: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		}
	};
	function p(e) {
		if (e.length !== 0) {
			var t = Math.max.apply(Math, e.map(function(e) {
				return parseInt(e, 10);
			}));
			return Number.isNaN(t) ? e[0] : t.toString();
		}
	}
	function _(e) {
		var t = p(e);
		return t == null ? null : o("WAWebLabelCollection").LabelCollection.get(t);
	}
	function f(t) {
		var n = t.color, a = t.iconXstyle, i = t.isListsFeatureEnabled, l = t.name, s = t.renderAsCircle, c = s === void 0 ? !1 : s, p = t.theme, _ = t.unreadCount;
		if (p === "label-pill") return u.jsxs("div", {
			className: "x2lah0s x16dsc37 x3nfvp2 x6s0dn4",
			children: [u.jsx("span", {
				className: "x78zum5 x2lah0s x6s0dn4 xl56j7k xw4jnvo x1qx5ct2",
				children: i === !0 ? u.jsx(r("WAWebListIcon.react"), {
					color: n,
					xstyle: m.listIcon
				}) : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
					width: 18,
					height: 18,
					style: n != null ? { color: n } : {},
					iconXstyle: a,
					xstyle: l != null && m.containerFullCircleIcon
				})
			}), u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "accentEmphasized",
				xstyle: m.nameWdsPill,
				children: l
			})]
		});
		var f = l != null ? u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.name, d.marginInlineStart3, t.theme === "label-filter" && m.labelFilterName, t.theme === "label-filter" && o("WDSMargins.stylex").wdsMargins.marginStart8, t.theme === "drawer-title" && m.drawerTitleName, t.theme === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginStart0, t.theme === "user-profile" && m.elipsifyName, i === !0 && o("WDSMargins.stylex").wdsMargins.marginStart8), { children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }) })) : null, g = p === "label-filter" && i === !0 && _ != null && _ > 0, h = (e || (e = r("stylex")))(l == null && !c && m.container, c && m.containerFull, l != null && !c && m.containerFull, p === "label-filter" && m.labelFilter, p === "drawer-title" && m.drawerTitle, g && m.labelFilterWithCount), y = c && n != null ? { backgroundColor: n } : {}, C = i === !0 ? u.jsx(r("WAWebListIcon.react"), {
			color: n,
			xstyle: m.listIcon
		}) : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
			width: 18,
			height: 18,
			style: n != null ? { color: n } : {},
			iconXstyle: a,
			xstyle: l != null && m.containerFullCircleIcon
		}), b = i === !0 ? u.jsx(r("WAWebListIcon.react"), {
			color: n,
			xstyle: m.listIcon,
			size: 16
		}) : u.jsx(o("WAWebLabelFilledIcon.react").LabelFilledIcon, {
			xstyle: m.circleIcon,
			iconXstyle: m.circleIconSVG
		}), v = c ? b : C;
		return u.jsxs("div", {
			className: h,
			children: [
				u.jsx("div", {
					"data-testid": i === !0 ? null : "label-icon",
					className: e(c && i !== !0 && m.circleIconContainer, c && i === !0 && m.listIconCircleContainer, p === "drawer-title" && m.drawerTitleIconContainer, p === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginEnd20, p === "drawer-title" && o("WDSMargins.stylex").wdsMargins.marginStart4, p === "label-filter" && m.labelFilterIconContainer),
					style: i === !0 ? void 0 : y,
					children: v
				}),
				f,
				g && u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "accentEmphasized",
					xstyle: m.unreadCount,
					children: _
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		"use no forget";
		var t = e.iconXstyle, n = e.isListsFeatureEnabled, a = e.labels, i = e.nameOverride, l = e.renderAsCircle, s = l === void 0 ? !1 : l, d = e.showName, g = d === void 0 ? !1 : d, h = e.theme, y = e.unreadCount, C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), b = c(function() {
			return p(a);
		}, [a]);
		if (o("useWAWebListener").useListener(b != null ? o("WAWebLabelCollection").LabelCollection : null, "label_updated_" + (b != null ? b : ""), C), !o("WAWebListsLabelGatingUtils").canDisplayLabel() && !o("WAWebListsGatingUtils").isListsEnabled()) return null;
		var v = _(a);
		if (!v || !v.name) return null;
		if (a.length === 1) {
			var S = o("WAWebLabelGetters").getHexColor(v), R = g ? i != null ? i : v.name : null;
			return u.jsx(f, {
				color: S,
				name: R,
				renderAsCircle: s,
				theme: h,
				iconXstyle: t,
				unreadCount: y,
				isListsFeatureEnabled: n
			});
		}
		if (n === !0) return u.jsx("div", {
			className: "x1rg5ohu x2lah0s x16dsc37 x1n2onr6 xgd8bvy xxk0z11",
			children: u.jsx(r("WAWebListIconStacked.react"), {
				labelIds: a,
				xstyle: m.listIconStacked
			})
		});
		var L = o("WAWebLabelGetters").getHexColor(v);
		return u.jsxs("div", {
			className: "x1rg5ohu x2lah0s x16dsc37 x1n2onr6 xgd8bvy xxk0z11",
			"data-testid": "label-icon",
			children: [u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, {
				width: 18,
				height: 18,
				style: L != null ? { color: L } : {},
				iconXstyle: t,
				xstyle: m.labelStackIcon
			}), u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
				width: 18,
				height: 18,
				iconXstyle: t,
				xstyle: m.labelStackIcon
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.getVisibleLabelId = p, l.Label = f, l.Labels = g;
}), 98);
