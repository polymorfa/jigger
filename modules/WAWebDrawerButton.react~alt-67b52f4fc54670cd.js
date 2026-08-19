__d("WAWebDrawerButton.react", [
	"WAWebL10N",
	"WAWebL10NFbtTypeUtils",
	"WAWebPopoverContext.react",
	"WAWebText.react",
	"WAWebTooltip.react",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebActiveSelection",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e = ["active", "id"], s = ["ref"], u, c, d = c || (c = o("react")), m = c.useRef, p = {
		container: {
			position: "x1n2onr6",
			display: "x78zum5",
			flexShrink: "x2lah0s",
			alignItems: "x6s0dn4",
			height: "xng8ra",
			backgroundColor: "x1280gxy x1ubxc9n xbmkbis",
			$$css: !0
		},
		containerActive: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		containerDisabled: {
			cursor: "x1h6gzvc",
			color: "xhslqc4",
			opacity: "xbyyjgo",
			backgroundColor: "x1280gxy xlqxigy x26lcah",
			$$css: !0
		},
		containerSecondaryText: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		containerNoIcon: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		},
		containerListAligned: {
			paddingInlineStart: "xsdj86q",
			$$css: !0
		},
		containerThemeChatInfo: {
			borderStartStartRadius: "xfql6rm",
			borderStartEndRadius: "x1fno2u7",
			borderEndEndRadius: "x1ovzc0u",
			borderEndStartRadius: "xb66en5",
			height: "xt7dq6l",
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			paddingTop: "x889kno",
			paddingInlineEnd: "x1xnnf8n",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x106a9eq",
			backgroundColor: "x1280gxy x1n67ipk x1aiwb2g",
			$$css: !0
		},
		containerThemeChatlist: {
			paddingInlineStart: "xaso8d8",
			$$css: !0
		},
		containerThemeBizToolsSecondary: {
			paddingBottom: "x1l90r2v",
			paddingTop: "xyamay9",
			$$css: !0
		},
		roundedContainer: {
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			":hover_backgroundColor": "x17gydlx",
			":focus_backgroundColor": "x1jsj9aw",
			$$css: !0
		},
		bizToolsFlexibleHeight: {
			minHeight: "x1gg8mnh",
			height: "xt7dq6l",
			$$css: !0
		},
		icon: {
			display: "x78zum5",
			flexShrink: "x2lah0s",
			justifyContent: "xl56j7k",
			color: "xhslqc4",
			$$css: !0
		},
		iconWidth: {
			width: "x7mnju",
			$$css: !0
		},
		iconPadding: {
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		iconDanger: {
			color: "x30a034",
			$$css: !0
		},
		iconSuccess: {
			color: "x1du590y",
			$$css: !0
		},
		iconAccent: {
			color: "x1v5yvga",
			$$css: !0
		},
		iconThemeChatInfo: {
			marginInlineEnd: "x1my54xf",
			width: "x100vrsf",
			$$css: !0
		},
		bodyContainer: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "xdl72j9",
			alignItems: "x6s0dn4",
			height: "x5yr21d",
			paddingInlineEnd: "x5zjp28",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		bodyContainerDivider: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		bodyContainerHasDetail: {
			paddingInlineEnd: "xx281p9",
			$$css: !0
		},
		bodyContainerSecondaryText: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		bodyContainerThemeChatInfo: {
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		bodyContainerSecondaryThemeBizTools: {
			paddingBottom: "x18d9i69",
			paddingTop: "xexx8yu",
			$$css: !0
		},
		detail: {
			position: "x10l6tqk",
			insetInlineEnd: "x1xdxbdd",
			$$css: !0
		}
	};
	function _(e) {
		switch (e) {
			case "danger": return "critical";
			case "success": return "success";
			case "accent": return "teal";
			case "dark": return "primary";
			default: return "primary";
		}
	}
	var f = 350;
	function g(t) {
		var n = t.active, o = t.id, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = r("useWAWebActiveSelection")(n, o || ""), l = i[0], s = i[1];
		return d.jsx(h, babelHelpers.extends({}, a, {
			active: s,
			ref: l
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s), a = n.active, i = n.ariaLabel, l = n.children, c = n.className, g = n.detail, h = n.disabled, y = h === void 0 ? !1 : h, C = n.divider, b = C === void 0 ? !1 : C, v = n.icon, S = n.onClick, R = n.secondaryChildren, L = n.testid, E = n.theme, k = n.title, I = n.tooltip, T = n.useRoundedStyle, D = T === void 0 ? !1 : T, x = n.xstyle, $ = n.xstyleSecondary, P = r("useWAWebStaticButtonA11y")(S, { disabled: y }), N = P[0], M = P[1], w = r("useMergeRefs")(N, t), A = y ? void 0 : n.color, F = v != null ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.icon, !D && p.iconWidth, D && p.iconPadding, A === "danger" && p.iconDanger, A === "success" && p.iconSuccess, A === "accent" && p.iconAccent, E === "chat-info" && p.iconThemeChatInfo, n.iconXstyle), { children: v })) : null, O = (u || (u = r("stylex")))(p.container, a === !0 && p.containerActive, !v && p.containerNoIcon, E === "list-aligned" && p.containerListAligned, E === "chatlist" && p.containerThemeChatlist, R != null && p.containerSecondaryText, E === "biz-tools" && R != null && p.containerThemeBizToolsSecondary, E === "biz-tools" && p.bizToolsFlexibleHeight, E === "chat-info" && p.containerThemeChatInfo, D === !0 && p.roundedContainer, y === !0 && p.containerDisabled, x), B = c != null ? O + " " + c : O, W = o("WAWebL10NFbtTypeUtils").isStringOrFbt(l) ? l : null, q = i != null ? i : W, U = m(null), V = I != null ? d.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
			targetRef: U,
			popover: d.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
				targetRef: "context",
				alignment: r("WAWebL10N").isRTL() ? o("WAWebTooltip.react").PopoverAlignment.End : o("WAWebTooltip.react").PopoverAlignment.Start,
				position: o("WAWebTooltip.react").PopoverPosition.Bottom,
				openingDelay: f,
				children: I
			})
		}) : null;
		return d.jsxs("div", babelHelpers.extends({}, M, {
			className: B,
			"data-ignore-capture": "any",
			"data-testid": L,
			ref: w,
			title: k,
			"aria-label": q,
			children: [F, d.jsxs("div", babelHelpers.extends({ ref: U }, u.props(p.bodyContainer, (b || E === "chatlist") && p.bodyContainerDivider, R != null && p.bodyContainerSecondaryText, g != null && !D && p.bodyContainerHasDetail, E === "chat-info" && p.bodyContainerThemeChatInfo, E === "biz-tools" && R != null && p.bodyContainerSecondaryThemeBizTools), { children: [d.jsxs("div", {
				className: "x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: [
					d.jsx(o("WAWebText.react").WAWebTextTitle, {
						as: "span",
						color: _(A),
						children: l
					}),
					R != null ? d.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: $,
						children: R
					}) : null,
					V
				]
			}), g != null ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.detail, n.detailXstyle), { children: g })) : null] }))]
		}));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.DrawerButton = g, l.DrawerButtonSimple = h;
}), 98);
