__d("WAWebMastercardLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mastercard-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 13, 22, "0 0 22 13");
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
						d: "M7.93 1.63h6.14v9.73H7.93z",
						style: { fill: "color(display-p3 1 .3725 0)" }
					}),
					u.jsx("path", {
						d: "M8.56 6.5c0-.94.22-1.86.64-2.7A6.2 6.2 0 0 1 11 1.63 6.5 6.5 0 0 0 7.74.35a6.55 6.55 0 0 0-3.47.58 6.3 6.3 0 0 0-2.61 2.29A6.06 6.06 0 0 0 .68 6.5c0 1.16.34 2.3.97 3.28a6.3 6.3 0 0 0 2.62 2.29 6.55 6.55 0 0 0 3.47.58A6.5 6.5 0 0 0 11 11.37 6.2 6.2 0 0 1 9.2 9.2a6 6 0 0 1-.64-2.71",
						style: { fill: "color(display-p3 .9216 0 .1059)" }
					}),
					u.jsx("path", {
						d: "M20.7 10.34v-.2h.1v-.04h-.21v.04h.08v.2zm.42 0v-.24h-.07l-.07.17-.08-.17h-.06v.24h.05v-.19l.07.16H21l.07-.16v.19zm.2-3.84a6 6 0 0 1-.98 3.28 6.3 6.3 0 0 1-2.61 2.29 6.55 6.55 0 0 1-3.47.58A6.5 6.5 0 0 1 11 11.36a6.2 6.2 0 0 0 1.8-2.15 6.04 6.04 0 0 0 .64-2.71 6.04 6.04 0 0 0-.65-2.7A6.2 6.2 0 0 0 11 1.62 6.5 6.5 0 0 1 14.26.35a6.55 6.55 0 0 1 3.47.58 6.3 6.3 0 0 1 2.62 2.28c.63.99.97 2.13.97 3.29z",
						style: { fill: "color(display-p3 .9686 .6196 .1059)" }
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MastercardLogoIcon = d;
}), 98);
