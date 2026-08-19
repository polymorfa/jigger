__d("WAWebNewsletterSystemMessageIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "newsletter-system-message";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 14, 14, "0 0 14 14");
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
						fill: "currentColor",
						d: "M5.11 4.98a.6.6 0 0 0-.91.03 3.46 3.46 0 0 0-.09 3.92.6.6 0 0 0 .95.09c.2-.21.21-.52.05-.77a2.21 2.21 0 0 1 .04-2.49c.17-.24.17-.57-.04-.78Zm3.8-.02a.63.63 0 0 0-.04.79 2.24 2.24 0 0 1 .04 2.51.62.62 0 0 0 .05.77.6.6 0 0 0 .95-.09A3.46 3.46 0 0 0 9.82 5a.6.6 0 0 0-.91-.04ZM7.01 7.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						d: "M11.78 3.39a.6.6 0 0 0-.97.7 4.81 4.81 0 0 1-.11 6 .6.6 0 0 0 .03.79.6.6 0 0 0 .9-.03 6 6 0 0 0 .16-7.45l-.01-.01ZM3.3 3.12a.61.61 0 0 0-.91.04 6 6 0 0 0 0 7.69c.23.28.66.3.91.03a.6.6 0 0 0 .04-.79 4.8 4.8 0 0 1 0-6.18.6.6 0 0 0-.03-.8l-.01.01Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewsletterSystemMessageIcon = d;
}), 98);
