__d("WAWebReactIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "react";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 15, 15, "0 0 15 15");
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
					fillRule: "evenodd",
					d: "M0 7.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Zm11 1.2.32-.05c.29-.02.49.27.36.49a4.91 4.91 0 0 1-4.18 2.65 4.89 4.89 0 0 1-4.17-2.63c-.14-.24.05-.53.34-.5.12 0 .27.03.42.04.85.1 2.13.26 3.4.26 1.33 0 2.65-.16 3.5-.27ZM5.4 7.36c.65 0 1.2-.64 1.2-1.34 0-.73-.55-1.34-1.2-1.34-.64 0-1.2.64-1.2 1.34 0 .73.56 1.34 1.2 1.34Zm5.37-1.31c0 .68-.54 1.31-1.17 1.31-.63 0-1.17-.6-1.17-1.31 0-.69.54-1.32 1.17-1.32.63 0 1.17.6 1.17 1.32Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ReactIcon = d;
}), 98);
