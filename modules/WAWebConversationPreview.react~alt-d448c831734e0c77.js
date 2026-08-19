__d("WAWebConversationPreview.react", [
	"fbt",
	"WAWebAppContext.react",
	"WAWebClock",
	"WAWebConversationBackground.react",
	"WAWebConversationPanelWrapper.stylex",
	"WAWebMessageContainer.react",
	"WAWebMsgCheckIcon.react",
	"WAWebMsgDblcheckIcon.react",
	"WAWebThemeContext",
	"WDSFlex.stylex",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		previewMessages: {
			position: "x1n2onr6",
			zIndex: "x1vjfegm",
			flexBasis: "x1r8uery",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x14hj8or",
			paddingInlineEnd: "xfwifpm",
			paddingLeft: null,
			paddingRight: null,
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		previewBubbleWidth: {
			maxWidth: "xggofmx",
			$$css: !0
		},
		spacerCheckIcon: {
			width: "xn6xy2s",
			$$css: !0
		},
		previewMeta: {
			position: "x1n2onr6",
			zIndex: "x1n327nk",
			float: "xtrg13t",
			marginTop: "xhsvlbd",
			marginBottom: "xz62fqu",
			marginInlineStart: "x1lziwak",
			marginInlineEnd: "x7g7pl8",
			color: "x1bvqhpb",
			fontSize: "x1ncwhqj",
			height: "xx3o462",
			lineHeight: "x152skdk",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		ackBlue: {
			color: "x1rv0e52",
			$$css: !0
		},
		chatHeader: {
			position: "x1n2onr6",
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			height: "x185czh",
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xf7dkkf",
			paddingInlineEnd: "xv54qhq",
			backgroundColor: "x1280gxy",
			"::after_position": "x1j6awrg",
			"::after_bottom": "x1te75w5",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_width": "x4eaejv",
			"::after_height": "xcock1l",
			"::after_content": "x100rkj9",
			"::after_backgroundColor": "xptwh4s",
			"::after_borderBottomWidth": "x1qj619r",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderBottomColor": "xb1pvdl",
			$$css: !0
		},
		chatHeaderDark: {
			boxShadow: "xu306ak",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatHeaderMaterial: {
			"::after_content": "x100rkj9",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatTitle: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1jchvi3",
			fontWeight: "x1fcty0u",
			lineHeight: "xdod15v",
			color: "x14ug900",
			textAlign: "x1yc453h",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		chatTitleDark: {
			fontWeight: "xk50ysn",
			$$css: !0
		}
	};
	function m(e, t) {
		var n = new Date();
		return n.setHours(e, t, 0, 0), o("WAWebClock").Clock.timestampStr(Math.floor(n.getTime() / 1e3));
	}
	function p(t) {
		var n = t.direction, a = t.icon, i = t.message, l = t.time;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(n === "incoming" ? o("WDSFlex.stylex").wdsFlex.selfStart : o("WDSFlex.stylex").wdsFlex.selfEnd, d.previewBubbleWidth), { children: c.jsx(r("WAWebMessageContainer.react"), {
			isSentByMe: n === "outgoing",
			children: c.jsxs("div", {
				className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
				children: [c.jsx("div", {
					className: "xt0psk2",
					children: c.jsxs(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: [i, c.jsxs("span", {
							className: "x1ncwhqj x3nfvp2 xxymvpz xlshs6z xqtp20y xexx8yu x18d9i69 x181vq82 x1uc92m",
							"aria-hidden": !0,
							children: [c.jsx("span", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0), { children: l })), a != null && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, o("WDSFlex.stylex").wdsFlex.flexShrink0, d.spacerCheckIcon)))]
						})]
					})
				}), c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapQuarter, d.previewMeta), { children: [c.jsx("span", { children: l }), a] }))]
			})
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.justifyEnd, o("WDSFlex.stylex").wdsFlex.rowGapSingle, o("WDSFlex.stylex").wdsFlex.flexGrow1, o("WDSFlex.stylex").wdsFlex.flexShrink1, d.previewMessages), {
			"data-testid": "conversation-preview-messages",
			children: [
				c.jsx(p, {
					direction: "incoming",
					message: s._(
						/*BTDS*/
						""
					),
					time: m(11, 30)
				}),
				c.jsx(p, {
					direction: "outgoing",
					message: s._(
						/*BTDS*/
						""
					),
					time: m(11, 31),
					icon: c.jsx(o("WAWebMsgCheckIcon.react").MsgCheckIcon, {
						height: 11,
						width: 16
					})
				}),
				c.jsx(p, {
					direction: "incoming",
					message: s._(
						/*BTDS*/
						""
					),
					time: m(11, 32)
				}),
				c.jsx(p, {
					direction: "outgoing",
					message: s._(
						/*BTDS*/
						""
					),
					time: m(11, 33),
					icon: c.jsx(o("WAWebMsgDblcheckIcon.react").MsgDblcheckIcon, {
						height: 11,
						width: 16,
						xstyle: d.ackBlue
					})
				})
			]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n = t.previewType, a = t.showDoodle, i = t.title, l = t.wallpaper, s = o("WAWebAppContext.react").useAppContext(), u = s.rightDrawerOpen, m = o("WAWebThemeContext").useIsDarkTheme();
		return c.jsxs(c.Fragment, { children: [
			c.jsx("header", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.chatHeader, m && d.chatHeaderDark, d.chatHeaderMaterial, o("WAWebConversationPanelWrapper.stylex").styles.header), { children: c.jsx("span", babelHelpers.extends({}, e.props(d.chatTitle, m && d.chatTitleDark, o("WAWebConversationPanelWrapper.stylex").styles.titleInHeader), { children: i })) })),
			c.jsx(r("WAWebConversationBackground.react"), {
				wallpaper: l,
				showDoodle: a
			}),
			n === "theme" && c.jsx(_, {}),
			c.jsx("footer", babelHelpers.extends({}, {
				0: {},
				1: { className: "x1lun4ml x18b5jzi xbogo7e" }
			}[!!u << 0]))
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
