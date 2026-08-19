__d("WAWebNewsletterPinnedMessagesBanner.react", [
	"fbt",
	"WAJids",
	"WAReplaceRepeatingWhitespace",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatMsgSymbol.react",
	"WAWebConversationBanner.react",
	"WAWebDashes.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatConfiguration",
	"WAWebFormatMsgText",
	"WAWebFrontendMsgGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebMsgMentionMap",
	"WAWebMsgModelPropUtils",
	"WAWebNewsletterOpenAtAction",
	"WAWebNewsletterPinGatingUtils",
	"WAWebNewsletterPinMessageFlow",
	"WAWebUimUie.react",
	"WDSHoverStateStyles",
	"WDSIconIcArrowForward.react",
	"WDSIconIcPushPin.react",
	"WDSIconWdsIcPushPinSlash.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebNewsletterPinnedMessages"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState, m = {
		paddingBlock0: {
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		paddingInlineEnd0: {
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		paddingInlineStart14: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		},
		paddingInlineStart16: {
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		}
	}, p = {
		banner: {
			minHeight: "xuwdbiy",
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		icon: {
			display: "x1rg5ohu",
			color: "xhslqc4",
			$$css: !0
		},
		bannerBody: {
			height: "xsdox4t",
			width: "xh8yej3",
			$$css: !0
		},
		clearMinWidth: {
			minWidth: "xaaagfd",
			$$css: !0
		},
		dashContainer: {
			width: "xfo62xy",
			$$css: !0
		},
		previewText: {
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			display: "x1rg5ohu",
			color: "xhslqc4",
			$$css: !0
		},
		previewContent: {
			height: "x5yr21d",
			whiteSpace: "xuxw1ft",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			paddingInlineEnd: "x5s3kwk",
			$$css: !0
		}
	};
	function _() {
		return c.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x25sj25 xf159sx",
			children: c.jsx(r("WDSIconIcPushPin.react"), {
				xstyle: p.icon,
				"aria-hidden": !0,
				testid: "channel_pinned_banner_icon"
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.msg, n = o("WAWebFrontendMsgGetters").getDir(t), a = o("WAWebFrontendMsgGetters").getRtl(t), i = r("WAWebFormatMsgText")({
			msg: t,
			options: { unformat: !1 }
		}).toString();
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: p.previewContent,
			align: "center",
			children: [o("WAWebMsgModelPropUtils").hasSymbol(t.unsafe()) ? c.jsx(r("WAWebChatMsgSymbol.react"), { msg: t.unsafe() }, "msg-symbol") : null, c.jsx(o("WAWebEmojiText.react").EmojiText, {
				xstyle: p.previewText,
				direction: n,
				text: r("WAReplaceRepeatingWhitespace")(i, !0),
				dirMismatch: a !== r("WAWebL10N").isRTL(),
				ellipsify: !0,
				inlineblock: !0,
				formatters: o("WAWebFormatConfiguration").InlineMessage({
					mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(t),
					groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(t),
					messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(t)
				})
			}, "text")]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.chat, g = r("useWAWebNewsletterPinnedMessages")(u), h = d(null), y = h[0], C = h[1], b = d(!1), v = b[0], S = b[1];
		if (g.length === 0) return null;
		var R = y != null ? g.findIndex(function(e) {
			return e.serverId === y;
		}) : -1, L = R >= 0 ? R : 0, E = g[L];
		y !== E.serverId && C(E.serverId);
		var k = function() {
			var e = (L - 1 + g.length) % g.length;
			C(g[e].serverId);
		}, I = function() {
			var e = E.serverId;
			e != null && o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: o("WAJids").toNewsletterJid(u.id.toString()),
				serverId: e,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage
			});
		}, T = function(t) {
			t.stopPropagation(), I(), k();
		}, D = o("WAWebChatGetters").getIsNewsletter(u) && o("WAWebNewsletterPinGatingUtils").isChannelMessagePinAdminEnabled() && ((n = (a = u.newsletterMetadata) == null ? void 0 : a.iAmAdminOrOwner()) != null ? n : !1), x = c.jsxs(r("WDSMenu.react"), { children: [c.jsx(r("WDSMenuItem.react"), {
			testid: "channel_pinned_banner_menu_go_to_message",
			Icon: r("WDSIconIcArrowForward.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: I
		}), D ? c.jsx(r("WDSMenuItem.react"), {
			testid: "channel_pinned_banner_menu_unpin",
			Icon: r("WDSIconWdsIcPushPinSlash.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				o("WAWebNewsletterPinMessageFlow").runUnpinNewsletterMessageFlow(u, E);
			}
		}) : null] });
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "NewsletterPinnedMessagesBanner",
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: i,
				xstyle: [
					p.banner,
					m.paddingInlineStart16,
					m.paddingBlock0,
					m.paddingInlineEnd0,
					v && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent
				],
				onClick: T,
				onHoverChange: S,
				wdsMenuContent: x,
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					grow: 1,
					children: [
						c.jsx(r("WAWebFlexItem.react"), { "aria-label": s._(
							/*BTDS*/
							""
						) }),
						c.jsx(r("WAWebFlexItem.react"), {
							xstyle: p.dashContainer,
							children: g.length > 1 ? c.jsx(r("WAWebDashes.react"), {
								count: g.length,
								activeIndex: g.length - 1 - L
							}) : null
						}),
						c.jsx(r("WAWebFlexItem.react"), {
							xstyle: p.clearMinWidth,
							align: "center",
							justify: "center",
							children: c.jsx(_, {})
						}),
						c.jsx(r("WAWebFlexItem.react"), {
							xstyle: [m.paddingInlineStart14, p.bannerBody],
							children: c.jsx(f, { msg: E })
						})
					]
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return r("useWAWebNewsletterPinnedMessages")(e).length > 0;
	}
	l.WAWebNewsletterPinnedMessagesBanner = g, l.useWAWebNewsletterPinnedMessagesBanner = h;
}), 226);
