__d("WAWebCreateTextStatusFlow.react", [
	"WAWebStatusPostingTextView.react",
	"WAWebUimUie.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.entryPoint, a = e.forwardedNewsletterMessageInfo, i = e.initialColor, l = e.initialFont, c = e.initialText, d = e.isNewsletterStatus, m = e.newsletterWid, p = e.statusAttributions, _ = e.statusPostingSessionId, f = d === void 0 ? !1 : d, g = u(), h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			var e;
			(e = g.current) == null || e.handleRequestDismiss(t);
		}, t[0] = h) : h = t[0];
		var y = h, C;
		return t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== c || t[6] !== f || t[7] !== m || t[8] !== p || t[9] !== _ ? (C = s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "CreateTextStatusFlow",
			escapable: !0,
			requestDismiss: y,
			children: s.jsx(r("WAWebStatusPostingTextView.react"), {
				ref: g,
				entryPoint: n,
				newsletterWid: m,
				isNewsletterStatus: f,
				initialText: c,
				initialColor: i,
				initialFont: l,
				statusAttributions: p,
				statusPostingSessionId: _,
				forwardedNewsletterMessageInfo: a
			})
		}), t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = c, t[6] = f, t[7] = m, t[8] = p, t[9] = _, t[10] = C) : C = t[10], C;
	}
	l.default = c;
}), 98);
