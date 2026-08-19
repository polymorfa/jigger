__d("WDSIconWdsIcCurrencyLiraCircle.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-currency-lira-circle";
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
				d: "M10.29 4.2a.8.8 0 0 1 .61.25c.17.16.25.37.25.62V8.1l2.15-1.34a.8.8 0 0 1 .87-.04c.3.17.45.43.45.77 0 .16-.04.3-.1.44a.77.77 0 0 1-.31.3l-3.06 1.93v2.03l2.15-1.34a.8.8 0 0 1 .87-.03c.3.16.45.42.45.77a1 1 0 0 1-.1.43.77.77 0 0 1-.31.3l-3.06 1.93v3.82a4.29 4.29 0 0 0 4.27-3.64.7.7 0 0 1 .32-.51 1 1 0 0 1 .61-.19c.25 0 .45.08.62.24.17.16.23.35.2.56a5.94 5.94 0 0 1-1.99 3.76 5.85 5.85 0 0 1-4.03 1.5h-.86a.84.84 0 0 1-.62-.24.84.84 0 0 1-.25-.62v-3.6l-1.28.8a.78.78 0 0 1-.88.03.85.85 0 0 1-.44-.78 1 1 0 0 1 .1-.43.77.77 0 0 1 .31-.3l2.19-1.37v-2.04l-1.28.8a.84.84 0 0 1-.88.02.8.8 0 0 1-.44-.75.88.88 0 0 1 .39-.74l2.2-1.39V5.07c0-.25.1-.46.26-.62a.84.84 0 0 1 .62-.25Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
