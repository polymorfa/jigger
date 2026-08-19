__d("WDSIconIcPersonShield.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-person-shield";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 -960 960 960");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", { d: "M458-240Zm-218 80q-33 0-56.5-23.5T160-240v-32q0-34 17.5-62.5T224-378q31-16 62.5-27t63.5-19q23-5 45-9t45-6q17-2 28.5 10t11.5 29q0 17-11.5 28.5T440-358q-18 2-35.5 4t-35.5 7q-28 7-55 17t-54 24q-9 5-14.5 14t-5.5 20v32h218q17 0 28.5 11.5T498-200q0 17-11.5 28.5T458-160H240Zm320-215q0-11 5.5-21t16.5-15l120-60q8-5 18-5t18 5l120 60q11 5 16.5 15t5.5 21v77q0 69-36 125t-98 85q-6 3-12.5 4T720-83q-7 0-13.5-1T694-88q-62-29-98-85t-36-125v-77Zm160 211q38-18 59-55t21-79v-52l-80-40-80 40v52q0 42 21 79t59 55ZM367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm169.5-56.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm240 363Z" })]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
