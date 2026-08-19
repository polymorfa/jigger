__d("WDSIconIcCallEndFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-call-end-filled";
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
				d: "M12 8a15.05 15.05 0 0 1 10.9 4.75.96.96 0 0 1 0 1.4l-2.3 2.25a.97.97 0 0 1-1.3.1l-2.9-2.2a1 1 0 0 1-.3-.35 1 1 0 0 1-.1-.45v-2.85c-.63-.2-1.28-.36-1.95-.47a11.87 11.87 0 0 0-4.1 0c-.67.11-1.32.27-1.95.47v2.85a1 1 0 0 1-.1.45 1 1 0 0 1-.3.35l-2.9 2.2a.97.97 0 0 1-1.3-.1l-2.3-2.25a.96.96 0 0 1 0-1.4 14.3 14.3 0 0 1 5.07-3.56C8.1 8.39 10.03 8 12 8Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
