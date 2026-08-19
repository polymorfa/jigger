__d("WDSIconIcThumbsUpDown.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-thumbs-up-down";
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
				d: "M2 14c-.55 0-1.02-.2-1.41-.59C.19 13.02 0 12.55 0 12V6a1.6 1.6 0 0 1 .45-1.05L3.6 1.8a1.52 1.52 0 0 1 1.05-.45c.43 0 .8.17 1.13.5.31.33.43.76.34 1.27L5.8 5H11c.28 0 .52.1.71.29.2.19.29.43.29.71v1.25a1.6 1.6 0 0 1-.1.55l-2.25 5.3c-.12.28-.3.5-.56.66-.26.16-.54.24-.84.24H2Zm5.95-2L10 7.15V7H3.35l.6-2.7L2 6.2V12h5.95ZM13 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 12 18v-1.25a1.6 1.6 0 0 1 .1-.55l2.25-5.3a1.54 1.54 0 0 1 1.4-.9H22c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v6a1.41 1.41 0 0 1-.45 1.05L20.4 22.2a1.52 1.52 0 0 1-1.05.45c-.43 0-.8-.17-1.13-.5a1.42 1.42 0 0 1-.34-1.27L18.2 19H13Zm3.05-7L14 16.85V17h6.65l-.6 2.7L22 17.8V12h-5.95Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
