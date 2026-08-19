__d("WDSIconIcLocationOn.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-location-on";
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
				d: "M12 19.35a27.52 27.52 0 0 0 4.52-5.09c.99-1.52 1.48-2.88 1.48-4.06 0-1.82-.58-3.3-1.74-4.46A5.8 5.8 0 0 0 12 4a5.8 5.8 0 0 0-4.26 1.74A6.04 6.04 0 0 0 6 10.2c0 1.18.5 2.54 1.47 4.06A27.9 27.9 0 0 0 12 19.35Zm0 1.97a2.07 2.07 0 0 1-1.32-.5c-1.09-1-2.05-1.97-2.88-2.92a21.68 21.68 0 0 1-2.09-2.76c-.56-.9-.98-1.75-1.27-2.58A7.09 7.09 0 0 1 4 10.2c0-2.5.8-4.5 2.41-5.97A8 8 0 0 1 12 2a8 8 0 0 1 5.59 2.22A7.78 7.78 0 0 1 20 10.2a7.1 7.1 0 0 1-.44 2.36 12.8 12.8 0 0 1-1.27 2.58 22.3 22.3 0 0 1-2.09 2.76c-.83.95-1.8 1.93-2.88 2.93a2.07 2.07 0 0 1-1.32.5ZM12 12c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41 0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
