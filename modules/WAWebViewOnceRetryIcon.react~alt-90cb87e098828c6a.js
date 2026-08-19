__d("WAWebViewOnceRetryIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "view-once-retry";
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
					d: "M8.39 10.65h1.36v4.29c0 .47.39.85.86.85h3.43c.47 0 .86-.38.86-.85v-4.29h1.36a.86.86 0 0 0 .6-1.46l-3.93-3.94a.85.85 0 0 0-1.2 0L7.78 9.2a.86.86 0 0 0 .6 1.46Zm-2.06 7.71c0 .48.39.86.86.86h10.29a.86.86 0 0 0 0-1.71H7.19a.86.86 0 0 0-.86.85Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ViewOnceRetryIcon = d;
}), 98);
