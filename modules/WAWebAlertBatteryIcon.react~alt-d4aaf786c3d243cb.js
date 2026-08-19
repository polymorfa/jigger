__d("WAWebAlertBatteryIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-battery";
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
					d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2zm5.72 31.46H18.2v-18h2.85v-1.99h5.87v1.99h2.95v18zm-6.83-4.27h1.98V27.2h-1.98v1.99zm0-3.97h1.98v-5.94h-1.98v5.94z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertBatteryIcon = d;
}), 98);
