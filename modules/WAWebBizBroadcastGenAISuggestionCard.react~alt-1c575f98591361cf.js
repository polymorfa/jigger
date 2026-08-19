__d("WAWebBizBroadcastGenAISuggestionCard.react", [
	"WAWebBizBroadcastTextFormatUtils",
	"WAWebEmojiText.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.isSelected, n = e.message, a = e.onSelect, i = e.tone, l = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a());
		};
		return s.jsxs("div", {
			className: "x1ypdohk x78zum5 xdt5ytf x129bwdz xh8yej3",
			"aria-selected": t,
			onClick: a,
			onKeyDown: l,
			role: "option",
			tabIndex: 0,
			children: [s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				xstyle: c.toneLabel,
				children: i
			}), s.jsx("div", babelHelpers.extends({}, {
				0: { className: "xjbqb8w x1ubxc9n xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x2ssjo2 x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe" },
				1: { className: "xjbqb8w x1ubxc9n xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe x2gvlc5 x2ssjo2" }
			}[!!t << 0], { children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: n,
				formatters: o("WAWebBizBroadcastTextFormatUtils").AI_TEXT_FORMATTERS
			}) }))]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	var c = { toneLabel: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		textTransform: "xn80e1m",
		$$css: !0
	} };
	l.default = u;
}), 98);
