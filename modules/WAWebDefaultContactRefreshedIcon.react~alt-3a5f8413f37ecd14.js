__d("WAWebDefaultContactRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-contact-refreshed";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 212, 212, "0 0 48 48");
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
					fill: "#606263",
					d: "M24 23q-1.86 0-3.18-1.32T19.5 18.5t1.32-3.18T24 14t3.18 1.32q1.32 1.32 1.32 3.18t-1.32 3.18T24 23m-6.75 10q-.93 0-1.59-.66T15 30.75v-.9q0-.96.5-1.76a3.3 3.3 0 0 1 1.3-1.22 16.7 16.7 0 0 1 3.54-1.3q1.8-.44 3.66-.44t3.66.43 3.54 1.31q.82.42 1.3 1.22t.5 1.76v.9q0 .93-.66 1.59t-1.59.66z",
					className: s(n == null ? void 0 : n.primary)
				})]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultContactRefreshedIcon = m;
}), 98);
