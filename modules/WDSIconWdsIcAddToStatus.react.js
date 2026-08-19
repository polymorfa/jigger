__d("WDSIconWdsIcAddToStatus.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-add-to-status";
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
					d: "M15.95 4.05a.98.98 0 0 0 1 1h2v2a.98.98 0 0 0 1 1 .98.98 0 0 0 1-1v-2h2a.98.98 0 0 0 1-1 .98.98 0 0 0-1-1h-2v-2a.98.98 0 0 0-1-1 .98.98 0 0 0-1 1v2h-2a.98.98 0 0 0-1 1ZM3.72 8.34a1 1 0 0 1-.37-1.37 10 10 0 0 1 9.84-4.9 1 1 0 0 1-.24 1.99 8 8 0 0 0-7.87 3.92 1 1 0 0 1-1.36.36Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M21.95 11.01a1 1 0 1 0-1.99.2A8 8 0 0 1 15.88 19a1 1 0 0 0 .97 1.75 10 10 0 0 0 5.1-9.74ZM6.34 17.66A7.97 7.97 0 0 0 11.98 20c.51 0 .99.33 1.1.83.13.58-.27 1.15-.86 1.17A9.97 9.97 0 0 1 2 11.7c.02-.59.6-.98 1.18-.85.5.12.82.6.82 1.11a7.98 7.98 0 0 0 2.34 5.7Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
