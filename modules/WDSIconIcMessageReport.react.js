__d("WDSIconIcMessageReport.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-message-report";
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
					fillRule: "evenodd",
					d: "M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.66 20h13.67C20.8 20 22 18.8 22 17.33V6.67C22 5.19 20.8 4 19.33 4H1.79a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.66.67h13.67c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.59l1.4 2.28Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M13.1 15.71a.91.91 0 0 1-.7.29.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71c0-.28.1-.52.3-.71a.9.9 0 0 1 .7-.29 1 1 0 0 1 .72.29c.19.19.28.43.28.71a1 1 0 0 1-.28.71Zm0-3a.91.91 0 0 1-.7.29 1.03 1.03 0 0 1-.72-.29 1.03 1.03 0 0 1-.29-.71V9c0-.28.1-.52.3-.71a.9.9 0 0 1 .7-.29 1 1 0 0 1 .72.29c.19.19.28.43.28.71v3a1 1 0 0 1-.28.71Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
