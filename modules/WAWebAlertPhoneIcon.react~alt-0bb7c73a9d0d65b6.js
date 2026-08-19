__d("WAWebAlertPhoneIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-phone";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2z"
					}),
					u.jsx("path", {
						fill: "#FFBC00",
						d: "M19.35 30.78h2.44v-6.16h-2.45c0 2.05-.01 4.1.01 6.16zm-3.47-8.68 1.92-1.93 1.93 1.93.97-.96-1.93-1.93 1.93-1.93-.97-.96-1.93 1.93-1.92-1.93-.97.96 1.93 1.93-1.93 1.93.97.96zm-.25 5v3.67h2.47v-3.69c-.82 0-1.65-.03-2.47.02zm14.79-9.87v13.55l2.47-.01V17.25c-.82-.05-1.64-.01-2.47-.02zm-3.7 2.9v10.65h2.45c.03-3.69 0-7.38.02-11.07-.81-.05-1.63 0-2.44-.03l-.03.45zm-3.67 2.02c-.02.15-.02.31-.02.46v8.16h2.46V27.9c-.01-1.91.03-3.84-.01-5.75h-2.43z",
						className: "icon-shape"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AlertPhoneIcon = d;
}), 98);
