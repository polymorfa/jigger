__d("WAWebBizProductInfo.react", [
	"WAWebDisplayType",
	"WAWebEmojiText.react",
	"WAWebFormatConfigurationConversation",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgMentionMap",
	"WAWebMsgPhoneNumbers",
	"WAWebProductCatalogProductPriceInfoText.react",
	"WAWebSpacerText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, d = {
		productInfo: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			cursor: "x1ypdohk",
			borderEndStartRadius: "x11ecxm0",
			borderEndEndRadius: "xd15eu0",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		title: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		subtitle: {
			fontSize: "x1pg5gke",
			color: "xhslqc4",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = t.displayType, i = t.onClick, l = t.trusted, s = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			(n = o("WAWebMsgGetters")).getCurrencyCode,
			n.getDescription,
			n.getIsSentByMe,
			n.getPriceAmount1000,
			n.getSalePriceAmount1000,
			n.getTitle
		]), m = s[0], p = s[1], _ = s[2], f = s[3], g = s[4], h = s[5], y = o("WAWebDisplayType").isWideDisplay(a), C = o("WAWebFormatConfigurationConversation").Conversation({
			mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(t.msg),
			phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(t.msg.unsafe()),
			links: o("WAWebMsgLinks").getLinksFromMsg(t.msg.unsafe()),
			selectable: !0,
			trusted: l === !0,
			fromMe: t.msg.id.fromMe
		}), b;
		if (f != null && m != null) b = u.jsx(r("WAWebProductCatalogProductPriceInfoText.react"), {
			product: {
				currency: m,
				priceAmount1000: f,
				salePriceAmount1000: g
			},
			direction: "inherit",
			selectable: !0
		});
		else if (p != null) {
			var v = 70;
			b = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "inherit",
				selectable: !0,
				text: p,
				formatters: C,
				textLimit: v
			});
		}
		return u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.productInfo, _ && !y && d.bubbleOut, (!_ || y) && d.bubbleIn, c.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor8), {
			onClick: i,
			children: [u.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "inherit",
				selectable: !0,
				text: h,
				formatters: C,
				ellipsify: !0,
				xstyle: d.title
			}), b ? u.jsx(r("WAWebSpacerText.react"), {
				msg: t.msg.unsafe(),
				xstyle: [d.subtitle, o("WDSMargins.stylex").wdsMargins.marginTop2],
				children: b
			}) : null]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
