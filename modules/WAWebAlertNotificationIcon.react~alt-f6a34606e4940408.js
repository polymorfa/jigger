__d("WAWebAlertNotificationIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-notification";
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
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 48 48",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2zm-.74 15.43v-.62c0-.7.62-1.32 1.32-1.32s1.33.61 1.33 1.32v.62a5.68 5.68 0 0 1 4.4 5.56v3.17l-8.29-8.3c.36-.17.8-.34 1.24-.43zm1.32 15.7c-.97 0-1.76-.79-1.76-1.76h3.53c0 .97-.8 1.76-1.77 1.76zm7.24-.88L30.2 30.5H17.23v-.89L19 27.84v-4.85c0-1.06.26-2.03.8-2.92l-2.57-2.56 1.15-1.14L33.11 31.1l-1.14 1.15z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertNotificationIcon = d;
}), 98);
