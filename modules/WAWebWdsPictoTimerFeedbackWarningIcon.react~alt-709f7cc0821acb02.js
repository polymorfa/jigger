__d("WAWebWdsPictoTimerFeedbackWarningIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "wds-picto-timer-feedback-warning";
	function m(t) {
		var n = t.innerStyles, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = o("WAWebSvgIconHelpers").resolveSvgIcon(a, d, 88, 176, null);
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
					c.jsx("rect", {
						width: 133.5,
						height: 58.5,
						x: 21.3,
						y: 14.8,
						fill: "#F7F5F3",
						stroke: "#111B21",
						strokeWidth: 1.5,
						className: s(n == null ? void 0 : n.rectContainer),
						rx: 15.3
					}),
					c.jsx("path", {
						fill: "#FFB938",
						stroke: "#111B21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M150.4 84.9a15 15 0 1 1 0-30 15 15 0 0 1 0 30Z"
					}),
					c.jsx("path", {
						fill: "#fff",
						d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2Zm0 14.2h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z"
					}),
					c.jsx("path", {
						stroke: "#111B21",
						strokeLinejoin: "round",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2Zm0 14.2h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z"
					})
				]
			})
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.WdsPictoTimerFeedbackWarningIcon = m;
}), 98);
