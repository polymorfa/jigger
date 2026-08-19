__d("WAWebPremiumChannelIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "premium-channel";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "currentColor",
					children: [
						u.jsx("path", { d: "m12.15 19.55 7.8-9.13a1.7 1.7 0 0 0 .14-2.02l-1.63-2.58 1.52-.96 1.63 2.58a3.5 3.5 0 0 1-.29 4.15l-7.8 9.13a2 2 0 0 1-3.04 0l-7.8-9.13a3.5 3.5 0 0 1-.3-4.15l1.64-2.58A4 4 0 0 1 7.4 3h9.2a4 4 0 0 1 3.38 1.86l-1.52.96A2.2 2.2 0 0 0 16.6 4.8H7.4a2.2 2.2 0 0 0-1.86 1.02L3.9 8.4a1.7 1.7 0 0 0 .15 2.02l7.8 9.13a.2.2 0 0 0 .3 0" }),
						u.jsx("path", {
							fillRule: "evenodd",
							d: "M9.12 18.79a.9.9 0 1 0 1.76-.38L8.93 9.36l1.46-5.11a.9.9 0 1 0-1.73-.5L7.07 9.3zm5.76 0a.9.9 0 0 1-1.76-.38l1.95-9.05-1.46-5.11a.9.9 0 1 1 1.73-.5l1.59 5.55z",
							clipRule: "evenodd"
						}),
						u.jsx("path", {
							fillRule: "evenodd",
							d: "M21 10.4H3V8.6h18z",
							clipRule: "evenodd"
						})
					]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PremiumChannelIcon = d;
}), 98);
