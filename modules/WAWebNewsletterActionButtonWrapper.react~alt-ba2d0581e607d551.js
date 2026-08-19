__d("WAWebNewsletterActionButtonWrapper.react", [
	"WAWebMessageBubbleActions.react",
	"react",
	"useWAWebNewsletterActionItems"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.msg, n = e.theme, r = o("useWAWebNewsletterActionItems").useWAWebNewsletterActionItems(t);
		if (r.length !== 0) return s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
			items: r,
			theme: n != null ? n : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.FORWARDED_NEWSLETTER,
			direction: "vertical"
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
