__d("WAWebInteractiveTitleHeader", [
	"WABidi",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFormatHeaderFooter",
	"WAWebL10N",
	"WAWebMsgLinks",
	"WAWebMsgModelPropUtils",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { marginInlineStart6: {
		marginInlineStart: "xdzw4kq",
		$$css: !0
	} }, c = {
		title: {
			fontSize: "x6prxxf",
			fontWeight: "xk50ysn",
			overflowWrap: "x1mzt3pk",
			whiteSpace: "x126k92a",
			width: "xh8yej3",
			$$css: !0
		},
		subtitle: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("WABidi").bidiDir(e), n = t === "rtl";
		return {
			direction: t,
			dirMismatch: n !== r("WAWebL10N").isRTL()
		};
	}
	function m(e) {
		var t, n = e.msg, r = (t = n.interactiveHeader) != null ? t : {}, a = r.subtitle, i = r.title, l = o("WAWebMsgModelPropUtils").isTrusted(n.unsafe());
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, u.marginInlineStart6],
			children: [i != null ? s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d(i), o("WAWebFormatHeaderFooter").enableHeaderAndFooterFormatting(o("WAWebMsgLinks").getHeaderLinks(n.unsafe()), l), {
				text: i,
				xstyle: c.title,
				inferLinesDirection: !0
			})) : null, a != null ? s.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, d(a), {
				selectable: l,
				text: a,
				xstyle: c.subtitle,
				inferLinesDirection: !0
			})) : null]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
