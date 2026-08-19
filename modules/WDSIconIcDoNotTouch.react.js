__d("WDSIconIcDoNotTouch.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-do-not-touch";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M760-331v-429q0-17 11.5-28.5T800-800t28.5 11.5T840-760v430q0 20-12.5 30T800-290t-27.5-10.5T760-331M280-790v-30q0-17 11.5-28.5T320-860t28.5 11.5T360-820v30q0 17-11.5 28.5T320-750t-28.5-11.5T280-790m160 150v-240q0-17 11.5-28.5T480-920t28.5 11.5T520-880v241q0 17-11.5 28T480-600t-28.5-11.5T440-640m160 149v-349q0-17 11.5-28.5T640-880t28.5 11.5T680-840v349q0 17-11.5 28.5T640-451t-28.5-11.5T600-491m117 361L360-487v147q0 24-21.5 35.5T297-307l-85-60 157 229q5 8 14 13t19 5h278q10 0 19.5-2.5T717-130M402-40q-30 0-56-13.5T303-92L67-438q-8-12-7-26t12-24q19-19 45-22t47 12l116 81v-150L55-792q-12-12-12-28.5T55-849t28.5-12 28.5 12l736 736q12 12 12 28t-12 28-28.5 12T791-57l-16-15q-20 15-44 23.5T680-40zm198-433" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
