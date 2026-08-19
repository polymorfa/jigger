__d("WDSIconIcHidden.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-hidden";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M439-132q-11-11-12.5-26.5T439-188l333-333q14-14 29.5-12.5T828-521q13 13 12 29t-13 28L495-132q-12 12-28 12t-28-12m289 12q-14 0-19-12t5-22l92-92q10-10 22-5t12 19v72q0 17-11.5 28.5T800-120zm-597-11q-11-11-12-27t13-30l641-641q15-15 31-13t27 13 12 27-14 30L187-131q-14 14-29.5 12.5T131-131m0-308q-11-11-12-27t13-30l332-332q14-14 29.5-12.5T520-828t12.5 26.5T520-772L187-439q-14 14-29.5 12.5T131-439m-11-289v-72q0-17 11.5-28.5T160-840h72q14 0 19 12t-5 22l-92 92q-10 10-22 5t-12-19" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
