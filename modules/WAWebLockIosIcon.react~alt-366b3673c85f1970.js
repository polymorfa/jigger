__d("WAWebLockIosIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock-ios";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 28, 28, "0 0 28 28");
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
					d: "M8.79 24.52c-.8 0-1.4-.2-1.8-.62-.4-.4-.6-1.05-.6-1.93v-7.4c0-.87.2-1.5.6-1.92.4-.41 1-.62 1.8-.62h9.84c.8 0 1.4.2 1.8.62.4.41.6 1.05.6 1.92v7.4c0 .88-.2 1.52-.6 1.93-.4.42-1 .62-1.8.62H8.79Zm.06-1.6h9.73c.25 0 .43-.07.54-.2.12-.12.19-.33.19-.63v-7.63c0-.3-.07-.51-.19-.63-.11-.13-.3-.19-.54-.19H8.85c-.25 0-.43.06-.56.19-.12.12-.18.33-.18.63v7.63c0 .3.06.5.18.63.13.13.31.2.56.2Zm-.6-10.04V9.46c0-1 .14-1.89.44-2.64.31-.75.72-1.37 1.24-1.87a5 5 0 0 1 1.75-1.12 5.6 5.6 0 0 1 5.82 1.12c.52.5.92 1.12 1.23 1.87.3.75.45 1.63.45 2.64v3.42h-1.73V9.24c0-.9-.17-1.66-.52-2.27a3.44 3.44 0 0 0-1.36-1.38 3.76 3.76 0 0 0-1.86-.48 3.8 3.8 0 0 0-1.86.48c-.57.3-1.02.77-1.36 1.38a4.51 4.51 0 0 0-.52 2.27v3.64H8.24Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LockIosIcon = d;
}), 98);
