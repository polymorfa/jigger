__d("WAWebPeopleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "people";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
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
					fillRule: "evenodd",
					d: "M10.99 8A3 3 0 1 1 5 8a3 3 0 0 1 6 0Zm8 0A3 3 0 1 1 13 8a3 3 0 0 1 6 0ZM8 13c-2.33 0-7 1.17-7 3.5V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.5c0-2.33-4.67-3.5-7-3.5Zm7.03.05c.35-.03.68-.05.97-.05 2.33 0 7 1.17 7 3.5V18a1 1 0 0 1-1 1h-5.18a3 3 0 0 0 .18-1v-1.5c0-1.47-.79-2.58-1.93-3.41v-.01a.1.1 0 0 0-.04-.03Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PeopleIcon = d;
}), 98);
