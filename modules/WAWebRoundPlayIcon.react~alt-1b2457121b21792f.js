__d("WAWebRoundPlayIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "round-play";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 16, 16, "0 0 16 16");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						d: "M6.47 4.82c-.45-.27-.82-.05-.82.49v5.38c0 .54.37.76.82.49l4.49-2.69c.45-.27.45-.71 0-.98l-4.5-2.69Z"
					}),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-.94 0A7.06 7.06 0 1 1 .94 8a7.06 7.06 0 0 1 14.12 0Z",
						clipRule: "evenodd"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.RoundPlayIcon = d;
}), 98);
