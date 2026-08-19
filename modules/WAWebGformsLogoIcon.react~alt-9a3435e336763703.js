__d("WAWebGformsLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gforms-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 64, "0 0 64 88");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#56368a",
						d: "m42 22 12.06 2.28L64 22 42 0l-3.04 10.43Z"
					}),
					u.jsx("path", {
						fill: "#7248b9",
						d: "M42 22V0H6a6 6 0 0 0-6 6v76a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6V22Z"
					}),
					u.jsx("path", {
						fill: "#fff",
						d: "M17 63.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-12a3 3 0 1 1 0-6 3 3 0 0 1 0 6M50 63H25v-5h25zm0-12H25v-5h25zm0-12H25v-5h25z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GformsLogoIcon = d;
}), 98);
