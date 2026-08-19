__d("WAWebWarningIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "warning";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 20, "0 0 20 18");
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
					d: "M17.53 17.5a2 2 0 0 0 1.73-3l-7.53-13a2 2 0 0 0-3.46 0l-7.53 13a2 2 0 0 0 1.73 3h15.06Zm-7.53-7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm-1 2v2h2v-2H9Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WarningIcon = d;
}), 98);
