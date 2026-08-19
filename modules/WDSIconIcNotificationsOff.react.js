__d("WDSIconIcNotificationsOff.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-notifications-off";
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
				d: "M16.15 19H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1v-7a6.3 6.3 0 0 1 .85-3.15l1.5 1.5A4.2 4.2 0 0 0 8 10v7h6.2L2.1 4.9a.95.95 0 0 1-.27-.7c0-.28.09-.52.27-.7a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27l17 17a1 1 0 0 1 0 1.4.95.95 0 0 1-.7.28.95.95 0 0 1-.7-.28L16.15 19ZM13.5 4.2a5.77 5.77 0 0 1 3.25 2.11A5.86 5.86 0 0 1 18 10v2.75c0 .33-.1.58-.31.75a1.05 1.05 0 0 1-1.38-.01.98.98 0 0 1-.31-.77V10c0-1.1-.4-2.04-1.18-2.83a3.85 3.85 0 0 0-3.67-1.07c-.3.07-.57.15-.8.25-.28.12-.56.14-.84.08a1 1 0 0 1-.63-.48.96.96 0 0 1-.14-.69.72.72 0 0 1 .39-.54c.21-.11.44-.21.67-.3l.7-.22v-.7c0-.42.15-.77.44-1.06.29-.3.64-.44 1.06-.44.42 0 .77.15 1.06.44.3.29.44.64.44 1.06v.7ZM12 22c-.5 0-.95-.14-1.34-.41a1.3 1.3 0 0 1-.59-1.11c0-.14.06-.25.17-.34a.5.5 0 0 1 .36-.14h2.8c.13 0 .25.05.36.14.11.09.17.2.17.34 0 .46-.2.83-.6 1.1A2.2 2.2 0 0 1 12 22Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
