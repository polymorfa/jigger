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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k x25sj25 xf159sx",
			children: c.jsx(r("WDSIconIcPushPin.react"), {
				xstyle: p.icon,
				"aria-hidden": !0,
				testid: "channel_pinned_banner_icon"
			})
		}), e[0] = t) : t = e[0], t;
	}
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
		var n = o("react-compiler-runtime").c(48), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, g = r("useWAWebNewsletterPinnedMessages")(u), h = d(null), y = h[0], C = h[1], b = d(!1), v = b[0], S = b[1];
		if (g.length === 0) return null;
		var R;
		n[3] !== y || n[4] !== g ? (R = y != null ? g.findIndex(function(e) {
			return e.serverId === y;
		}) : -1, n[3] = y, n[4] = g, n[5] = R) : R = n[5];
		var L = R, E = L >= 0 ? L : 0, k = g[E];
		y !== k.serverId && C(k.serverId);
		var I;
		n[6] !== g || n[7] !== E ? (I = function() {
			var e = (E - 1 + g.length) % g.length;
			C(g[e].serverId);
		}, n[6] = g, n[7] = E, n[8] = I) : I = n[8];
		var T = I, D;
		n[9] !== u || n[10] !== k.serverId ? (D = function() {
			var e = k.serverId;
			e != null && o("WAWebNewsletterOpenAtAction").openNewsletterAt({
				newsletterJid: o("WAJids").toNewsletterJid(u.id.toString()),
				serverId: e,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage
			});
		}, n[9] = u, n[10] = k.serverId, n[11] = D) : D = n[11];
		var x = D, $;
		n[12] !== T || n[13] !== x ? ($ = function(t) {
			t.stopPropagation(), x(), T();
		}, n[12] = T, n[13] = x, n[14] = $) : $ = n[14];
		var P = $, N;
		if (n[15] !== u) {
			var M, w;
			N = o("WAWebChatGetters").getIsNewsletter(u) && o("WAWebNewsletterPinGatingUtils").isChannelMessagePinAdminEnabled() && ((M = (w = u.newsletterMetadata) == null ? void 0 : w.iAmAdminOrOwner()) != null ? M : !1), n[15] = u, n[16] = N;
		} else N = n[16];
		var A = N, F;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), n[17] = F) : F = n[17];
		var O;
		n[18] !== x ? (O = c.jsx(r("WDSMenuItem.react"), {
			testid: "channel_pinned_banner_menu_go_to_message",
			Icon: r("WDSIconIcArrowForward.react"),
			title: F,
			onPress: x
		}), n[18] = x, n[19] = O) : O = n[19];
		var B;
		n[20] !== A || n[21] !== u || n[22] !== k ? (B = A ? c.jsx(r("WDSMenuItem.react"), {
			testid: "channel_pinned_banner_menu_unpin",
			Icon: r("WDSIconWdsIcPushPinSlash.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: function() {
				o("WAWebNewsletterPinMessageFlow").runUnpinNewsletterMessageFlow(u, k);
			}
		}) : null, n[20] = A, n[21] = u, n[22] = k, n[23] = B) : B = n[23];
		var W;
		n[24] !== O || n[25] !== B ? (W = c.jsxs(r("WDSMenu.react"), { children: [O, B] }), n[24] = O, n[25] = B, n[26] = W) : W = n[26];
		var q = W, U = v && o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent, V;
		n[27] !== U ? (V = [
			p.banner,
			m.paddingInlineStart16,
			m.paddingBlock0,
			m.paddingInlineEnd0,
			U
		], n[27] = U, n[28] = V) : V = n[28];
		var H;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(r("WAWebFlexItem.react"), { "aria-label": s._(
			/*BTDS*/
			""
		) }), n[29] = H) : H = n[29];
		var G;
		n[30] !== g.length || n[31] !== E ? (G = g.length > 1 ? c.jsx(r("WAWebDashes.react"), {
			count: g.length,
			activeIndex: g.length - 1 - E
		}) : null, n[30] = g.length, n[31] = E, n[32] = G) : G = n[32];
		var z;
		n[33] !== G ? (z = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: p.dashContainer,
			children: G
		}), n[33] = G, n[34] = z) : z = n[34];
		var j;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (j = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: p.clearMinWidth,
			align: "center",
			justify: "center",
			children: c.jsx(_, {})
		}), n[35] = j) : j = n[35];
		var K;
		n[36] === Symbol.for("react.memo_cache_sentinel") ? (K = [m.paddingInlineStart14, p.bannerBody], n[36] = K) : K = n[36];
		var Q;
		n[37] !== k ? (Q = c.jsx(r("WAWebFlexItem.react"), {
			xstyle: K,
			children: c.jsx(f, { msg: k })
		}), n[37] = k, n[38] = Q) : Q = n[38];
		var X;
		n[39] !== z || n[40] !== Q ? (X = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			children: [
				H,
				z,
				j,
				Q
			]
		}), n[39] = z, n[40] = Q, n[41] = X) : X = n[41];
		var Y;
		return n[42] !== P || n[43] !== i || n[44] !== V || n[45] !== X || n[46] !== q ? (Y = c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "NewsletterPinnedMessagesBanner",
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: i,
				xstyle: V,
				onClick: P,
				onHoverChange: S,
				wdsMenuContent: q,
				children: X
			})
		}), n[42] = P, n[43] = i, n[44] = V, n[45] = X, n[46] = q, n[47] = Y) : Y = n[47], Y;
	}
	function h(e) {
		return r("useWAWebNewsletterPinnedMessages")(e).length > 0;
	}
	l.WAWebNewsletterPinnedMessagesBanner = g, l.useWAWebNewsletterPinnedMessagesBanner = h;
}), 226);
