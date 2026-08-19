__d("WAWebNewsletterActionButtonWrapper.react", [
	"WAWebMessageBubbleActions.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNewsletterActionItems"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.msg, r = e.theme, a = o("useWAWebNewsletterActionItems").useWAWebNewsletterActionItems(n);
		if (a.length !== 0) {
			var i = r != null ? r : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.FORWARDED_NEWSLETTER, l;
			return t[0] !== a || t[1] !== i ? (l = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
				items: a,
				theme: i,
				direction: "vertical"
			}), t[0] = a, t[1] = i, t[2] = l) : l = t[2], l;
		}
	}
	l.default = u;
}), 98);
