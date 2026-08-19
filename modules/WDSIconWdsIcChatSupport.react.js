__d("WDSIconWdsIcChatSupport.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-chat-support";
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
					d: "M11.6 9.29a1 1 0 0 1 .54-.14c.28 0 .53.1.75.28.22.18.33.41.33.7-.07.31-.13.5-.18.57-.18.27-.4.5-.66.7-.26.2-.47.44-.64.72-.07.12-.11.23-.14.34l-.06.36c-.02.17.03.32.15.44.12.13.27.19.45.19.17 0 .3-.06.41-.17a.93.93 0 0 0 .22-.43l.12-.35c.15-.28.35-.53.6-.74a3.14 3.14 0 0 0 .88-1.15 1.9 1.9 0 0 0-.61-2.01c-.46-.4-1-.6-1.62-.6a2.41 2.41 0 0 0-2.08 1.15.4.4 0 0 0 0 .42c.07.15.18.26.33.33.13.07.28.07.43.03a.76.76 0 0 0 .37-.28c.12-.15.26-.27.41-.36Zm-.06 6.47c.17.16.37.24.6.24a.8.8 0 0 0 .59-.24.8.8 0 0 0 .24-.58.84.84 0 0 0-.24-.6.78.78 0 0 0-.59-.26.82.82 0 0 0-.6.25.82.82 0 0 0-.25.6c0 .24.08.43.25.6Z"
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
