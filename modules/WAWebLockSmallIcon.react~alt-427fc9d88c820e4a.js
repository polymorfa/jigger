__d("WAWebLockSmallIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock-small";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 12, 10, "0 0 10 12");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M5 1.6a2.6 2.6 0 0 1 2.6 2.43v1.43h.16c.58 0 1.06.48 1.06 1.07v3.35c0 .6-.48 1.07-1.06 1.07h-5.5c-.58 0-1.06-.48-1.06-1.07V6.53c0-.59.47-1.07 1.06-1.07h.16V4.2a2.6 2.6 0 0 1 2.42-2.58l.17-.01Zm0 1.25c-.69 0-1.26.53-1.33 1.21v1.4h2.68V4.2c0-.65-.47-1.2-1.09-1.32l-.12-.02H5Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LockSmallIcon = d;
}), 98);
