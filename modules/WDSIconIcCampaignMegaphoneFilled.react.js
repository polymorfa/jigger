__d("WDSIconIcCampaignMegaphoneFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-campaign-megaphone-filled";
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
				d: "M21.1 12.93h-2a.97.97 0 0 1-.72-.28.97.97 0 0 1-.28-.72.97.97 0 0 1 1-1h2c.28 0 .52.1.7.3.2.18.3.42.3.7 0 .29-.1.53-.3.72a.93.93 0 0 1-.7.28Zm-4.4 3.8a.91.91 0 0 1 .65-.4c.26-.03.51.04.75.2l1.6 1.2c.23.17.36.39.4.65.03.27-.04.52-.2.75a.91.91 0 0 1-.65.4.98.98 0 0 1-.75-.2l-1.6-1.2a.91.91 0 0 1-.4-.65 1 1 0 0 1 .2-.75Zm3-10.6-1.6 1.2a1 1 0 0 1-.75.2.91.91 0 0 1-.65-.4 1.03 1.03 0 0 1-.2-.75.91.91 0 0 1 .4-.65l1.6-1.2c.23-.16.48-.23.75-.2.26.04.48.17.65.4.16.24.23.49.2.75a.91.91 0 0 1-.4.65Zm-14.6 8.8h-1a2 2 0 0 1-2-2v-2c0-.55.2-1.02.58-1.4.4-.4.87-.6 1.42-.6h4l3.47-2.1c.33-.2.67-.2 1.01 0 .35.2.52.5.52.88v8.45c0 .38-.17.67-.52.87a.9.9 0 0 1-1 0l-3.48-2.1h-1v3c0 .29-.1.53-.3.72a.93.93 0 0 1-.7.28.97.97 0 0 1-.72-.28.97.97 0 0 1-.28-.72v-3Zm9 .35v-6.7a4.57 4.57 0 0 1 1.5 3.35 4.57 4.57 0 0 1-1.5 3.35Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
