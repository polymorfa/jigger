__d("WAWebStatusDblcheckIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "status-dblcheck";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 18, "0 0 18 18");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 18 18",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "m17.4 5.04-.58-.45a.43.43 0 0 0-.6.08l-6.4 8.2c-.14.18-.4.2-.57.03l-.43-.38a.38.38 0 0 0-.58.03l-.45.58a.5.5 0 0 0 .04.65l1.58 1.5c.17.17.43.15.58-.03l7.48-9.6a.44.44 0 0 0-.08-.62zm-4.9 0-.57-.45a.43.43 0 0 0-.6.08l-6.4 8.2c-.14.18-.4.2-.57.03l-2.62-2.55a.44.44 0 0 0-.61 0l-.5.52a.44.44 0 0 0 0 .61l3.89 3.8c.17.17.43.15.57-.03l7.49-9.6a.44.44 0 0 0-.08-.62z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StatusDblcheckIcon = d;
}), 98);
