__d("WAWebSquircleIcon.react", [
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		icon: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			color: "x17t9dm2",
			backgroundColor: "xfn3atn",
			clipPath: "x1f2iure",
			$$css: !0
		},
		disabled: {
			backgroundColor: "x1ailiqk",
			$$css: !0
		},
		transparent: {
			color: "xhslqc4",
			backgroundColor: "x1jbjsai",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(10), a = t.children, i = t.disabled, l = t.size, s = t.transparent, d = t.xstyle, m = l === void 0 ? 48 : l, p;
		n[0] !== i || n[1] !== s || n[2] !== d ? (p = (e || (e = r("stylex")))(c.icon, s === !0 && c.transparent, i === !0 && c.disabled, d), n[0] = i, n[1] = s, n[2] = d, n[3] = p) : p = n[3];
		var _;
		n[4] !== m ? (_ = {
			height: m,
			width: m
		}, n[4] = m, n[5] = _) : _ = n[5];
		var f;
		return n[6] !== a || n[7] !== p || n[8] !== _ ? (f = u.jsx("div", {
			className: p,
			style: _,
			children: a
		}), n[6] = a, n[7] = p, n[8] = _, n[9] = f) : f = n[9], f;
	}
	l.default = d;
}), 98);
