__d("WAWebIcCheckCircleFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "ic-check-circle-filled";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 12, 12, null);
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "none",
				children: [c.jsx("title", { children: i.iconName }), c.jsx("path", {
					fill: "#0A1014",
					d: "M5.3 6.9 4.22 5.82a.47.47 0 0 0-.34-.13.47.47 0 0 0-.35.13c-.1.1-.14.21-.14.35 0 .15.04.26.13.36l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.83c.1-.09.14-.2.14-.34a.47.47 0 0 0-.13-.36.47.47 0 0 0-.36-.13.47.47 0 0 0-.34.13zM6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 6 11",
					className: s(n == null ? void 0 : n.background)
				})]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.IcCheckCircleFilledIcon = m;
}), 98);
