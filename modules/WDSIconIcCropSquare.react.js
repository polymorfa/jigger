__d("WDSIconIcCropSquare.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-crop-square";
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
				d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v14c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0-2h14V5H5v14Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
