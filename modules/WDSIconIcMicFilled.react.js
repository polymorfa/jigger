__d("WDSIconIcMicFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-mic-filled";
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
				d: "M12 14a3 3 0 0 1-2.13-.87A3 3 0 0 1 9 11V5q0-1.25.87-2.12A3 3 0 0 1 12 2q1.25 0 2.12.88Q15 3.75 15 5v6q0 1.25-.88 2.13A3 3 0 0 1 12 14m0 7a1 1 0 0 1-.71-.29 1 1 0 0 1-.3-.71v-2.1a6.86 6.86 0 0 1-5.93-5.82.8.8 0 0 1 .24-.76q.3-.32.8-.32.35 0 .62.26.28.27.35.64a5 5 0 0 0 1.7 2.92Q10.15 16 12 16q1.84 0 3.22-1.18a5 5 0 0 0 1.7-2.92q.07-.37.37-.64.29-.26.63-.26a1 1 0 0 1 .78.32q.3.33.22.75A6.86 6.86 0 0 1 13 17.9V20q0 .42-.29.71-.3.3-.71.29"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
