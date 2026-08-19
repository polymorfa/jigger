__d("WAWebIcShieldLockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-shield-lock";
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
					d: "M10 16h4c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-3c0-.28-.1-.52-.29-.71A.97.97 0 0 0 14 11v-1c0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41v1c-.28 0-.52.1-.71.29A.94.94 0 0 0 9 12v3c0 .28.1.52.29.71.19.2.43.29.71.29Zm1-5v-1c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v1h-2Zm1 10.9a1.98 1.98 0 0 1-.63-.1A10.11 10.11 0 0 1 6 17.64a11.7 11.7 0 0 1-2-6.54V6.38c0-.42.12-.8.36-1.13.24-.33.56-.57.94-.72l6-2.25a2.07 2.07 0 0 1 1.4 0l6 2.25c.38.15.7.39.94.72.24.33.36.7.36 1.13v4.72c0 2.33-.67 4.51-2 6.54a10.11 10.11 0 0 1-5.68 4.23c-.1.02-.2.03-.32.03Zm0-2a8.14 8.14 0 0 0 4.3-3.3 9.5 9.5 0 0 0 1.7-5.5V6.38l-6-2.25-6 2.25v4.72a9.5 9.5 0 0 0 1.7 5.5 8.14 8.14 0 0 0 4.3 3.3Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcShieldLockIcon = d;
}), 98);
