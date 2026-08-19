__d("WDSIconWdsIcHdSettings.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-hd-settings";
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
					d: "M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v7h-2V6H4v12h11v2H4Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M7.5 13h2v1.25a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75v-4.5a.73.73 0 0 0-.75-.75.73.73 0 0 0-.75.75v1.75h-2V9.75A.73.73 0 0 0 6.75 9a.73.73 0 0 0-.75.75v4.5a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75V13Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M13.75 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.5A2.75 2.75 0 0 0 18 12.25v-.5A2.75 2.75 0 0 0 15.25 9h-1.5Zm.5 4.5v-3h1c.69 0 1.25.56 1.25 1.25v.5c0 .69-.56 1.25-1.25 1.25h-1Zm4.88 7.8a5.7 5.7 0 0 1-.88-.48l-.58.18a.8.8 0 0 1-.9-.34l-.16-.28a.78.78 0 0 1-.1-.52.7.7 0 0 1 .26-.46l.44-.38a3.16 3.16 0 0 1 0-1.04l-.44-.38a.7.7 0 0 1-.26-.45.76.76 0 0 1 .1-.51l.18-.3a.8.8 0 0 1 .38-.32.72.72 0 0 1 .5-.02l.58.18a3.48 3.48 0 0 1 .88-.48l.12-.58a.77.77 0 0 1 .76-.62h.32c.19 0 .35.06.49.18s.23.27.27.46l.12.56a5.7 5.7 0 0 1 .88.48l.58-.18a.8.8 0 0 1 .9.34l.16.28c.1.16.13.33.1.52a.7.7 0 0 1-.26.46l-.44.38a3.16 3.16 0 0 1 0 1.04l.44.38a.7.7 0 0 1 .26.45c.03.18 0 .35-.1.51l-.18.3a.8.8 0 0 1-.38.32.72.72 0 0 1-.5.02l-.58-.18a3.48 3.48 0 0 1-.88.48l-.12.58a.77.77 0 0 1-.76.62H20a.73.73 0 0 1-.5-.18.81.81 0 0 1-.26-.46l-.12-.56Zm1.04-1.2c.44 0 .82-.16 1.13-.47.31-.31.47-.69.47-1.13 0-.44-.16-.82-.47-1.13a1.54 1.54 0 0 0-1.13-.47c-.44 0-.82.16-1.13.47-.31.31-.47.69-.47 1.13 0 .44.16.82.47 1.13.31.31.69.47 1.13.47Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
