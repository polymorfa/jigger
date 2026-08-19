__d("WAWebBusinessDataSharingIllustrationDarkIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "business-data-sharing-illustration-dark";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 56, 56, "0 0 56 56");
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
						clipPath: "url(#WAWebBusinessDataSharingIllustrationDarkIcon__a)",
						children: [u.jsx("path", {
							fill: "#092D2F",
							d: "M28 56a28 28 0 1 0 0-56 28 28 0 0 0 0 56Z"
						}), u.jsx("path", {
							fill: "#00A884",
							d: "M22.15 39.53c.52-.52.52-1.37 0-1.9l-2.83-2.83h20.53a1.34 1.34 0 0 0 0-2.68H19.36l2.79-2.79c.53-.53.53-1.38 0-1.91a1.35 1.35 0 0 0-1.91 0l-4.98 4.99a1.5 1.5 0 0 0 0 2.12l5 4.99c.52.52 1.37.52 1.89 0v.01Zm11.7-23.83a1.35 1.35 0 0 0 0 1.9l2.83 2.83H16.15a1.34 1.34 0 0 0 0 2.68h20.49l-2.79 2.79a1.35 1.35 0 0 0 0 1.91c.53.53 1.39.53 1.91 0l4.98-4.99a1.5 1.5 0 0 0 0-2.12l-5-4.99a1.34 1.34 0 0 0-1.89 0v-.01Z"
						})]
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebBusinessDataSharingIllustrationDarkIcon__a",
						children: u.jsx("path", {
							fill: "white",
							d: "M0 0h56v56H0z"
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.BusinessDataSharingIllustrationDarkIcon = d;
}), 98);
