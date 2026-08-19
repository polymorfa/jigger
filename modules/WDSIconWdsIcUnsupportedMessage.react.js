__d("WDSIconWdsIcUnsupportedMessage.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-unsupported-message";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "m13.9 9.2-1.4 1.4-1.4-1.4c-.3-.3-.78-.42-1.16-.22a1 1 0 0 0-.27 1.6L11.1 12l-1.4 1.4c-.3.3-.42.78-.22 1.16a1 1 0 0 0 1.6.27l1.42-1.43 1.4 1.4c.3.3.78.42 1.16.22a1 1 0 0 0 .27-1.6L13.9 12l1.43-1.43a1 1 0 0 0-.27-1.6 1.02 1.02 0 0 0-1.16.23Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.67.67h13.66c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.6L5 8.28Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
