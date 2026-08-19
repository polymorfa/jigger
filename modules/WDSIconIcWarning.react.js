__d("WDSIconIcWarning.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-warning";
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
				d: "M2.73 21a.97.97 0 0 1-.85-.5 1.1 1.1 0 0 1-.14-.49.9.9 0 0 1 .14-.51l9.25-16c.1-.17.22-.3.38-.38a1.03 1.03 0 0 1 1.36.38l9.25 16c.1.17.15.34.14.51 0 .18-.05.34-.14.49a.97.97 0 0 1-.85.5H2.73Zm1.72-2h15.1L12 6 4.45 19ZM12 18c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 16c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-3c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 10c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 11v3c0 .28.1.52.29.71.19.2.43.29.71.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
