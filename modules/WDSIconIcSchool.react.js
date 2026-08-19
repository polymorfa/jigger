__d("WDSIconIcSchool.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-school";
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
				d: "M6.05 17.77A2 2 0 0 1 5 16v-4.8L2.6 9.88a.97.97 0 0 1-.4-.38 1.01 1.01 0 0 1-.13-.5c0-.18.05-.35.13-.5a.97.97 0 0 1 .4-.37l8.45-4.6a2 2 0 0 1 .95-.25 1.9 1.9 0 0 1 .95.25l9.53 5.2c.16.08.3.2.38.36a1 1 0 0 1 .14.51V16c0 .28-.1.52-.29.71A.94.94 0 0 1 22 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 21 16v-5.9l-2 1.1V16a2 2 0 0 1-1.05 1.77l-5 2.7a2 2 0 0 1-.95.26 1.9 1.9 0 0 1-.95-.25l-5-2.7ZM12 12.7 18.85 9 12 5.3 5.15 9 12 12.7Zm0 6.03 5-2.7v-3.78l-4.03 2.22a1.94 1.94 0 0 1-.97.25 2.05 2.05 0 0 1-.97-.25L7 12.25v3.77l5 2.7Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
