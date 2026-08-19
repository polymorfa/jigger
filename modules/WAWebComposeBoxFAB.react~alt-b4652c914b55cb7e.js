__d("WAWebComposeBoxFAB.react", [
	"fbt",
	"WDSIconWdsIcPencilAi.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = s._(
		/*BTDS*/
		""
	).toString();
	function m(e) {
		var t = e.isVisible, n = e.onPress, o = c(function() {
			t && n();
		}, [t, n]);
		return u.jsx("button", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1fns5xo x2lah0s xt8t1vi x1xc408v x129tdwq x15urzxu x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk xuwfzo9 x19991ni xx6bhzk xz4gly6 xs2atcs xg01cxk x47corl" },
			1: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1fns5xo x2lah0s xt8t1vi x1xc408v x129tdwq x15urzxu x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk xuwfzo9 x19991ni xx6bhzk xz4gly6 xs2atcs x1hc1fzr" }
		}[!!t << 0], {
			"data-testid": "wwai_fab",
			onClick: o,
			type: "button",
			title: d,
			"aria-label": d,
			"aria-hidden": !t,
			tabIndex: t ? 0 : -1,
			children: u.jsx(r("WDSIconWdsIcPencilAi.react"), { "aria-hidden": !0 })
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
