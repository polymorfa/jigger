__d("WAWebPsaVerifiedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "psa-verified";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 18, 18, "0 0 18 18");
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
				enableBackground: "new 0 0 18 18",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#00DA60",
						d: "m9 16-1.9.9-1.3-1.7-2.1-.1-.3-2.1-1.9-1 .7-2.1-1.1-1.7 1.5-1.5-.2-2.1L4.5 4l.8-2 2.1.4L9 1.1l1.7 1.3 2-.4.9 2 2 .6-.1 2.1L17 8.2l-1.1 1.7.6 2.1-1.8 1-.4 2.1-2.1.1-1.3 1.7z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						d: "m13.1 7.3-.9-.8-4.1 4.1-2.2-2.1-.9.9 3 3z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PsaVerifiedIcon = d;
}), 98);
