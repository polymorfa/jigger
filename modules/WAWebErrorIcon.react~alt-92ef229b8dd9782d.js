__d("WAWebErrorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "error";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 22, "0 0 22 22");
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
				enableBackground: "new 0 0 22 22",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M12 16.52h-2v-2.03h2v2.03zm0-4.47h-2V5.48h2v6.57z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ErrorIcon = d;
}), 98);
