__d("WAWebInfoAltIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "info-alt";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 25, 25, "0 0 25 25");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "currentColor",
					fillRule: "evenodd",
					children: [u.jsx("rect", {
						width: 3.5,
						height: 10.75,
						x: 11,
						y: 10.25,
						rx: 1.75
					}), u.jsx("circle", {
						cx: 12.75,
						cy: 6.25,
						r: 1.75,
						fillRule: "nonzero"
					})]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.InfoAltIcon = d;
}), 98);
