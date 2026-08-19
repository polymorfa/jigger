__d("WAWebGphotosLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gphotos-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 59, 59, "0 0 59 59");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [u.jsx("title", { children: n.iconName }), u.jsxs("g", {
					fill: "none",
					fillRule: "evenodd",
					children: [u.jsx("path", { d: "M-3-3h64v64H-3z" }), u.jsxs("g", {
						fillRule: "nonzero",
						children: [
							u.jsx("path", {
								fill: "#FBBC04",
								d: "M14.75 13.41c8.15 0 14.75 6.6 14.75 14.75v1.34H1.34C.6 29.5 0 28.9 0 28.16c0-8.15 6.6-14.75 14.75-14.75"
							}),
							u.jsx("path", {
								fill: "#EA4335",
								d: "M45.59 14.75c0 8.15-6.6 14.75-14.75 14.75H29.5V1.34C29.5.6 30.1 0 30.84 0c8.15 0 14.75 6.6 14.75 14.75"
							}),
							u.jsx("path", {
								fill: "#4285F4",
								d: "M44.25 45.59c-8.15 0-14.75-6.6-14.75-14.75V29.5h28.16c.74 0 1.34.6 1.34 1.34 0 8.15-6.6 14.75-14.75 14.75"
							}),
							u.jsx("path", {
								fill: "#34A853",
								d: "M13.41 44.25c0-8.15 6.6-14.75 14.75-14.75h1.34v28.16c0 .74-.6 1.34-1.34 1.34-8.15 0-14.75-6.6-14.75-14.75"
							})
						]
					})]
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GphotosLogoIcon = d;
}), 98);
