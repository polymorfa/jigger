__d("WAWebSquircleIcon.react", ["react", "stylex"], (function(t, n, r, o, a, i, l) {
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
		var n = t.children, o = t.disabled, a = t.size, i = a === void 0 ? 48 : a, l = t.transparent, s = t.xstyle;
		return u.jsx("div", {
			className: (e || (e = r("stylex")))(c.icon, l === !0 && c.transparent, o === !0 && c.disabled, s),
			style: {
				height: i,
				width: i
			},
			children: n
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
