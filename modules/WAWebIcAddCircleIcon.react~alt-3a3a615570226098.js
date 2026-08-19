__d("WAWebIcAddCircleIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-add-circle";
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
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M11 13v3c0 .28.1.52.29.71.19.2.43.29.71.29.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-3h3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 16 11h-3V8c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 7c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 8v3H8c-.28 0-.52.1-.71.29A.94.94 0 0 0 7 12c0 .28.1.52.29.71.19.2.43.29.71.29h3Zm1 9a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcAddCircleIcon = d;
}), 98);
