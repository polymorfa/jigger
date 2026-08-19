__d("WDSIconWdsIcLogoMetaAiColor.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-logo-meta-ai-color";
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
				u.jsx("g", {
					clipPath: "url(#WDSIconWdsIcLogoMetaAiColor__a)",
					children: u.jsx("path", {
						fill: "url(#WDSIconWdsIcLogoMetaAiColor__b)",
						d: "M8.07 15.54c1.74 0 2.88 2.43 2.88 4.26 0 1.56-.81 3.27-2.25 3.27-1.68 0-2.88-2.34-2.88-4.29 0-1.59.81-3.24 2.25-3.24m6.21.96c2.16 0 4.71 1.89 4.71 3.81 0 1.26-1.11 1.95-2.4 1.95-2.13 0-4.65-1.86-4.65-3.84 0-1.29 1.08-1.92 2.34-1.92m-9.03-6.03c1.23 0 1.95.81 1.95 2.01 0 2.16-2.28 4.53-4.35 4.53-1.2 0-1.98-.81-1.98-2.04 0-2.1 2.28-4.5 4.38-4.5m15.75.66c1.53 0 2.55.81 2.55 2.04 0 1.98-2.7 3.48-4.74 3.48-1.56 0-2.55-.9-2.55-2.07 0-1.92 2.64-3.45 4.74-3.45m-2.04-7.86c1.38 0 2.1 1.44 2.1 2.88 0 1.92-1.29 4.53-3.18 4.53-1.38 0-2.13-1.38-2.13-2.85 0-1.98 1.35-4.56 3.21-4.56M5.46 4.35c1.98 0 4.02 1.08 4.02 2.67 0 1.5-1.8 2.37-3.57 2.37-1.98 0-4.02-1.08-4.02-2.64 0-1.44 1.71-2.4 3.57-2.4m5.55-3.9c2.07 0 4.05 2.58 4.05 4.71 0 1.23-.66 2.13-1.89 2.13-2.07 0-4.08-2.58-4.08-4.68 0-1.2.66-2.16 1.92-2.16"
					})
				}),
				u.jsxs("defs", { children: [u.jsxs("linearGradient", {
					id: "WDSIconWdsIcLogoMetaAiColor__b",
					x1: 14.12,
					x2: 20.68,
					y1: -1.69,
					y2: 20.78,
					gradientUnits: "userSpaceOnUse",
					children: [u.jsx("stop", { stopColor: "#f356ff" }), u.jsx("stop", {
						offset: 1,
						stopColor: "#4641ff"
					})]
				}), u.jsx("clipPath", {
					id: "WDSIconWdsIcLogoMetaAiColor__a",
					children: u.jsx("path", {
						fill: "#fff",
						d: "M0 0h24v24H0z"
					})
				})] })
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
