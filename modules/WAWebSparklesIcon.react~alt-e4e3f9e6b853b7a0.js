__d("WAWebSparklesIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "sparkles";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 25, 24, "0 0 24 25");
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
					d: "M6.97 14.14c-.06-.27-.23-.39-.47-.39-.24 0-.43.14-.47.39-.56 3.04-.54 3.02-3.6 3.63-.29.06-.43.25-.43.47 0 .24.14.43.43.49 3.06.6 2.96.63 3.6 3.61.04.25.23.41.47.41.26 0 .4-.14.47-.4.64-3 .54-3.01 3.6-3.62.27-.06.43-.23.43-.49 0-.24-.16-.4-.43-.47-3.05-.57-3.06-.59-3.6-3.62v-.01ZM15.14 3.4c-.02-.4-.29-.65-.66-.65-.33 0-.6.24-.62.6-.7 5.23-.86 5.2-6.28 6.27a.63.63 0 0 0-.58.64c0 .36.24.6.58.64 5.42.78 5.6.93 6.28 6.23.02.38.29.62.62.62.37 0 .64-.24.66-.64.64-5.2.93-5.19 6.28-6.2.34-.07.58-.3.58-.65 0-.38-.24-.6-.66-.64-5.31-.89-5.56-1.02-6.2-6.23Z",
					style: { fillOpacity: 1 }
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SparklesIcon = d;
}), 98);
