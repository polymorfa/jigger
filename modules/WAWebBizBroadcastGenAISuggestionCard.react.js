__d("WAWebBizBroadcastGenAISuggestionCard.react", [
	"WAWebBizBroadcastTextFormatUtils",
	"WAWebEmojiText.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(18), n = e.isSelected, a = e.message, i = e.onSelect, l = e.tone, u;
		t[0] !== i ? (u = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), i());
		}, t[0] = i, t[1] = u) : u = t[1];
		var d = u, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1ypdohk x78zum5 xdt5ytf x129bwdz xh8yej3" }, t[2] = m) : m = t[2];
		var p;
		t[3] !== l ? (p = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			xstyle: c.toneLabel,
			children: l
		}), t[3] = l, t[4] = p) : p = t[4];
		var _;
		t[5] !== n ? (_ = {
			0: { className: "xjbqb8w x1ubxc9n xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x2ssjo2 x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe" },
			1: { className: "xjbqb8w x1ubxc9n xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x14ug900 x1f6kntn x37zpob x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe x2gvlc5 x2ssjo2" }
		}[!!n << 0], t[5] = n, t[6] = _) : _ = t[6];
		var f;
		t[7] !== a ? (f = s.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: a,
			formatters: o("WAWebBizBroadcastTextFormatUtils").AI_TEXT_FORMATTERS
		}), t[7] = a, t[8] = f) : f = t[8];
		var g;
		t[9] !== _ || t[10] !== f ? (g = s.jsx("div", babelHelpers.extends({}, _, { children: f })), t[9] = _, t[10] = f, t[11] = g) : g = t[11];
		var h;
		return t[12] !== d || t[13] !== n || t[14] !== i || t[15] !== p || t[16] !== g ? (h = s.jsxs("div", babelHelpers.extends({}, m, {
			"aria-selected": n,
			onClick: i,
			onKeyDown: d,
			role: "option",
			tabIndex: 0,
			children: [p, g]
		})), t[12] = d, t[13] = n, t[14] = i, t[15] = p, t[16] = g, t[17] = h) : h = t[17], h;
	}
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
