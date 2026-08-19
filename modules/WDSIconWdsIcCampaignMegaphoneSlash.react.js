__d("WDSIconWdsIcCampaignMegaphoneSlash.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-campaign-megaphone-slash";
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
					d: "m19.07 22.23-5.97-5.97a.95.95 0 0 1-.51.84c-.34.2-.68.2-1.01 0L8.1 15h-1v3c0 .28-.1.52-.29.71a.91.91 0 0 1-.7.29.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71v-3h-1c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-2c0-.55.2-1.02.59-1.41.4-.4.86-.59 1.41-.59h1.74L2.1 5.26a.93.93 0 0 1-.27-.69.97.97 0 0 1 .99-1.01c.27 0 .5.1.7.3l4.93 4.93 1.47 1.46 1.18 1.19 2 2 1 1 .45.44 2.06 2.07 2.66 2.65 1.23 1.23c.2.2.3.44.29.7a1 1 0 0 1-.31.7c-.2.19-.44.28-.7.3a.92.92 0 0 1-.7-.3Zm-7.97-7.97L7.84 11H4.1v2h4.55l2.45 1.45v-.19Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M15.6 12c0 .35-.03.68-.1 1l-1.4-1.4V8.65A4.57 4.57 0 0 1 15.6 12Zm-2.5-4.23v2.83l-2.88-2.88 1.36-.82c.33-.2.67-.2 1.01 0 .34.2.51.5.51.87Zm8.71 4.94a.91.91 0 0 1-.7.29h-2a.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71c0-.28.1-.52.29-.71.2-.2.43-.29.71-.29h2c.29 0 .52.1.71.29.2.19.3.43.3.71 0 .28-.1.52-.3.71ZM19.7 6.2l-1.6 1.2c-.23.17-.48.23-.75.2a.91.91 0 0 1-.65-.4 1.03 1.03 0 0 1-.2-.75.91.91 0 0 1 .4-.65l1.6-1.2c.24-.17.49-.23.75-.2a.9.9 0 0 1 .65.4c.17.23.24.48.2.75a.91.91 0 0 1-.4.65Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
