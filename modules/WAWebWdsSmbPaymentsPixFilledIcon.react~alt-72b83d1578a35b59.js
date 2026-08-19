__d("WAWebWdsSmbPaymentsPixFilledIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-smb-payments-pix-filled";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null);
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
					u.jsxs("g", {
						fill: "currentColor",
						clipPath: "url(#WAWebWdsSmbPaymentsPixFilledIcon__a)",
						children: [u.jsx("path", { d: "M2.1 9.17a4 4 0 0 0 0 5.66l1.28 1.28h4.3a.6.6 0 0 0 .41-.17l2.33-2.32a2.12 2.12 0 0 1 2.99 0l2.33 2.33a.6.6 0 0 0 .42.17h4.45l1.29-1.3a4 4 0 0 0 0-5.65L20.62 7.9h-4.29a.6.6 0 0 0-.42.17l-2.32 2.32a2.12 2.12 0 0 1-2.99 0L8.27 8.05a.6.6 0 0 0-.42-.17H3.39L2.1 9.18Z" }), u.jsx("path", { d: "M18.6 18.12h-2.45a2.6 2.6 0 0 1-1.83-.76L12 15.03a.12.12 0 0 0-.16 0L9.5 17.36a2.6 2.6 0 0 1-1.83.75h-2.3l3.8 3.79a4 4 0 0 0 5.65 0l3.78-3.78ZM14.83 2.1l3.79 3.79h-2.3a2.6 2.6 0 0 0-1.82.76l-2.32 2.32a.12.12 0 0 1-.17 0L9.68 6.64a2.6 2.6 0 0 0-1.83-.76H5.4L9.17 2.1a4 4 0 0 1 5.66 0Z" })]
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebWdsSmbPaymentsPixFilledIcon__a",
						children: u.jsx("path", { d: "M0 0h24v24H0z" })
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsSmbPaymentsPixFilledIcon = d;
}), 98);
