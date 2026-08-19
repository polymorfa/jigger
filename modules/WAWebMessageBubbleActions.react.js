__d("WAWebMessageBubbleActions.react", [
	"$InternalEnum",
	"WAWebFlex.react",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebIsKeyboardUser",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u.useState, m = {
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		}
	}, p = n("$InternalEnum").Mirrored([
		"NO_DIVIDER",
		"POLL_SENDER",
		"POLL_RECEIVER",
		"EVENT_CREATION",
		"FORWARDED_NEWSLETTER",
		"ALBUM",
		"STICKER_PACK",
		"MEDIA_DOCUMENT"
	]), _ = {
		noDividerContainer: {
			borderTopStyle: "x1ejq31n",
			$$css: !0
		},
		noDividerItem: {
			marginTop: "xdj266r",
			$$css: !0
		},
		icon: {
			marginTop: "xdj266r",
			marginInlineEnd: "xf6vk7d",
			marginBottom: "xat24cr",
			marginInlineStart: "xpcyujq",
			$$css: !0
		},
		container: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			marginInlineStart: "x16hy4bp",
			marginInlineEnd: "x5pz312",
			$$css: !0
		},
		containerPolls: {
			marginInlineStart: "x12bjzxj",
			marginInlineEnd: "xu8z092",
			$$css: !0
		},
		containerAlbum: {
			marginInlineStart: "xbr8dpn",
			marginInlineEnd: "x1hzmc0g",
			$$css: !0
		},
		actionsBtn: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1yrsyyn",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1f6kntn",
			fontWeight: "xfjzk2p",
			lineHeight: "x1fc57z9",
			color: "xo1mcw5",
			textAlign: "x2b8uid",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			width: "xh8yej3",
			paddingBottom: "xa0aww2",
			$$css: !0
		},
		disabledActionsBtn: {
			color: "xhslqc4",
			cursor: "xt0e3qv",
			$$css: !0
		},
		pollDisabledActionsBtnReceiver: {
			color: "xchv7qt",
			$$css: !0
		},
		pollDisabledActionsBtnSender: {
			color: "x2kn7w9",
			$$css: !0
		},
		eventActionsBtn: {
			outlineStyle: "x1t137rt",
			$$css: !0
		},
		eventDisabledActionsBtn: {
			color: "xhslqc4",
			opacity: "x1lxidc1",
			cursor: "xt0e3qv",
			$$css: !0
		},
		notLastActionBtn: {
			paddingBottom: "x1a8lsjc",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x120ee7l",
			$$css: !0
		},
		pollActionsContainer: {
			marginTop: "x1xmf6yo",
			$$css: !0
		},
		pollActionsItem: {
			paddingTop: "x1yrsyyn",
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		stickerPackContainer: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		channelActionsItem: {
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		mediaDocumentContainer: {
			marginInlineStart: "xbr8dpn",
			marginInlineEnd: "x1hzmc0g",
			marginTop: "xav9cv8",
			$$css: !0
		},
		emphasizedFocusRing: {
			outlineColor: "x97exvx",
			$$css: !0
		}
	};
	function f(t) {
		var n = o("react-compiler-runtime").c(27), r, a, i, l, s;
		if (n[0] !== t) {
			l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e);
			var u = i;
			if (r = u.direction, s = u.theme, i.placeholder === !0) {
				var d;
				n[6] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx("div", {
					className: "x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1yrsyyn x6ikm8r x10wlt62 x1f6kntn xfjzk2p x1fc57z9 xo1mcw5 x2b8uid xlyipyv xuxw1ft xh8yej3 xa0aww2",
					children: "​"
				}), n[6] = d) : d = n[6], a = d;
			} else a = i.items.map(function(e, t) {
				return c.createElement(g, babelHelpers.extends({}, i, {
					index: t,
					key: t
				}));
			});
			n[0] = t, n[1] = r, n[2] = a, n[3] = i, n[4] = l, n[5] = s;
		} else r = n[1], a = n[2], i = n[3], l = n[4], s = n[5];
		var f = s === p.POLL_RECEIVER || s === p.POLL_SENDER, h = s === p.EVENT_CREATION, y = i.direction || "horizontal", C;
		n[7] !== s ? (C = s === p.STICKER_PACK ? [_.stickerPackContainer, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4] : _.container, n[7] = s, n[8] = C) : C = n[8];
		var b;
		n[9] !== h ? (b = h ? [
			o("WDSMargins.stylex").wdsMargins.marginStart0,
			o("WDSMargins.stylex").wdsMargins.marginEnd0,
			m.marginTop5
		] : m.marginTop10, n[9] = h, n[10] = b) : b = n[10];
		var v = f && _.pollActionsContainer, S = s === p.NO_DIVIDER && r !== "vertical" && _.noDividerContainer, R = f && _.containerPolls, L;
		n[11] !== s ? (L = s === p.FORWARDED_NEWSLETTER && [o("WDSMargins.stylex").wdsMargins.marginHor0, m.marginTop3], n[11] = s, n[12] = L) : L = n[12];
		var E = s === p.ALBUM && _.containerAlbum, k = s === p.MEDIA_DOCUMENT && _.mediaDocumentContainer, I;
		n[13] !== C || n[14] !== b || n[15] !== v || n[16] !== S || n[17] !== R || n[18] !== L || n[19] !== E || n[20] !== k ? (I = [
			C,
			b,
			v,
			S,
			R,
			L,
			E,
			k
		], n[13] = C, n[14] = b, n[15] = v, n[16] = S, n[17] = R, n[18] = L, n[19] = E, n[20] = k, n[21] = I) : I = n[21];
		var T;
		return n[22] !== a || n[23] !== l || n[24] !== y || n[25] !== I ? (T = c.jsx(o("WAWebFlex.react").FlexContainer, {
			ref: l,
			direction: y,
			xstyle: I,
			align: "center",
			justify: "evenly",
			children: a
		}), n[22] = a, n[23] = l, n[24] = y, n[25] = I, n[26] = T) : T = n[26], T;
	}
	function g(e) {
		var t, n = o("react-compiler-runtime").c(31), a = e.direction, i = e.index, l = e.items, u = e.theme, m = l[i], f = r("useWAWebIsKeyboardUser")(), g = f.isKeyboardUser, y = d(!1), C = y[0], b = y[1], v;
		n[0] !== m.disabled ? (v = { disabled: m.disabled }, n[0] = m.disabled, n[1] = v) : v = n[1];
		var S = r("useWAWebStaticButtonA11y")(m.disabled === !0 ? void 0 : m.onClick, v), R = S[0], L = S[1], E;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			b(!0);
		}, n[2] = E) : E = n[2];
		var k = E, I;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			b(!1);
		}, n[3] = I) : I = n[3];
		var T = I, D = u === p.POLL_RECEIVER || u === p.POLL_SENDER, x = m.Icon, $ = C && g, P = m.testid, N;
		n[4] !== a || n[5] !== i || n[6] !== D || n[7] !== m.disabled || n[8] !== m.xstyle || n[9] !== l.length || n[10] !== u ? (N = (s || (s = r("stylex")))(_.actionsBtn, D && _.pollActionsItem, u === p.EVENT_CREATION && _.eventActionsBtn, u === p.FORWARDED_NEWSLETTER && _.channelActionsItem, m.disabled === !0 && h(u), a === "vertical" && i < l.length - 1 && _.notLastActionBtn, u === p.NO_DIVIDER && (i === 0 || a !== "vertical") && _.noDividerItem, m.xstyle), n[4] = a, n[5] = i, n[6] = D, n[7] = m.disabled, n[8] = m.xstyle, n[9] = l.length, n[10] = u, n[11] = N) : N = n[11];
		var M = (t = m.title) != null ? t : m.label, w = $ && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, A = $ && _.emphasizedFocusRing, F;
		n[12] !== w || n[13] !== A ? (F = [
			o("WDSMargins.stylex").wdsMargins.margin4,
			w,
			A
		], n[12] = w, n[13] = A, n[14] = F) : F = n[14];
		var O;
		n[15] !== x ? (O = x ? c.jsx(x, { xstyle: _.icon }) : null, n[15] = x, n[16] = O) : O = n[16];
		var B;
		n[17] !== m.label || n[18] !== F || n[19] !== O ? (B = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: F,
			align: "center",
			children: [O, m.label]
		}), n[17] = m.label, n[18] = F, n[19] = O, n[20] = B) : B = n[20];
		var W;
		return n[21] !== L || n[22] !== R || n[23] !== i || n[24] !== m.ariaLabel || n[25] !== m.disabled || n[26] !== m.testid || n[27] !== B || n[28] !== N || n[29] !== M ? (W = c.jsx("button", babelHelpers.extends({
			ref: R,
			"data-testid": P,
			className: N,
			"aria-disabled": m.disabled
		}, L, {
			"aria-label": m.ariaLabel,
			onFocus: k,
			onBlur: T,
			title: M,
			children: B
		}), i), n[21] = L, n[22] = R, n[23] = i, n[24] = m.ariaLabel, n[25] = m.disabled, n[26] = m.testid, n[27] = B, n[28] = N, n[29] = M, n[30] = W) : W = n[30], W;
	}
	function h(e) {
		if (!e) return _.disabledActionsBtn;
		switch (e) {
			case p.POLL_RECEIVER: return _.pollDisabledActionsBtnReceiver;
			case p.POLL_SENDER: return _.pollDisabledActionsBtnSender;
			case p.EVENT_CREATION: return _.eventDisabledActionsBtn;
			default: return _.disabledActionsBtn;
		}
	}
	l.BubbleActionsTheme = p, l.BubbleActions = f;
}), 98);
