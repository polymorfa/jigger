__d("WDSIconWdsIcWhatsappSmbLogo.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-whatsapp-smb-logo";
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
					d: "M1.93 11.86A10.17 10.17 0 0 1 14.5 2v2.06a8.19 8.19 0 0 0-10.58 7.8c0 1.78.53 3.61 1.49 4.7l-.79 2.89 2.96-.77a8.17 8.17 0 0 0 12.35-9.05H22A10.17 10.17 0 0 1 7.28 20.82l-5.5 1.44 1.47-5.38a10.23 10.23 0 0 1-1.32-5.02Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M14.84 13.18c.23.08 1.45.68 1.7.81s.42.19.48.29c.06.1.06.6-.15 1.18s-1.2 1.11-1.68 1.18c-.43.06-.97.09-1.57-.1a15.3 15.3 0 0 1-1.42-.52c-2.5-1.08-4.13-3.59-4.25-3.76-.13-.18-1.01-1.35-1.01-2.57 0-1.22.64-1.83.87-2.08.23-.25.5-.31.66-.31h.48c.15 0 .36-.06.56.43l.77 1.85c.06.12.1.27.02.44-.08.17-.12.27-.25.41l-.37.44c-.12.12-.25.26-.11.51.15.25.64 1.06 1.38 1.72.95.85 1.75 1.11 2 1.23.25.12.39.1.54-.06.15-.17.62-.73.79-.98.17-.25.33-.21.56-.12v.01ZM19.5 2h-2v2.5H15v2h2.5V9h2V6.5H22v-2h-2.5V2Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
