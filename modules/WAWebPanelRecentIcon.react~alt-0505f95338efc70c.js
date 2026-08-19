__d("WAWebPanelRecentIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "panel-recent";
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
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M20.54 11.97a8.56 8.56 0 1 0-17.13 0 8.56 8.56 0 0 0 17.13 0Zm1.41 0a9.97 9.97 0 1 1-19.95 0 9.97 9.97 0 0 1 19.95 0Zm-9.83-5.26v5.69l4.38 2.62a.7.7 0 1 1-.72 1.22L10.7 13.2V6.7a.7.7 0 1 1 1.4 0Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PanelRecentIcon = d;
}), 98);
