__d("WAWebSearchTextIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "search-text";
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
					d: "M3 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 11 19H3Zm0-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 13c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 6 14H3Zm0-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 2 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 6 9H3Zm11 7a4.82 4.82 0 0 1-3.54-1.46A4.82 4.82 0 0 1 9 11c0-1.38.49-2.56 1.46-3.54A4.82 4.82 0 0 1 14 6c1.38 0 2.56.49 3.54 1.46a5 5 0 0 1 .61 6.29l3.15 3.15c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-3.15-3.15A5 5 0 0 1 14 16Zm0-2c.83 0 1.54-.3 2.13-.88.58-.58.87-1.29.87-2.12 0-.83-.3-1.54-.88-2.13A2.9 2.9 0 0 0 14 8c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 11 11c0 .83.3 1.54.88 2.13.58.58 1.29.87 2.12.87Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SearchTextIcon = d;
}), 98);
