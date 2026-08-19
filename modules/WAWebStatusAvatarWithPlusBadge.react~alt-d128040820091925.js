__d("WAWebStatusAvatarWithPlusBadge.react", [
	"WAWebDetailImage.react",
	"WAWebStatusPlusBadge.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 40;
	function c(e) {
		var t = e.anchorRef, n = e.id;
		return s.jsxs("div", {
			className: "x1rg5ohu x1n2onr6 x100vrsf x1vqgdyp",
			children: [s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: n,
				theme: "status",
				size: u
			}), s.jsx(r("WAWebStatusPlusBadge.react"), { anchorRef: t })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
