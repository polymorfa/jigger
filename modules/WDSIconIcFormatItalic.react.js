__d("WDSIconIcFormatItalic.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-format-italic";
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
				d: "M6.25 19a1.2 1.2 0 0 1-.89-.36 1.2 1.2 0 0 1-.36-.89c0-.35.12-.65.36-.89s.54-.36.89-.36H9l3-9H9.25a1.2 1.2 0 0 1-.89-.36A1.2 1.2 0 0 1 8 6.25c0-.35.12-.65.36-.89S8.9 5 9.25 5h7.5c.35 0 .65.12.89.36s.36.54.36.89-.12.65-.36.89a1.2 1.2 0 0 1-.89.36H14.5l-3 9h2.25c.35 0 .65.12.89.36s.36.54.36.89-.12.65-.36.89a1.2 1.2 0 0 1-.89.36h-7.5Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
