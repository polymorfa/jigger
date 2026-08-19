__d("WDSIconWdsIcChatlockOutline.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-chatlock-outline";
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
					d: "M18.8 7.1h-1.3V5.6c0-3-2.5-5.5-5.5-5.5S6.5 2.6 6.5 5.6v1.5H5.2c-1.5 0-2.7 1.2-2.7 2.7v8.6c0 1.5 1.2 2.7 2.7 2.7h1.3v1.8c0 .6.5 1 1 1 .2 0 .3 0 .5-.2l3.5-2.6h7.3c1.5 0 2.7-1.2 2.7-2.7V9.8c0-1.5-1.2-2.7-2.7-2.7ZM8.5 5.6c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v1.5h-7V5.6Zm11 12.9c0 .4-.3.7-.7.7h-8L8.5 21v-1.8H5.2c-.4 0-.7-.3-.7-.7V9.8c0-.4.3-.7.7-.7h13.7c.4 0 .7.3.7.7v8.7h-.1Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M16.5 11h-9c-.6 0-1 .4-1 1s.4 1 1 1h9c.6 0 1-.4 1-1s-.4-1-1-1Zm-3 4h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
