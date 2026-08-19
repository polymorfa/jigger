__d("WAWebDefaultGroupRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "default-group-refreshed";
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
					fillRule: "evenodd",
					d: "M17.82 21.68Q19.14 23 21 23t3.18-1.32 1.32-3.18-1.32-3.18Q22.86 14 21 14t-3.18 1.32-1.32 3.18 1.32 3.18m-5.16 10.66q.66.66 1.59.66h13.5q.93 0 1.59-.66t.66-1.59v-.9q0-.95-.5-1.76a3.3 3.3 0 0 0-1.3-1.22 16.7 16.7 0 0 0-3.54-1.3q-1.8-.44-3.66-.44t-3.66.43-3.54 1.3a3.3 3.3 0 0 0-1.3 1.23 3.3 3.3 0 0 0-.5 1.76v.9q0 .93.66 1.59m21.09.66h-2.4a4.16 4.16 0 0 0 .65-2.25v-.9c0-1-.26-1.95-.79-2.8a5.3 5.3 0 0 0-1.67-1.72q.56.1 1.12.23 1.8.44 3.54 1.3.81.43 1.3 1.23.5.8.5 1.76v.9q0 .93-.66 1.59t-1.6.66M27 23a4.6 4.6 0 0 1-1.18-.15c1.1-1.2 1.68-2.69 1.68-4.35s-.57-3.14-1.68-4.35A4.6 4.6 0 0 1 27 14q1.86 0 3.18 1.32t1.32 3.18-1.32 3.18T27 23",
					className: s(n == null ? void 0 : n.primary),
					clipRule: "evenodd"
				})]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.DefaultGroupRefreshedIcon = m;
}), 98);
