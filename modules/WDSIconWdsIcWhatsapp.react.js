__d("WDSIconWdsIcWhatsapp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-whatsapp";
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
				u.jsxs("g", {
					fill: "currentColor",
					clipPath: "url(#WDSIconWdsIcWhatsapp__a)",
					children: [u.jsx("path", { d: "M12.01 1.71a10.23 10.23 0 0 0-8.87 15.33l-1.36 5.13 5.31-1.26a10.23 10.23 0 1 0 4.92-19.2Zm0 18.63c-1.71 0-3.3-.51-4.63-1.4l-3.14.8.88-3a8.4 8.4 0 1 1 6.89 3.59Z" }), u.jsx("path", { d: "m14.4 13.29 2.48 1.17a.3.3 0 0 1 .18.3c-.03.32-.16.97-.74 1.55-1.66 1.66-4.62-.21-4.74-.28a8.92 8.92 0 0 1-2.08-1.58 8.93 8.93 0 0 1-1.58-2.08c-.07-.12-1.94-3.08-.28-4.74A2.51 2.51 0 0 1 9.2 6.9a.3.3 0 0 1 .3.18l1.16 2.47a.3.3 0 0 1-.06.35l-.87.87a.6.6 0 0 0-.11.71 7.73 7.73 0 0 0 2.86 2.86.6.6 0 0 0 .7-.1l.88-.88a.3.3 0 0 1 .35-.06Z" })]
				}),
				u.jsx("defs", { children: u.jsx("clipPath", {
					id: "WDSIconWdsIcWhatsapp__a",
					children: u.jsx("path", {
						fill: "white",
						d: "M0 0h20.46v20.46H0z",
						style: {
							fill: "#fff",
							fillOpacity: 1
						},
						transform: "translate(1.78 1.71)"
					})
				}) })
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
