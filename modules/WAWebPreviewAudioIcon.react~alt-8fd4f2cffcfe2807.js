__d("WAWebPreviewAudioIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "preview-audio";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 112, 88, "0 0 88 112");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("defs", { children: u.jsx("path", {
						id: "WAWebPreviewAudioIcon__a",
						d: "M3 0h56.93a5 5 0 0 1 3.53 1.46l15.08 15.08A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"
					}) }),
					u.jsxs("g", {
						fill: "none",
						fillRule: "evenodd",
						children: [
							u.jsxs("g", {
								transform: "translate(4 3)",
								children: [
									u.jsx("use", {
										xlinkHref: "#WAWebPreviewAudioIcon__a",
										fill: "#000",
										filter: "url(#WAWebPreviewAudioIcon__filter-3)"
									}),
									u.jsx("use", {
										xlinkHref: "#WAWebPreviewAudioIcon__a",
										fill: "#FFF"
									}),
									u.jsx("path", {
										fill: "url(#WAWebPreviewAudioIcon__linearGradient-1)",
										stroke: "#000",
										strokeOpacity: .08,
										d: "M3-.5h56.93a5.5 5.5 0 0 1 3.89 1.61l15.07 15.07a5.5 5.5 0 0 1 1.61 3.9V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z"
									})
								]
							}),
							u.jsx("path", {
								fill: "#000",
								fillOpacity: .2,
								d: "M59 41v26.25a.5.5 0 0 1-.01.11A5 5 0 1 1 54 62.74c.19 0 .4.03.62.07A2 2 0 0 0 57 60.85V49.1a1 1 0 0 0-1.12-.99l-19 2.28a1 1 0 0 0-.88 1v18.85a.5.5 0 0 1-.01.12A5 5 0 1 1 31 65.74c.32 0 .68.07 1.08.18A1.5 1.5 0 0 0 34 64.48V43.52a2 2 0 0 1 1.76-1.99l21-2.52A2 2 0 0 1 59 41z"
							}),
							u.jsx("path", {
								fill: "#FFF",
								stroke: "#000",
								strokeOpacity: .12,
								d: "M65.5 3.5v15a3 3 0 0 0 3 3h15"
							})
						]
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.PreviewAudioIcon = d;
}), 98);
