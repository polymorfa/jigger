__d("WDSIconIcCake.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-cake";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M4 22a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 21v-5c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59v-4c0-.55.2-1.02.59-1.41C5.98 8.19 6.45 8 7 8h4V6.55a2.5 2.5 0 0 1-.72-.72A1.85 1.85 0 0 1 10 4.8a2.03 2.03 0 0 1 .6-1.4l1.05-1.05c.03-.03.15-.08.35-.15.03 0 .15.05.35.15L13.4 3.4a2.03 2.03 0 0 1 .6 1.4c0 .4-.1.74-.28 1.03a2.5 2.5 0 0 1-.72.72V8h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v5c0 .28-.1.52-.29.71A.94.94 0 0 1 20 22H4Zm3-8h10v-4H7v4Zm-2 6h14v-4H5v4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
