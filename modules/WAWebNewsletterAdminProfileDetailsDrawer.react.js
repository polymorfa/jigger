__d("WAWebNewsletterAdminProfileDetailsDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNewsletterAdminProfileDetailsView.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.newsletterAdminProfile, a = e.onClose, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: i,
			onCancel: a
		}), t[1] = a, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1sk1jro x1ci70gm" }, t[3] = c) : c = t[3];
		var d;
		t[4] !== n ? (d = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			children: u.jsx("div", babelHelpers.extends({}, c, { children: u.jsx(r("WAWebNewsletterAdminProfileDetailsView.react"), { newsletterAdminProfile: n }) }))
		}) }), t[4] = n, t[5] = d) : d = t[5];
		var m;
		return t[6] !== l || t[7] !== d ? (m = u.jsxs(r("WAWebDrawer.react"), { children: [l, d] }), t[6] = l, t[7] = d, t[8] = m) : m = t[8], m;
	}
	l.default = c;
}), 226);
