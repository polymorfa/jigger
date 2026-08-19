__d("WAWebDrawerButton.react", [
	"WAWebL10N",
	"WAWebL10NFbtTypeUtils",
	"WAWebPopoverContext.react",
	"WAWebText.react",
	"WAWebTooltip.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(8), a, i, l;
		n[0] !== t ? (a = t.active, i = t.id, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var s = r("useWAWebActiveSelection")(a, i || ""), u = s[0], c = s[1], m;
		return n[4] !== u || n[5] !== c || n[6] !== l ? (m = d.jsx(h, babelHelpers.extends({}, l, {
			active: c,
			ref: u
		})), n[4] = u, n[5] = c, n[6] = l, n[7] = m) : m = n[7], m;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(58), n, a;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i = n, l = i.active, c = i.ariaLabel, g = i.children, h = i.className, y = i.detail, C = i.disabled, b = i.divider, v = i.icon, S = i.onClick, R = i.secondaryChildren, L = i.testid, E = i.theme, k = i.title, I = i.tooltip, T = i.useRoundedStyle, D = i.xstyle, x = i.xstyleSecondary, $ = C === void 0 ? !1 : C, P = b === void 0 ? !1 : b, N = T === void 0 ? !1 : T, M;
		t[3] !== $ ? (M = { disabled: $ }, t[3] = $, t[4] = M) : M = t[4];
		var w = r("useWAWebStaticButtonA11y")(S, M), A = w[0], F = w[1], O = r("useMergeRefs")(A, a), B = $ ? void 0 : n.color, W;
		t[5] !== B || t[6] !== v || t[7] !== n.iconXstyle || t[8] !== E || t[9] !== N ? (W = v != null ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.icon, !N && p.iconWidth, N && p.iconPadding, B === "danger" && p.iconDanger, B === "success" && p.iconSuccess, B === "accent" && p.iconAccent, E === "chat-info" && p.iconThemeChatInfo, n.iconXstyle), { children: v })) : null, t[5] = B, t[6] = v, t[7] = n.iconXstyle, t[8] = E, t[9] = N, t[10] = W) : W = t[10];
		var q = W, U;
		t[11] !== l || t[12] !== $ || t[13] !== v || t[14] !== R || t[15] !== E || t[16] !== N || t[17] !== D ? (U = (u || (u = r("stylex")))(p.container, l === !0 && p.containerActive, !v && p.containerNoIcon, E === "list-aligned" && p.containerListAligned, E === "chatlist" && p.containerThemeChatlist, R != null && p.containerSecondaryText, E === "biz-tools" && R != null && p.containerThemeBizToolsSecondary, E === "biz-tools" && p.bizToolsFlexibleHeight, E === "chat-info" && p.containerThemeChatInfo, N === !0 && p.roundedContainer, $ === !0 && p.containerDisabled, D), t[11] = l, t[12] = $, t[13] = v, t[14] = R, t[15] = E, t[16] = N, t[17] = D, t[18] = U) : U = t[18];
		var V = U, H = h != null ? V + " " + h : V, G;
		t[19] !== g ? (G = o("WAWebL10NFbtTypeUtils").isStringOrFbt(g) ? g : null, t[19] = g, t[20] = G) : G = t[20];
		var z = G, j = c != null ? c : z, K = m(null), Q;
		t[21] !== I ? (Q = I != null ? d.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
			targetRef: K,
			popover: d.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
				targetRef: "context",
				alignment: r("WAWebL10N").isRTL() ? o("WAWebTooltip.react").PopoverAlignment.End : o("WAWebTooltip.react").PopoverAlignment.Start,
				position: o("WAWebTooltip.react").PopoverPosition.Bottom,
				openingDelay: f,
				children: I
			})
		}) : null, t[21] = I, t[22] = Q) : Q = t[22];
		var X = Q, Y;
		t[23] !== y || t[24] !== P || t[25] !== R || t[26] !== E || t[27] !== N ? (Y = (u || (u = r("stylex"))).props(p.bodyContainer, (P || E === "chatlist") && p.bodyContainerDivider, R != null && p.bodyContainerSecondaryText, y != null && !N && p.bodyContainerHasDetail, E === "chat-info" && p.bodyContainerThemeChatInfo, E === "biz-tools" && R != null && p.bodyContainerSecondaryThemeBizTools), t[23] = y, t[24] = P, t[25] = R, t[26] = E, t[27] = N, t[28] = Y) : Y = t[28];
		var J;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (J = { className: "x1rdy4ex x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, t[29] = J) : J = t[29];
		var Z;
		t[30] !== B ? (Z = _(B), t[30] = B, t[31] = Z) : Z = t[31];
		var ee;
		t[32] !== g || t[33] !== Z ? (ee = d.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			color: Z,
			children: g
		}), t[32] = g, t[33] = Z, t[34] = ee) : ee = t[34];
		var te;
		t[35] !== R || t[36] !== x ? (te = R != null ? d.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: x,
			children: R
		}) : null, t[35] = R, t[36] = x, t[37] = te) : te = t[37];
		var ne;
		t[38] !== ee || t[39] !== te || t[40] !== X ? (ne = d.jsxs("div", babelHelpers.extends({}, J, { children: [
			ee,
			te,
			X
		] })), t[38] = ee, t[39] = te, t[40] = X, t[41] = ne) : ne = t[41];
		var re;
		t[42] !== y || t[43] !== n.detailXstyle ? (re = y != null ? d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(p.detail, n.detailXstyle), { children: y })) : null, t[42] = y, t[43] = n.detailXstyle, t[44] = re) : re = t[44];
		var oe;
		t[45] !== ne || t[46] !== re || t[47] !== Y ? (oe = d.jsxs("div", babelHelpers.extends({ ref: K }, Y, { children: [ne, re] })), t[45] = ne, t[46] = re, t[47] = Y, t[48] = oe) : oe = t[48];
		var ae;
		return t[49] !== j || t[50] !== F || t[51] !== H || t[52] !== q || t[53] !== O || t[54] !== oe || t[55] !== L || t[56] !== k ? (ae = d.jsxs("div", babelHelpers.extends({}, F, {
			className: H,
			"data-ignore-capture": "any",
			"data-testid": L,
			ref: O,
			title: k,
			"aria-label": j,
			children: [q, oe]
		})), t[49] = j, t[50] = F, t[51] = H, t[52] = q, t[53] = O, t[54] = oe, t[55] = L, t[56] = k, t[57] = ae) : ae = t[57], ae;
	}
	l.DrawerButton = g, l.DrawerButtonSimple = h;
}), 98);
