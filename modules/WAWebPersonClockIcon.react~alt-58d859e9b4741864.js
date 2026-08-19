__d("WAWebPersonClockIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "person-clock";
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
					fillRule: "evenodd",
					d: "M7.17 10.82A3.85 3.85 0 0 0 10 12c1.1 0 2.04-.4 2.82-1.18A3.85 3.85 0 0 0 14 8c0-1.1-.4-2.04-1.18-2.83A3.85 3.85 0 0 0 10 4c-1.1 0-2.04.4-2.83 1.17A3.85 3.85 0 0 0 6 8c0 1.1.4 2.04 1.17 2.82ZM2 17.2v.8c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h5.78c.28 0 .52-.1.7-.29.2-.19.3-.43.3-.71 0-.28-.1-.52-.3-.71a.97.97 0 0 0-.7-.29H4v-.8c0-.18.04-.35.13-.5.08-.15.2-.27.37-.35.83-.42 1.69-.74 2.56-.98.88-.23 1.78-.34 2.72-.34a.9.9 0 0 0 .7-.3.9.9 0 0 0 .3-.7 1.01 1.01 0 0 0-1-1.03c-1.09 0-2.15.14-3.18.41-1.03.28-2.03.66-3 1.14-.5.25-.9.62-1.18 1.1-.28.48-.42 1-.42 1.55Zm9.41-7.79c-.39.4-.86.59-1.41.59-.55 0-1.02-.2-1.41-.59C8.19 9.02 8 8.55 8 8c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41Zm2.05 10.13A4.82 4.82 0 0 0 17 21c1.38 0 2.56-.49 3.54-1.46A4.82 4.82 0 0 0 22 16c0-1.38-.49-2.56-1.46-3.54A4.82 4.82 0 0 0 17 11c-1.38 0-2.56.49-3.54 1.46A4.82 4.82 0 0 0 12 16c0 1.38.49 2.56 1.46 3.54ZM19 18c-.2.2-.5.2-.7 0l-1.8-1.8v-2.7a.5.5 0 0 1 1 0v2.3l1.5 1.5c.2.2.2.5 0 .7Z",
					clipRule: "evenodd"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PersonClockIcon = d;
}), 98);
