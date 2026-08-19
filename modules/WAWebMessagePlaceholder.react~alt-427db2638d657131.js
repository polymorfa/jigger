__d("WAWebMessagePlaceholder.react", [
	"WAWebMessageSpacerText.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { marginTop3: {
		marginTop: "x7r5mf7",
		$$css: !0
	} };
	function d(t) {
		var n = t.Icon, a = t.children, i = t.hasCaption, l = t.msg, s = t.theme, d = i ? a : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			c.marginTop3,
			o("WDSMargins.stylex").wdsMargins.marginBottom2,
			s === "small-icon" && o("WDSMargins.stylex").wdsMargins.marginTop0
		]), { children: u.jsx(r("WAWebMessageSpacerText.react"), {
			msg: l,
			theme: "placeholder",
			children: a
		}) }));
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x1cy8zhl x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs",
			children: [n != null ? u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1okw0bk xhslqc4 xf6vk7d" },
				1: { className: "x1okw0bk xhslqc4 xf6vk7d x1ok221b" }
			}[(s === "status-icon") << 0], { children: n })) : null, d]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
