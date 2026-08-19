__d("WAWebDropdownItem.react", [
	"$InternalEnum",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10NFbtTypeUtils",
	"WAWebNoop",
	"WAWebPill.react",
	"WAWebStopEvent",
	"WAWebTooltip.react",
	"WDSFocusStateStyles",
	"WDSIconIcCheck.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = ["icon"], s, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = { marginInlineEnd10: {
		marginInlineEnd: "x1sa5p1d",
		$$css: !0
	} }, f = n("$InternalEnum").Mirrored([
		"Compact",
		"Muted",
		"Negative"
	]), g = {
		container: {
			cursor: "x1ypdohk",
			minWidth: "x5w4yej",
			height: "x1vqgdyp",
			width: "xh8yej3",
			$$css: !0
		},
		iconSlot: {
			minWidth: "xt4ypqs",
			$$css: !0
		},
		textSlot: {
			lineHeight: "x1o2sk6j",
			fontSize: "x6prxxf",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		newsletterWamoSubMessageType: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		checkmarkIcon: {
			color: "x1v5yvga",
			$$css: !0
		},
		item: {
			opacity: "xg01cxk",
			$$css: !0
		},
		itemMaterial: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		shortcut: {
			position: "x1n2onr6",
			$$css: !0
		},
		defaultRefreshed: {
			color: "xhslqc4",
			$$css: !0
		},
		textHover: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		emoji: {
			flexShrink: "x2lah0s",
			flexGrow: "x1c4vz4f",
			flexBasis: "xdl72j9",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			opacity: "xg01cxk",
			cursor: "x1ypdohk",
			$$css: !0
		},
		emojiGrid: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			$$css: !0
		},
		emojiPreview: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			borderStartStartRadius: "x7uoqk1",
			borderStartEndRadius: "x1p4qogd",
			borderEndEndRadius: "x1fr94nc",
			borderEndStartRadius: "x1633rxx",
			opacity: "x1hc1fzr",
			boxShadow: "x1s2ixkd",
			$$css: !0
		},
		iconType: {
			flexShrink: "x2lah0s",
			flexGrow: "x1c4vz4f",
			flexBasis: "xdl72j9",
			marginTop: "xcxhlts x1as1d8k",
			opacity: "x1hc1fzr",
			$$css: !0
		},
		attachMenuPopup: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		negative: {
			color: "xqnyt8g",
			backgroundColor: "xy7q86r",
			$$css: !0
		},
		ellipsify: {
			position: "x1n2onr6",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		action: {
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			paddingInlineEnd: "x1ikfw9c",
			paddingInlineStart: "x13jy36j",
			fontSize: "x7yx35o",
			lineHeight: "xwgyvy0",
			color: "x14ug900",
			whiteSpace: "xuxw1ft",
			cursor: "x1ypdohk",
			$$css: !0
		},
		compact: {
			paddingInlineEnd: "x64bnmy",
			$$css: !0
		},
		fixedHeight: {
			height: "x1vqgdyp",
			$$css: !0
		},
		disabledContent: {
			opacity: "xti2d7y",
			$$css: !0
		},
		checkmark: {
			position: "x10l6tqk",
			insetInlineEnd: "xdg88n9",
			left: null,
			right: null,
			top: "xwa60dl",
			transform: "x1cb1t30",
			$$css: !0
		}
	};
	function h(e) {
		var t = e.children, n = e.tooltip, a = e.tooltipPosition, i = a === void 0 ? o("WAWebTooltip.react").PopoverPosition.Start : a, l = e.tooltipAlignment, u = l === void 0 ? o("WAWebTooltip.react").PopoverAlignment.Center : l, d = e.type, _ = d === void 0 ? "text" : d, h = e.disabled, y = h === void 0 ? !1 : h, C = e.theme, b = e.action, v = e.testid, S = e.tabIndex, R = e.addSpacing, L = R === void 0 ? !1 : R, E = e.ariaLabel, k = e.selected, I = k === void 0 ? !1 : k, T = e.pillText, D = e.showTooltipOnOverflow, x = D === void 0 ? !1 : D, $ = e.fixedHeight, P = $ === void 0 ? !0 : $, N = p(!1), M = N[0], w = N[1], A = p(!1), F = A[0], O = A[1], B = m(), W = m(null), q = r("useWAWebUIM")(), U = function() {
			if (B.current == null) return !1;
			var e = B.current.style.overflow;
			(!e || e === "visible") && (B.current.style.overflow = "hidden");
			var t = B.current.clientWidth < B.current.scrollWidth || B.current.clientHeight < B.current.scrollHeight;
			return B.current.style.overflow = e, t;
		}, V;
		if (n != null || U() && x) {
			var H, G = i, z = u;
			n != null ? H = n : n == null && o("WAWebL10NFbtTypeUtils").isStringOrFbt(t) && U() && (H = t, G = o("WAWebTooltip.react").PopoverPosition.Bottom), V = c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
				targetRef: W,
				position: G,
				alignment: z,
				buffer: 8,
				children: H
			});
		}
		var j = function(t) {
			var e = b(t) === !1;
			e || q && q.requestDismiss();
		}, K = function() {
			w(!0);
		}, Q = function() {
			w(!1);
		}, X = function() {
			O(!0);
		}, Y = function() {
			O(!1);
		}, J = function(t) {
			j(t);
		}, Z = function(t) {
			t.repeat || j(t);
		}, ee = o("WAWebL10NFbtTypeUtils").isStringOrFbt(t) || L ? c.jsxs("div", babelHelpers.extends({ ref: B }, (s || (s = r("stylex"))).props(g.ellipsify, g.action, C === f.Compact && g.compact, P && g.fixedHeight, y && g.disabledContent, e.xstyle), {
			"aria-label": E != null ? E : t,
			children: [
				t,
				I && c.jsx(r("WDSIconIcCheck.react"), { xstyle: [g.checkmarkIcon, g.checkmark] }),
				T != null ? c.jsx(o("WAWebPill.react").Pill, {
					inline: !0,
					children: T
				}) : null
			]
		})) : t, te = {
			enter: Z,
			space: Z
		}, ne = M || F, re = _ === "text" || _ === "attach-menu-popup" || _ === "newsletter-wamo-message-type", oe = _ === "emoji" || _ === "emoji-grid" || _ === "emoji-preview", ae = (s || (s = r("stylex")))(g.item, g.itemMaterial, g.shortcut, g.defaultRefreshed, re && ne && C !== f.Negative && g.textHover, oe && g.emoji, _ === "emoji-grid" && g.emojiGrid, _ === "emoji-preview" && g.emojiPreview, _ === "icon" && g.iconType, _ === "attach-menu-popup" && g.attachMenuPopup, C === f.Negative && ne && g.negative, _ === "newsletter-wamo-message-type" && g.newsletterWamoSubMessageType), ie = y ? {} : {
			handlers: te,
			onContextMenu: o("WAWebStopEvent").preventDefault,
			onMouseDown: o("WAWebStopEvent").preventDefault,
			onClick: J,
			onMouseEnter: K,
			onMouseLeave: Q,
			onFocus: X,
			onBlur: Y
		};
		return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
			ref: W,
			component: "li",
			className: ae,
			xstyle: F && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
			"data-animate-dropdown-item": !0,
			"data-testid": v,
			tabIndex: S != null ? S : 0,
			role: y ? void 0 : "button"
		}, ie, { children: [ee, V] }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = o("react-compiler-runtime").c(24), n = e.action, a = e.children, i = e.disabled, l = e.icon, u = e.testid, d = e.theme, m = e.tooltip, p = e.xstyle, f;
		t[0] !== i ? (f = {
			0: {},
			1: { className: "xti2d7y x1h6gzvc" }
		}[(i === !0) << 0], t[0] = i, t[1] = f) : f = t[1];
		var y = i === !0 ? r("WAWebNoop") : n, C;
		t[2] !== p ? (C = [
			g.iconSlot,
			o("WDSMargins.stylex").wdsMargins.marginStart8,
			_.marginInlineEnd10,
			p
		], t[2] = p, t[3] = C) : C = t[3];
		var b;
		t[4] !== l || t[5] !== C ? (b = c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: C,
			children: l
		}), t[4] = l, t[5] = C, t[6] = b) : b = t[6];
		var v;
		t[7] !== p ? (v = (s || (s = r("stylex"))).props(g.textSlot, o("WDSMargins.stylex").wdsMargins.marginEnd24, p), t[7] = p, t[8] = v) : v = t[8];
		var S;
		t[9] !== a || t[10] !== v ? (S = c.jsx("span", babelHelpers.extends({}, v, { children: a })), t[9] = a, t[10] = v, t[11] = S) : S = t[11];
		var R;
		t[12] !== b || t[13] !== S ? (R = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.container,
			children: [b, S]
		}), t[12] = b, t[13] = S, t[14] = R) : R = t[14];
		var L;
		t[15] !== y || t[16] !== R || t[17] !== u || t[18] !== d || t[19] !== m ? (L = c.jsx(h, {
			testid: u,
			action: y,
			tooltip: m,
			theme: d,
			children: R
		}), t[15] = y, t[16] = R, t[17] = u, t[18] = d, t[19] = m, t[20] = L) : L = t[20];
		var E;
		return t[21] !== f || t[22] !== L ? (E = c.jsx("div", babelHelpers.extends({}, f, { children: L })), t[21] = f, t[22] = L, t[23] = E) : E = t[23], E;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(6), r, a;
		n[0] !== t ? (a = t.icon, r = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
		var i;
		return n[3] !== r || n[4] !== a ? (i = a ? c.jsx(y, {
			action: r.action,
			disabled: r.disabled,
			icon: a,
			testid: r.testid,
			tooltip: r.tooltip,
			theme: r.theme,
			xstyle: r.xstyle,
			children: r.children
		}) : c.jsx(h, babelHelpers.extends({}, r, { children: r.children })), n[3] = r, n[4] = a, n[5] = i) : i = n[5], i;
	}
	l.DropdownItemThemeType = f, l.DropdownItem = C;
}), 98);
