__d("WDSIconIcAlertWarning.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-alert-warning";
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
				d: "M2.73 21a1 1 0 0 1-.85-.5 1 1 0 0 1-.14-.49 1 1 0 0 1 .14-.51l9.24-16q.15-.26.4-.37Q11.74 3 12 3a1 1 0 0 1 .88.5l9.24 16q.15.25.14.51 0 .27-.14.49a1 1 0 0 1-.85.5zm1.72-2h15.1L12 6zM12 18q.42 0 .71-.29.3-.29.29-.71 0-.42-.29-.71A1 1 0 0 0 12 16q-.42 0-.71.29-.3.29-.29.71 0 .42.29.71.29.3.71.29m0-3q.42 0 .71-.29.3-.29.29-.71v-3q0-.42-.29-.71A1 1 0 0 0 12 10q-.42 0-.71.29-.3.29-.29.71v3q0 .42.29.71.29.3.71.29"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
