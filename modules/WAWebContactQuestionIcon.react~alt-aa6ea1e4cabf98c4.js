__d("WAWebContactQuestionIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "contact-question";
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
					d: "M9 20H5c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C3.98 2.19 4.45 2 5 2h14c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v14c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-4l-2.3 2.3a.96.96 0 0 1-1.4 0L9 20Zm-4-2h4.8l2.2 2.2 2.2-2.2H19V4H5v14Zm6.9-1c.35 0 .65-.12.89-.36s.36-.54.36-.89-.12-.65-.36-.89a1.2 1.2 0 0 0-.89-.36c-.35 0-.65.12-.89.36a1.2 1.2 0 0 0-.36.89c0 .35.12.65.36.89s.54.36.89.36Zm1.75-9c0 .28-.1.59-.28.91-.18.33-.49.68-.92 1.06a4.23 4.23 0 0 0-1.13 1.41 3.83 3.83 0 0 0-.24.85c-.04.24.03.46.2.64a.8.8 0 0 0 .65.28.9.9 0 0 0 .62-.25c.18-.17.3-.4.38-.68.04-.23.14-.45.28-.65s.37-.45.69-.77c.58-.58 1-1.08 1.24-1.48.24-.4.36-.84.36-1.32 0-.9-.3-1.63-.91-2.17A3.57 3.57 0 0 0 12.1 5c-.75 0-1.4.16-1.95.47-.55.32-1 .76-1.33 1.33-.11.2-.12.4 0 .63.1.21.27.36.5.45.22.08.44.08.65 0 .22-.09.4-.22.53-.4a1.94 1.94 0 0 1 1.6-.77c.43-.01.8.11 1.1.35.3.24.45.56.45.94Z",
					opacity: .9
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.ContactQuestionIcon = d;
}), 98);
