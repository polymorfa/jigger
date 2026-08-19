__d("WAWebCreateTextStatusFlow.react", [
	"WAWebStatusPostingTextView.react",
	"WAWebUimUie.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.entryPoint, n = e.forwardedNewsletterMessageInfo, a = e.initialColor, i = e.initialFont, l = e.initialText, c = e.isNewsletterStatus, d = c === void 0 ? !1 : c, m = e.newsletterWid, p = e.statusAttributions, _ = e.statusPostingSessionId, f = u(), g = function(t) {
			var e;
			(e = f.current) == null || e.handleRequestDismiss(t);
		};
		return s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "CreateTextStatusFlow",
			escapable: !0,
			requestDismiss: g,
			children: s.jsx(r("WAWebStatusPostingTextView.react"), {
				ref: f,
				entryPoint: t,
				newsletterWid: m,
				isNewsletterStatus: d,
				initialText: l,
				initialColor: a,
				initialFont: i,
				statusAttributions: p,
				statusPostingSessionId: _,
				forwardedNewsletterMessageInfo: n
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
