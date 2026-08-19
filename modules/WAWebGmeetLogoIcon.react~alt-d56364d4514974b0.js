__d("WAWebGmeetLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gmeet-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 72, 87.5, "0 0 87.5 72");
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
					u.jsx("path", {
						fill: "#00832d",
						d: "m49.5 36 8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z"
					}),
					u.jsx("path", {
						fill: "#0066da",
						d: "M0 51.5V66a6 6 0 0 0 6 6h14.5l3-10.96-3-9.54-9.95-3z"
					}),
					u.jsx("path", {
						fill: "#e94235",
						d: "M20.5 0 0 20.5l10.55 3 9.95-3 2.95-9.41z"
					}),
					u.jsx("path", {
						fill: "#2684fc",
						d: "M20.5 20.5H0v31h20.5z"
					}),
					u.jsx("path", {
						fill: "#00ac47",
						d: "M82.6 8.68 69.5 19.42v33.66l13.16 10.79a3 3 0 0 0 4.85-2.37V11a3 3 0 0 0-4.91-2.32M49.5 36v15.5h-29V72h43a6 6 0 0 0 6-6V53.08z"
					}),
					u.jsx("path", {
						fill: "#ffba00",
						d: "M63.5 0h-43v20.5h29V36l20-16.57V6a6 6 0 0 0-6-6"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GmeetLogoIcon = d;
}), 98);
