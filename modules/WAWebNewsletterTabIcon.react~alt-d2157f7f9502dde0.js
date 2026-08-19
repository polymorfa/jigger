__d("WAWebNewsletterTabIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "newsletter-tab";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M21.92 10.65a9.99 9.99 0 0 0-8.93-8.6 10 10 0 0 0-9.75 14.67l-1.2 3.95A1 1 0 0 0 3.3 21.9l3.88-1.16a10.01 10.01 0 0 0 14.74-10.1h.01ZM8.06 14.68c.27.4.24.95-.1 1.29a1 1 0 0 1-1.56-.17 6.8 6.8 0 0 1 .09-7.74c.35-.5 1.08-.52 1.51-.1a1 1 0 0 1 .1 1.3 4.75 4.75 0 0 0-.02 5.41l-.02.01Zm4-1.18a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 1 1 3.01 0c0 .83-.67 1.5-1.5 1.5Zm5.47 2.45a.99.99 0 0 1-1.5.09 1 1 0 0 1-.1-1.3 4.79 4.79 0 0 0-.03-5.5c-.29-.41-.27-.96.08-1.32a1 1 0 0 1 1.5.09 6.74 6.74 0 0 1 .05 7.95v-.01Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewsletterTabIcon = d;
}), 98);
