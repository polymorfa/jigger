__d("WDSIconWdsIcCurrencyIndonesianrupiahCircle.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-currency-indonesianrupiah-circle";
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
					d: "M13.47 10.06c.41 0 .7.25.7.74v.28h.04c.28-.62.86-1 1.62-1 1.32 0 2.14 1.01 2.14 2.7 0 1.69-.81 2.7-2.12 2.7-.76 0-1.35-.37-1.63-.96h-.02v2c0 .5-.3.74-.72.74-.41 0-.71-.25-.71-.74V10.8c0-.48.3-.73.7-.73zm1.88 1.17c-.7 0-1.16.62-1.16 1.55 0 .95.46 1.56 1.16 1.56.71 0 1.16-.6 1.16-1.56 0-.94-.45-1.55-1.16-1.55zM9.37 8.35c1.62 0 2.55.86 2.55 2.25 0 .88-.43 1.63-1.21 1.96l1.02 1.76a.9.9 0 0 1 .15.5c0 .4-.31.68-.74.68-.35 0-.51-.12-.75-.55L9.2 12.82H7.96v1.92c0 .48-.27.76-.74.76-.45 0-.73-.28-.73-.76V9.12c0-.48.27-.77.73-.77h2.15zm-1.4 3.4h1.26c.74 0 1.18-.42 1.18-1.12 0-.68-.46-1.12-1.2-1.12H7.97v2.24z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
