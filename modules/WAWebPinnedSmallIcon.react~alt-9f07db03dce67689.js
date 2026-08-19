__d("WAWebPinnedSmallIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "pinned-small";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 12, 12, "0 0 12 12");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m7.8 5.55.9.9v.9H6.45v2.7L6 10.5l-.45-.45v-2.7H3.3v-.9l.9-.9V2.4h-.45v-.9h4.5v.9H7.8v3.15Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PinnedSmallIcon = d;
}), 98);
