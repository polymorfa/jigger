__d("WDSIconIcKeepOffFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-keep-off-filled";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M572-501 290-783q-5-5-7.5-11t-2.5-12q0-13 9-23.5t24-10.5h327q17 0 28.5 11.5T680-800q0 16-14.5 22.5T640-760v230q0 27-24.5 37.5T572-501M440-80v-240H296q-25 0-40-17.5T241-377q0-11 4.5-22t14.5-21l60-60v-46L84-764q-11-11-11.5-27.5T84-820q11-11 28-11t28 11l679 679q12 12 11.5 28.5T818-84q-12 11-28 11.5T762-84L526-320h-6v240q0 17-11.5 28.5T480-40t-28.5-11.5T440-80" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
