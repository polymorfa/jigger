__d("WAWebWebLoginDesktopUpsellIllustrationIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "web-login-desktop-upsell-illustration";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 54, 72, "0 0 72 54");
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
					u.jsxs("g", {
						clipPath: "url(#WAWebWebLoginDesktopUpsellIllustrationIcon__a)",
						children: [
							u.jsx("path", {
								fill: "#fff",
								d: "M0 0h72v54H0z",
								style: { fill: "#fff" }
							}),
							u.jsx("path", {
								fill: "#E6FFDA",
								stroke: "#111B21",
								strokeMiterlimit: 10,
								strokeWidth: 1.5,
								d: "M8.75 15A6.25 6.25 0 0 1 15 8.75h42A6.25 6.25 0 0 1 63.25 15v37.25H8.75z"
							}),
							u.jsx("path", {
								fill: "#E6FFDA",
								stroke: "#111B21",
								strokeMiterlimit: 10,
								strokeWidth: 1.5,
								d: "M71.22 44.75a9.25 9.25 0 0 1-9.22 8.5H10a9.25 9.25 0 0 1-9.22-8.5z"
							}),
							u.jsx("rect", {
								width: 49.5,
								height: 34.5,
								x: 21.75,
								y: .75,
								fill: "#FCF5EB",
								stroke: "#111B21",
								strokeMiterlimit: 10,
								strokeWidth: 1.5,
								rx: 6.25
							}),
							u.jsx("path", {
								fill: "#25D366",
								stroke: "#111B21",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 1.5,
								d: "M43.39 14.96c-.65-1.34 2.33-2.93 2.5-3.65v-.01a.89.89 0 0 0-.05-.48 10.55 10.55 0 0 0-2.25-4.09 2.16 2.16 0 0 0-.92-.68c-.24-.07-.5-.06-.75-.02-2.13.34-3.6 2.37-3.86 4.44-.27 2.08.44 4.17 1.3 6.11 1.83 4.18 4.59 8.24 8.72 10.38 1.48.76 3.18 1.26 4.79.94 1.08-.22 2.18-1 2.13-2.08a3.2 3.2 0 0 0-.58-1.42l-1.85-2.96c-.3-.5-.68-1.03-1.26-1.15-1.22-.24-2.04 1.54-3.27 1.38-.48-.06-4.25-5.8-4.65-6.72"
							})
						]
					}),
					u.jsx("defs", { children: u.jsx("clipPath", {
						id: "WAWebWebLoginDesktopUpsellIllustrationIcon__a",
						children: u.jsx("path", {
							fill: "#fff",
							d: "M0 0h72v54H0z",
							style: { fill: "#fff" }
						})
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WebLoginDesktopUpsellIllustrationIcon = d;
}), 98);
