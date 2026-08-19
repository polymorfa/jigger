__d("WAWebAlertUpdatePrimaryIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-update-primary";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 49, 49, "0 0 49 49");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("circle", {
						cx: 24.5,
						cy: 24.5,
						r: 24.5,
						fill: "#02A698"
					}),
					u.jsx("path", {
						fill: "white",
						d: "M16 13.55v22.9A2.5 2.5 0 0 0 18.43 39h12.14A2.5 2.5 0 0 0 33 36.45v-22.9A2.5 2.5 0 0 0 30.57 11H18.43A2.5 2.5 0 0 0 16 13.55Zm14.57 19.09H18.43V17.36h12.14v15.28ZM29.36 25H25.7v-5.1h-2.4V25h-3.65l4.86 5.1 4.86-5.1Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertUpdatePrimaryIcon = d;
}), 98);
