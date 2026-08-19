__d("WDSIconWdsIcMetaDataDoubleChevron.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-meta-data-double-chevron";
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
					d: "M7.47 14.58 10.06 12 7.48 9.41a1 1 0 1 1 1.4-1.4l3.3 3.28a1 1 0 0 1 0 1.41L8.88 16a1 1 0 0 1-1.4 0 1.02 1.02 0 0 1 0-1.42Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "m15.06 12-2.59 2.58a1.02 1.02 0 0 0 0 1.42 1 1 0 0 0 1.41 0l3.3-3.3a1 1 0 0 0 0-1.4L13.88 8a1 1 0 1 0-1.4 1.41L15.06 12Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
