__d("WAWebPollsOptionMetadataRow", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFormatConfigurationConversation",
	"WAWebPollOptionImage.react",
	"WAWebTag.react",
	"WAWebTextSizeUtils",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginInlineEnd6: {
		marginInlineEnd: "xbelrpt",
		$$css: !0
	} }, m = {
		option: {
			fontWeight: "xo1l8bm",
			fontSize: "x1jchvi3",
			lineHeight: "xwn7fz2",
			wordBreak: "x13faqbe",
			$$css: !0
		},
		voteCount: {
			minWidth: "x1pshirs",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.associatedMsg, a = t.isCorrectOption, i = t.isCurrentLeader, l = t.isPollFromMe, s = t.links, u = t.name, p = t.percentage, g = t.trusted, h = t.voteCount, y = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(), C = y.pollDetailsOptionTextSize, b = o("WAWebFormatConfigurationConversation").Conversation({
			links: s != null ? s : [],
			phoneNumbers: [],
			selectable: !0,
			trusted: g === !0,
			fromMe: l
		});
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			paddingTop: 16,
			paddingBottom: 16,
			paddingEnd: 32,
			paddingStart: 32,
			columnGap: 12,
			children: [
				n && c.jsx(o("WAWebFlex.react").FlexColumn, {
					alignSelf: "start",
					shrink: 0,
					children: c.jsx(r("WAWebPollOptionImage.react"), {
						msg: n,
						size: "small"
					})
				}),
				c.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: u,
					selectable: !0,
					formatters: b,
					className: (e || (e = r("stylex")))(m.option, d.marginInlineEnd6, C)
				}),
				c.jsx("span", babelHelpers.extends({}, e.props(m.voteCount, o("WDSMargins.stylex").wdsMargins.marginStartAuto), { children: a == null ? c.jsx(_, {
					count: h,
					isCurrentLeader: i
				}) : c.jsx(f, {
					count: h,
					isCorrectOption: a
				}) }))
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.count, n = e.isCurrentLeader, r = n ? [o("WAWebTag.react").TagTheme.Primary, o("WAWebTag.react").TagIconName.STAR] : [o("WAWebTag.react").TagTheme.Secondary, null], a = r[0], i = r[1];
		return c.jsx(o("WAWebTag.react").Tag, {
			theme: a,
			icon: i,
			children: s._(
				/*BTDS*/
				"",
				[s._plural(t, "vote")]
			)
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.count, n = e.isCorrectOption, r = n ? [o("WAWebTag.react").TagTheme.Primary, o("WAWebTag.react").TagIconName.CHECK] : [o("WAWebTag.react").TagTheme.Secondary, o("WAWebTag.react").TagIconName.CLOSE], a = r[0], i = r[1];
		return c.jsx(o("WAWebTag.react").Tag, {
			theme: a,
			icon: i,
			children: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 226);
