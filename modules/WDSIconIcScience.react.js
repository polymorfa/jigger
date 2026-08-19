__d("WDSIconIcScience.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-science";
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
				d: "M5 21c-.85 0-1.45-.38-1.81-1.14a1.85 1.85 0 0 1 .26-2.11L9 11V5H8a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 5h-1v6l5.55 6.75c.53.65.62 1.35.26 2.11A1.86 1.86 0 0 1 19 21H5Zm0-2h14l-6-7.3V5h-2v6.7L5 19Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
