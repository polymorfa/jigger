__d("WAWebMicOutlinedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mic-outlined";
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
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M12 14a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 9 11V5c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 12 2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12v6c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 12 14Zm0 7a1 1 0 0 1-1-1v-2.07a6.66 6.66 0 0 1-4.3-2.33A6.79 6.79 0 0 1 5.06 12c-.07-.55.39-1 .94-1 .55 0 .99.45 1.09 1a4.8 4.8 0 0 0 1.37 2.54A4.82 4.82 0 0 0 12 16c1.38 0 2.56-.49 3.54-1.46a4.8 4.8 0 0 0 1.37-2.55c.1-.54.54-.99 1.09-.99s1 .45.94 1a6.8 6.8 0 0 1-1.64 3.6 6.66 6.66 0 0 1-4.3 2.33V20a1 1 0 0 1-1 1Zm0-9c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V5c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 4c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 5v6c0 .28.1.52.29.71.19.2.43.29.71.29Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.MicOutlinedIcon = d;
}), 98);
