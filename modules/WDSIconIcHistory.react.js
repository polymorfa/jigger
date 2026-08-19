__d("WDSIconIcHistory.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-history";
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
				d: "M12 21a8.8 8.8 0 0 1-5.58-1.91 8.68 8.68 0 0 1-3.15-4.89.74.74 0 0 1 .15-.69c.17-.2.4-.33.68-.36.27-.03.5.02.73.15.21.13.36.33.45.6a6.65 6.65 0 0 0 2.47 3.67A6.84 6.84 0 0 0 12 19c1.95 0 3.6-.68 4.96-2.04A6.75 6.75 0 0 0 19 12c0-1.95-.68-3.6-2.04-4.96A6.75 6.75 0 0 0 12 5c-1.15 0-2.22.27-3.22.8A7.43 7.43 0 0 0 6.25 8H8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 8 10H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 9V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v1.35a8.93 8.93 0 0 1 10.51-2.64A9.15 9.15 0 0 1 20.3 8.5 8.7 8.7 0 0 1 21 12a8.7 8.7 0 0 1-.71 3.51 9.15 9.15 0 0 1-4.78 4.78A8.7 8.7 0 0 1 12 21Zm1-9.4 2.5 2.5c.18.18.28.42.28.7a.95.95 0 0 1-.97.97.95.95 0 0 1-.71-.27l-2.8-2.8a1 1 0 0 1-.3-.72V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v3.6Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
