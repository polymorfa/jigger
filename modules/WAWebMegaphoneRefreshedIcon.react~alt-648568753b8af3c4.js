__d("WAWebMegaphoneRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "megaphone-refreshed";
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
					d: "M21 13h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 13Zm-4.4 3.8a.91.91 0 0 1 .65-.4c.27-.03.52.03.75.2l1.6 1.2c.23.17.37.38.4.65.03.27-.03.52-.2.75a.91.91 0 0 1-.65.4c-.27.03-.52-.03-.75-.2l-1.6-1.2a.91.91 0 0 1-.4-.65c-.03-.27.03-.52.2-.75Zm3-10.6L18 7.4c-.23.17-.48.23-.75.2a.91.91 0 0 1-.65-.4 1.03 1.03 0 0 1-.2-.75.91.91 0 0 1 .4-.65l1.6-1.2c.23-.17.48-.23.75-.2s.48.17.65.4c.17.23.23.48.2.75a.91.91 0 0 1-.4.65ZM5 15H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-2c0-.55.2-1.02.59-1.41C2.98 9.19 3.45 9 4 9h4l3.47-2.1c.34-.2.68-.2 1.02 0 .34.2.51.5.51.88v8.45c0 .38-.17.67-.51.87-.34.2-.68.2-1.02 0L8 15H7v3c0 .28-.1.52-.29.71A.94.94 0 0 1 6 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 18v-3Zm6-.55v-4.9L8.55 11H4v2h4.55L11 14.45Zm3 .9v-6.7A4.57 4.57 0 0 1 15.5 12a4.57 4.57 0 0 1-1.5 3.35Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MegaphoneRefreshedIcon = d;
}), 98);
