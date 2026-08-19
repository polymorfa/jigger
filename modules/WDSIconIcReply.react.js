__d("WDSIconIcReply.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-reply";
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
				d: "m6.83 12 2.9 2.9c.2.2.3.43.28.7a1 1 0 0 1-.31.7c-.2.18-.43.28-.7.29a.92.92 0 0 1-.7-.29l-4.6-4.6a.96.96 0 0 1 0-1.4l4.6-4.6a.93.93 0 0 1 .69-.28c.27 0 .51.1.71.28.2.2.3.44.3.71 0 .28-.1.51-.3.71L6.83 10H16c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 21 15v3c0 .28-.1.52-.29.71A.94.94 0 0 1 20 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 19 18v-3c0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 16 12H6.83Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
