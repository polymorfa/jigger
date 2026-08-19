__d("WDSIconIcCode.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-code";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l184-184q12-12 28.5-12t28.5 12q12 12 12 28.5T349-635L193-479Zm574-2L612-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-12 12-28 11.5T612-269q-12-12-12-28.5t12-28.5l155-155Z" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
