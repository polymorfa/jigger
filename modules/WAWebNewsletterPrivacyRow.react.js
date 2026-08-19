__d("WAWebNewsletterPrivacyRow.react", [
	"WAWebChatInfoDrawerRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.icon, r = e.onClick, a = e.text, i = e.title, l;
		t[0] !== i ? (l = s.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: i }), t[0] = i, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== a ? (c = s.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, { title: a }), t[2] = a, t[3] = c) : c = t[3];
		var d = c, m;
		return t[4] !== n || t[5] !== r || t[6] !== d || t[7] !== u ? (m = s.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			onClick: r,
			icon: n,
			title: u,
			secondaryTitle: d
		}), t[4] = n, t[5] = r, t[6] = d, t[7] = u, t[8] = m) : m = t[8], m;
	}
	l.default = u;
}), 98);
