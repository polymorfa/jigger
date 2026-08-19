__d("WAWebViewOnceSunsetIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "view-once-sunset";
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
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("circle", {
						cx: 24,
						cy: 24,
						r: 24,
						fill: "#8497A3"
					}),
					u.jsx("path", {
						fill: "white",
						fillRule: "evenodd",
						d: "M24 34.33h.25a1 1 0 1 0-.05-2H24v2Zm0-18.66h.2a1 1 0 0 0 .05-2H24v2Zm4.95-.74a1 1 0 0 0-.96 1.75l.35.2a1 1 0 1 0 1.04-1.7l-.43-.25Zm3.87 3.7a1 1 0 1 0-1.7 1.03l.2.35a1 1 0 0 0 1.75-.96l-.25-.43Zm1.51 5.12a1 1 0 0 0-2 .05 8.25 8.25 0 0 1 0 .4 1 1 0 0 0 2 .05 10.6 10.6 0 0 0 0-.5Zm-1.26 5.2a1 1 0 0 0-1.75-.96l-.2.35a1 1 0 1 0 1.7 1.04l.25-.43Zm-3.69 3.87a1 1 0 0 0-1.04-1.7l-.35.2a1 1 0 0 0 .96 1.75l.43-.25ZM24 13.67a10.33 10.33 0 0 0 0 20.66v-2a8.33 8.33 0 0 1 0-16.66v-2Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "white",
						fillRule: "evenodd",
						d: "M22.67 19.33a1 1 0 1 0 0 2h1v6.34a1 1 0 1 0 2 0v-7.44a1 1 0 0 0-1-.9h-2Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ViewOnceSunsetIcon = d;
}), 98);
