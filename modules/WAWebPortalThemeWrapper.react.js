__d("WAWebPortalThemeWrapper.react", [
	"WAWebChatThemeModeContext",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useContext, d = { root: {
		display: "xjp7ctv",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(5), a = t.children, i = c(r("WAWebChatThemeModeContext")), l = i.chatThemeStyle, s;
		n[0] !== l ? (s = (e || (e = r("stylex"))).props(d.root, l), n[0] = l, n[1] = s) : s = n[1];
		var m;
		return n[2] !== a || n[3] !== s ? (m = u.jsx("div", babelHelpers.extends({}, s, { children: a })), n[2] = a, n[3] = s, n[4] = m) : m = n[4], m;
	}
	l.default = m;
}), 98);
