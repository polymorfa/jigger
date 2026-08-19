__d("WAWebComposeBoxFAB.react", [
	"fbt",
	"WDSIconWdsIcPencilAi.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = s._(
		/*BTDS*/
		""
	).toString();
	function m(e) {
		var t = o("react-compiler-runtime").c(11), n = e.isVisible, a = e.onPress, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			n && a();
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, s;
		t[3] !== n ? (s = {
			0: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1fns5xo x2lah0s xt8t1vi x1xc408v x129tdwq x15urzxu x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk xuwfzo9 x19991ni xx6bhzk xz4gly6 xs2atcs xg01cxk x47corl" },
			1: { className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1fns5xo x2lah0s xt8t1vi x1xc408v x129tdwq x15urzxu x972fbf x10w94by x1qhh985 x14e42zd xjbqb8w x1ypdohk xuwfzo9 x19991ni xx6bhzk xz4gly6 xs2atcs x1hc1fzr" }
		}[!!n << 0], t[3] = n, t[4] = s) : s = t[4];
		var c = !n, m = n ? 0 : -1, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSIconWdsIcPencilAi.react"), { "aria-hidden": !0 }), t[5] = p) : p = t[5];
		var _;
		return t[6] !== l || t[7] !== s || t[8] !== c || t[9] !== m ? (_ = u.jsx("button", babelHelpers.extends({}, s, {
			"data-testid": "wwai_fab",
			onClick: l,
			type: "button",
			title: d,
			"aria-label": d,
			"aria-hidden": c,
			tabIndex: m,
			children: p
		})), t[6] = l, t[7] = s, t[8] = c, t[9] = m, t[10] = _) : _ = t[10], _;
	}
	l.default = m;
}), 226);
