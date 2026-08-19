__d("WAWebWWAIToneChip.react", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.isActive, r = e.onSelect, a = e.tone, i;
		t[0] !== r || t[1] !== a.id ? (i = function() {
			r(a.id);
		}, t[0] = r, t[1] = a.id, t[2] = i) : i = t[2];
		var l = i, u;
		t[3] !== n ? (u = {
			0: { className: "x78zum5 x6s0dn4 xl56j7k x1tiyuxx x1nbhmlj xdx6fka xvtqlqk x6nvzda x4i4b9w xhl9efl xj65ea0 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xjbqb8w x14ug900 x1nxh6w3 xd4r4e8 x1ypdohk xuxw1ft x1n67ipk xe1j47m x1cgwre2 xm2pc3q x8b8dig xy28gfk" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k x1tiyuxx x1nbhmlj xdx6fka xvtqlqk x6nvzda x4i4b9w xhl9efl xj65ea0 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1nxh6w3 xd4r4e8 x1ypdohk xuxw1ft x1n67ipk xe1j47m x1cgwre2 xm2pc3q x8b8dig xy28gfk x9ij8ju xi9vmww xn5an6o x1vcb1cy x1abdmlv xk4n5i7" }
		}[!!n << 0], t[3] = n, t[4] = u) : u = t[4];
		var c = "wwai_tone_chip_" + a.id, d = n ? 0 : -1, m;
		return t[5] !== l || t[6] !== n || t[7] !== u || t[8] !== c || t[9] !== d || t[10] !== a.label ? (m = s.jsx("button", babelHelpers.extends({}, u, {
			"data-testid": c,
			role: "tab",
			"aria-selected": n,
			tabIndex: d,
			onClick: l,
			type: "button",
			children: a.label
		})), t[5] = l, t[6] = n, t[7] = u, t[8] = c, t[9] = d, t[10] = a.label, t[11] = m) : m = t[11], m;
	}
	l.default = c;
}), 98);
