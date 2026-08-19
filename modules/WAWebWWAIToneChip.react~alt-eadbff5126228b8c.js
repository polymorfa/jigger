__d("WAWebWWAIToneChip.react", ["react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.isActive, n = e.onSelect, r = e.tone, o = u(function() {
			n(r.id);
		}, [n, r.id]);
		return s.jsx("button", babelHelpers.extends({}, {
			0: { className: "x78zum5 x6s0dn4 xl56j7k x1tiyuxx x1nbhmlj xdx6fka xvtqlqk x6nvzda x4i4b9w xhl9efl xj65ea0 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xjbqb8w x14ug900 x1nxh6w3 xd4r4e8 x1ypdohk xuxw1ft x1n67ipk xe1j47m x1cgwre2 xm2pc3q x8b8dig xy28gfk" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k x1tiyuxx x1nbhmlj xdx6fka xvtqlqk x6nvzda x4i4b9w xhl9efl xj65ea0 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1nxh6w3 xd4r4e8 x1ypdohk xuxw1ft x1n67ipk xe1j47m x1cgwre2 xm2pc3q x8b8dig xy28gfk x9ij8ju xi9vmww xn5an6o x1vcb1cy x1abdmlv xk4n5i7" }
		}[!!t << 0], {
			"data-testid": "wwai_tone_chip_" + r.id,
			role: "tab",
			"aria-selected": t,
			tabIndex: t ? 0 : -1,
			onClick: o,
			type: "button",
			children: r.label
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
