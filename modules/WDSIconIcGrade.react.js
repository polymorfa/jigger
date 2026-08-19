__d("WDSIconIcGrade.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-grade";
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
				d: "m8.85 16.82 3.15-1.9 3.15 1.93-.83-3.6 2.78-2.4-3.65-.32L12 7.13l-1.45 3.37-3.65.32 2.78 2.43-.83 3.57Zm3.15.45-4.15 2.5a.9.9 0 0 1-.57.15.97.97 0 0 1-.53-.2 1.2 1.2 0 0 1-.35-.43.87.87 0 0 1-.05-.59l1.1-4.72-3.67-3.18a.96.96 0 0 1-.28-1.08c.07-.18.17-.33.3-.45.13-.11.32-.19.55-.22l4.85-.43 1.88-4.45a.9.9 0 0 1 .38-.45c.18-.1.36-.15.54-.15.18 0 .36.05.54.15.17.1.3.25.39.45l1.87 4.45 4.85.43c.23.03.42.1.55.22a1.07 1.07 0 0 1 .34 1.02.96.96 0 0 1-.31.51l-3.68 3.17 1.1 4.73a.9.9 0 0 1-.05.59c-.08.17-.2.32-.35.44a.97.97 0 0 1-.52.2.9.9 0 0 1-.58-.16L12 17.27Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
