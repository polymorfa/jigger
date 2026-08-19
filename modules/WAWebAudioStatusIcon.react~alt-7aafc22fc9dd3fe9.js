__d("WAWebAudioStatusIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "audio-status";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 19, 19, "0 0 19 19");
		return c.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, i.otherProps, {
			name: i.iconName,
			children: c.jsxs("svg", {
				viewBox: i.viewBox,
				height: i.height,
				width: i.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (s || (s = r("stylex")))(i.iconXstyle),
				fill: "none",
				children: [
					c.jsx("title", { children: i.iconName }),
					c.jsx("path", {
						fill: "#FFFFFF",
						d: "M8.48.46C4.03.76.76 4.63.76 8.96v5.03a3.75 3.75 0 0 0 3.76 3.76h.75c1.65 0 3-1.35 3-3.01v-.01c.5.14 1.02.14 1.52 0v.01a3 3 0 0 0 3 3h.76A3.75 3.75 0 0 0 17.3 14V8.72c0-4.75-4-8.57-8.82-8.26Z",
						className: s(n == null ? void 0 : n.background) + " ptt-status-background"
					}),
					c.jsx("path", {
						fill: "currentColor",
						d: "M8.7 1.9c-3.58.23-6.3 3.38-6.3 6.99v5.03c0 1.25 1 2.26 2.25 2.26h.76c.82 0 1.5-.68 1.5-1.5v-3.01c0-.83-.68-1.5-1.5-1.5H3.89v-1.3A5.4 5.4 0 0 1 9 3.39a5.27 5.27 0 0 1 5.43 5.27v1.5h-1.5a1.5 1.5 0 0 0-1.51 1.5v3.02c0 .82.67 1.5 1.5 1.5h.75c1.25 0 2.26-1 2.26-2.26V8.66c0-3.9-3.28-7.02-7.22-6.76Z",
						className: s(n == null ? void 0 : n.primary) + " ptt-status-icon"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.AudioStatusIcon = m;
}), 98);
