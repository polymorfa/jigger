__d("WAWebRefreshLargeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "refresh-large";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 48, 48, "0 0 48 48");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M35.3 12.7A15.98 15.98 0 0 0 8.02 24a15.98 15.98 0 0 0 31.44 4H35.3A11.98 11.98 0 0 1 12 24c0-6.62 5.38-12 12-12 3.32 0 6.28 1.38 8.44 3.56L26 22h14V8l-4.7 4.7Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RefreshLargeIcon = d;
}), 98);
