__d("WDSIconIcLock.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-lock";
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
				d: "M6 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V10c0-.55.2-1.02.59-1.41C4.98 8.19 5.45 8 6 8h1V6c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 12 1c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 17 6v2h1c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v10c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm0-2h12V10H6v10Zm6-3c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41 0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59ZM9 8h6V6c0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 3c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 6v2Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
