__d("WDSIconIcPublic.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-public";
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
				d: "M12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm-1-2.05V18c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-1l-4.8-4.8-.14.9a7.8 7.8 0 0 0 1.92 6.2A7.7 7.7 0 0 0 11 19.95Zm6.9-2.55a8.4 8.4 0 0 0 1.56-2.51A8.28 8.28 0 0 0 20 12a7.8 7.8 0 0 0-1.36-4.47A7.7 7.7 0 0 0 15 4.6V5c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 10 10H8v2h6c.28 0 .52.1.71.29.2.19.29.43.29.71v3h1c.43 0 .82.13 1.18.39.34.26.59.6.72 1.01Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
