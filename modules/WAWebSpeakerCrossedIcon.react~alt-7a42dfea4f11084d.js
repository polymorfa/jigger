__d("WAWebSpeakerCrossedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "speaker-crossed";
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
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						d: "M8.17 8.44c0-.12.06-.23.17-.29l4.02-2.43c.41-.25.96.03.96.5v9.77c0 .45-.53.74-.94.5l-4.04-2.3a.34.34 0 0 1-.17-.29V8.44ZM2 10.2a2 2 0 0 1 2.06-1.95H6.8c.18 0 .33.15.33.34v5.17c0 .19-.15.34-.33.34h-.6l.94 3.35a.53.53 0 0 1-.38.66l-.99.25c-.3.07-.6-.1-.68-.4l-1.07-3.79A.55.55 0 0 1 4 14.1a2 2 0 0 1-2-1.95V10.2Z",
						clipRule: "evenodd"
					}),
					u.jsx("path", {
						fill: "currentColor",
						stroke: "currentColor",
						strokeWidth: .25,
						d: "m15.91 13.21-.09.1.1.08 1.05 1.06.1.1.08-.1 2.03-2.03 2.03 2.03.1.1.08-.1 1.06-1.06.1-.09-.1-.09-2.03-2.03 2.03-2.03.1-.09-.1-.09-1.06-1.06-.09-.09-.09.1-2.03 2.02-2.03-2.03-.09-.09-.09.1-1.06 1.05-.09.1.1.08 2.02 2.03-2.03 2.03Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.SpeakerCrossedIcon = d;
}), 98);
