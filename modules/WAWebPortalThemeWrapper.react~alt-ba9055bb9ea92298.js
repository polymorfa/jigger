__d("WAWebPortalThemeWrapper.react", [
	"WAWebChatThemeModeContext",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useContext, d = { root: {
		display: "xjp7ctv",
		$$css: !0
	} };
	function m(t) {
		var n = t.children, o = c(r("WAWebChatThemeModeContext")), a = o.chatThemeStyle;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.root, a), { children: n }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
