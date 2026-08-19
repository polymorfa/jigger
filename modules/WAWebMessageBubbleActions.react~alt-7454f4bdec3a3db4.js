__d("WAWebMessageBubbleActions.react", [
	"$InternalEnum",
	"WAWebFlex.react",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
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
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = r.direction, i = r.theme, l;
		r.placeholder === !0 ? l = c.jsx("div", {
			className: "x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1yrsyyn x6ikm8r x10wlt62 x1f6kntn xfjzk2p x1fc57z9 xo1mcw5 x2b8uid xlyipyv xuxw1ft xh8yej3 xa0aww2",
			children: "​"
		}) : l = r.items.map(function(e, t) {
			return c.createElement(g, babelHelpers.extends({}, r, {
				index: t,
				key: t
			}));
		});
		var s = i === p.POLL_RECEIVER || i === p.POLL_SENDER, u = i === p.EVENT_CREATION;
		return c.jsx(o("WAWebFlex.react").FlexContainer, {
			ref: n,
			direction: r.direction || "horizontal",
			xstyle: [
				i === p.STICKER_PACK ? [_.stickerPackContainer, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4] : _.container,
				u ? [
					o("WDSMargins.stylex").wdsMargins.marginStart0,
					o("WDSMargins.stylex").wdsMargins.marginEnd0,
					m.marginTop5
				] : m.marginTop10,
				s && _.pollActionsContainer,
				i === p.NO_DIVIDER && a !== "vertical" && _.noDividerContainer,
				s && _.containerPolls,
				i === p.FORWARDED_NEWSLETTER && [o("WDSMargins.stylex").wdsMargins.marginHor0, m.marginTop3],
				i === p.ALBUM && _.containerAlbum,
				i === p.MEDIA_DOCUMENT && _.mediaDocumentContainer
			],
			align: "center",
			justify: "evenly",
			children: l
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n = e.direction, a = e.index, i = e.items, l = e.theme, u = i[a], m = r("useWAWebIsKeyboardUser")(), f = m.isKeyboardUser, g = d(!1), y = g[0], C = g[1], b = r("useWAWebStaticButtonA11y")(u.disabled === !0 ? void 0 : u.onClick, { disabled: u.disabled }), v = b[0], S = b[1], R = function(t) {
			C(!0);
		}, L = function(t) {
			C(!1);
		}, E = l === p.POLL_RECEIVER || l === p.POLL_SENDER, k = u.Icon, I = y && f;
		return c.jsx("button", babelHelpers.extends({
			ref: v,
			"data-testid": u.testid,
			className: (s || (s = r("stylex")))(_.actionsBtn, E && _.pollActionsItem, l === p.EVENT_CREATION && _.eventActionsBtn, l === p.FORWARDED_NEWSLETTER && _.channelActionsItem, u.disabled === !0 && h(l), n === "vertical" && a < i.length - 1 && _.notLastActionBtn, l === p.NO_DIVIDER && (a === 0 || n !== "vertical") && _.noDividerItem, u.xstyle),
			"aria-disabled": u.disabled
		}, S, {
			"aria-label": u.ariaLabel,
			onFocus: R,
			onBlur: L,
			title: (t = u.title) != null ? t : u.label,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					o("WDSMargins.stylex").wdsMargins.margin4,
					I && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
					I && _.emphasizedFocusRing
				],
				align: "center",
				children: [k ? c.jsx(k, { xstyle: _.icon }) : null, u.label]
			})
		}), a);
	}
	g.displayName = g.name + " [from " + i.id + "]";
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
