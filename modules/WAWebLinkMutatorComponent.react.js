__d("WAWebLinkMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { link: {
		textDecoration: "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
		color: "x1ph7ams x17f7hit",
		backgroundColor: "x9dqhi0 xn69kzl",
		textUnderlineOffset: "xrys4gj xhmieyt",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.children, r = e.dataTab, a = e.href, i = e.onClick, l = e.selectable, c = e.xstyle, d = n === void 0 ? "" : n, m, p;
		t[0] !== i ? (m = function(t) {
			i == null || i();
		}, p = function(t) {
			i == null || i();
		}, t[0] = i, t[1] = m, t[2] = p) : (m = t[1], p = t[2]);
		var _;
		t[3] !== c ? (_ = [u.link, c], t[3] = c, t[4] = _) : _ = t[4];
		var f;
		return t[5] !== d || t[6] !== r || t[7] !== a || t[8] !== l || t[9] !== m || t[10] !== p || t[11] !== _ ? (f = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			onClick: m,
			onContextMenu: p,
			xstyle: _,
			href: a,
			title: a,
			target: "_blank",
			rel: "noopener noreferrer",
			selectable: l,
			dataTab: r,
			children: d
		}), t[5] = d, t[6] = r, t[7] = a, t[8] = l, t[9] = m, t[10] = p, t[11] = _, t[12] = f) : f = t[12], f;
	}
	l.default = c;
}), 98);
