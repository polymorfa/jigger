__d("WAWebStorefrontRefreshedThinIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "storefront-refreshed-thin";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 18, "0 0 18 20");
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
					d: "M2.75 3h12.5a.74.74 0 0 1 .75.75c0 .2-.07.39-.22.53a.72.72 0 0 1-.53.22H2.75A.74.74 0 0 1 2 3.75c0-.2.07-.39.22-.53A.72.72 0 0 1 2.75 3Zm0 14.5a.73.73 0 0 1-.53-.22.73.73 0 0 1-.22-.53V12h-.42a.74.74 0 0 1-.59-.3.67.67 0 0 1-.14-.64l1-5a.75.75 0 0 1 .73-.56h12.84a.73.73 0 0 1 .73.56l1 5c.07.24.02.45-.14.65s-.36.29-.6.29H16v4.74a.74.74 0 0 1-.75.76.73.73 0 0 1-.53-.22.72.72 0 0 1-.22-.53V12H11v4.74a.7.7 0 0 1-.22.54.72.72 0 0 1-.53.22h-7.5ZM3.5 16h6v-4h-6v4Zm-.96-5.5h12.92L14.83 7H3.17l-.63 3.5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.StorefrontRefreshedThinIcon = d;
}), 98);
