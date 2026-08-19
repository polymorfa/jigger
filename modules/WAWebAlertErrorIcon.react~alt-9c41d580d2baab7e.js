__d("WAWebAlertErrorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-error";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 10, 10, "0 0 10 10");
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
					fill: "#EA0038",
					fillRule: "evenodd",
					d: "M5 0a5 5 0 1 0 0 10A5 5 0 0 0 5 0Zm0 5.5a.5.5 0 0 1-.5-.5V3c0-.27.22-.5.5-.5s.5.23.5.5v2a.5.5 0 0 1-.5.5Zm-.5 1v1h1v-1h-1Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertErrorIcon = d;
}), 98);
