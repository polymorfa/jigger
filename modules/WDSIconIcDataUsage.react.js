__d("WDSIconIcDataUsage.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-data-usage";
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
				d: "M12 22a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12c0-2.17.63-4.12 1.88-5.85a9.75 9.75 0 0 1 4.97-3.62c.48-.17.93-.11 1.34.17.4.28.61.67.61 1.15a1.56 1.56 0 0 1-1.03 1.48 6.57 6.57 0 0 0-3.46 2.5A6.99 6.99 0 0 0 5 12c0 1.95.68 3.6 2.04 4.96a7.16 7.16 0 0 0 9.64.29c.25-.23.55-.35.9-.35.37 0 .67.12.92.35.38.35.58.75.6 1.19.02.44-.17.83-.55 1.16A9.62 9.62 0 0 1 12 22Zm7-10a6.9 6.9 0 0 0-1.32-4.14 6.76 6.76 0 0 0-3.48-2.53c-.3-.1-.55-.3-.74-.57a1.56 1.56 0 0 1-.29-.91c0-.48.2-.87.62-1.15.4-.28.85-.34 1.34-.17a9.88 9.88 0 0 1 5 3.65 9.72 9.72 0 0 1 1.83 6.73c-.02.31-.07.65-.14 1.02-.08.48-.32.82-.73 1.03a1.6 1.6 0 0 1-1.34.04 1.38 1.38 0 0 1-.74-.64c-.17-.3-.23-.63-.16-.96A12.86 12.86 0 0 0 19 12Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
