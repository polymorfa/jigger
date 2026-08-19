__d("WAWebConversationWrapper.react", [
	"WAWebConversation.react",
	"WAWebStrictMode.react",
	"hero-tracing",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.animate, a = e.conversationRef, i = e.paneTwoProps, l;
		return t[0] !== n || t[1] !== a || t[2] !== i ? (l = s.jsx(r("WAWebStrictMode.react"), { children: s.jsx(o("hero-tracing").HeroPagelet, {
			name: "Conversation Panel",
			observeTextMutation: !0,
			children: function(t, r) {
				return s.jsxs(s.Fragment, { children: [s.jsx("div", babelHelpers.extends({}, i, {
					ref: t,
					children: s.jsx(o("WAWebConversation.react").WAWebConversation, {
						animate: n,
						ref: a
					})
				})), s.jsx(r, {})] });
			}
		}) }), t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3], l;
	}
	l.default = u;
}), 98);
