__d("WAWebAlertUpdateIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-update";
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
					d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2zm7.55 21.04h-6.74l3.08-3.08A5.6 5.6 0 0 0 24 18.22 5.8 5.8 0 0 0 18.22 24a5.74 5.74 0 0 0 11.17 1.93h2.02A7.74 7.74 0 0 1 24 31.7a7.72 7.72 0 0 1-7.7-7.7c0-4.24 3.46-7.7 7.7-7.7 2.12 0 4.04.86 5.4 2.3l2.3-2.3v6.74z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertUpdateIcon = d;
}), 98);
