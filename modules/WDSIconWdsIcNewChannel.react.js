__d("WDSIconWdsIcNewChannel.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-new-channel";
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
					d: "M15.95 4.05a.98.98 0 0 0 1 1h2v2a.98.98 0 0 0 1 1 .98.98 0 0 0 1-1v-2h2a.98.98 0 0 0 1-1 .98.98 0 0 0-1-1h-2v-2a.98.98 0 0 0-1-1 .98.98 0 0 0-1 1v2h-2a.98.98 0 0 0-1 1Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M14 3a.91.91 0 0 0-.79-.93A10 10 0 0 0 3.18 16.7 48.91 48.91 0 0 0 2 21a1 1 0 0 0 1 1c.31 0 2.46-.63 4.3-1.18a10 10 0 0 0 14.63-10.03A.91.91 0 0 0 21 10c-.63 0-1.1.6-1.04 1.24a8 8 0 0 1-11.72 7.82l-.72-.4-.8.24c-.77.24-1.6.48-2.3.68.2-.7.44-1.53.68-2.3l.23-.8-.39-.72a8 8 0 0 1 7.82-11.72C13.4 4.1 14 3.64 14 3Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M15.83 8.63A1 1 0 0 1 17.2 9a5.98 5.98 0 0 1 0 6 1 1 0 0 1-1.73-1 3.98 3.98 0 0 0 0-4 1 1 0 0 1 .36-1.37Zm-7.66 0A1 1 0 0 1 8.53 10a3.98 3.98 0 0 0 0 4 1 1 0 0 1-1.73 1 5.98 5.98 0 0 1 0-6 1 1 0 0 1 1.37-.37ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
