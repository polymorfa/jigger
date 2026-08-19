__d("WDSIconIcLockPerson.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-lock-person";
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
				d: "M18 18c.42 0 .77-.15 1.06-.44.3-.29.44-.64.44-1.06 0-.42-.15-.77-.44-1.06A1.4 1.4 0 0 0 18 15c-.42 0-.77.15-1.06.44-.3.29-.44.64-.44 1.06 0 .42.15.77.44 1.06.29.3.64.44 1.06.44Zm0 3a3.01 3.01 0 0 0 2.48-1.32A4.45 4.45 0 0 0 18 19a4.45 4.45 0 0 0-2.47.68A3.01 3.01 0 0 0 18 21ZM9 8h6V6c0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 12 3c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9 6v2Zm3.25 14H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V10c0-.55.2-1.02.59-1.41C4.98 8.19 5.45 8 6 8h1V6c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 12 1c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 17 6v2h1c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v1.3a5.7 5.7 0 0 0-2-.3v-1H6v10h5.3a7.05 7.05 0 0 0 .95 2ZM18 23a4.82 4.82 0 0 1-3.54-1.46A4.82 4.82 0 0 1 13 18c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 18 13c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 23 18c0 1.38-.49 2.56-1.46 3.54A4.82 4.82 0 0 1 18 23Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
