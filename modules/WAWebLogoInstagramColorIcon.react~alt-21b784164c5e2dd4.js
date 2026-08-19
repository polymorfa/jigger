__d("WAWebLogoInstagramColorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "logo-instagram-color";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 22, 24, "0 0 24 22");
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
						fill: "url(#WAWebLogoInstagramColorIcon__a)",
						d: "M17.93 0H8.07A6.08 6.08 0 0 0 2 6.07v9.86A6.08 6.08 0 0 0 8.07 22h9.86A6.08 6.08 0 0 0 24 15.93V6.07A6.08 6.08 0 0 0 17.93 0Zm4.12 15.93a4.12 4.12 0 0 1-4.12 4.12H8.07a4.12 4.12 0 0 1-4.12-4.12V6.07a4.12 4.12 0 0 1 4.12-4.12h9.86a4.12 4.12 0 0 1 4.12 4.12v9.86Z"
					}),
					u.jsx("path", {
						fill: "url(#WAWebLogoInstagramColorIcon__b)",
						d: "M13 5.06a5.95 5.95 0 1 0 .01 11.9A5.95 5.95 0 0 0 13 5.05Zm0 9.83a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8Z"
					}),
					u.jsx("path", {
						fill: "url(#WAWebLogoInstagramColorIcon__c)",
						d: "M19.19 3.33a1.5 1.5 0 0 0-1.5 1.5 1.51 1.51 0 0 0 1.5 1.5 1.51 1.51 0 0 0 1.06-2.56 1.5 1.5 0 0 0-1.06-.44Z"
					}),
					u.jsxs("defs", { children: [
						u.jsxs("linearGradient", {
							id: "WAWebLogoInstagramColorIcon__a",
							x1: 24,
							x2: 2,
							y1: 0,
							y2: 22,
							gradientUnits: "userSpaceOnUse",
							children: [
								u.jsx("stop", { stopColor: "#B630A1" }),
								u.jsx("stop", {
									offset: .49,
									stopColor: "#DB2F76"
								}),
								u.jsx("stop", {
									offset: 1,
									stopColor: "#FBB15B"
								})
							]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebLogoInstagramColorIcon__b",
							x1: 22,
							x2: 4,
							y1: 1.5,
							y2: 19.5,
							gradientUnits: "userSpaceOnUse",
							children: [u.jsx("stop", { stopColor: "#DA2E7A" }), u.jsx("stop", {
								offset: 1,
								stopColor: "#F06846"
							})]
						}),
						u.jsxs("linearGradient", {
							id: "WAWebLogoInstagramColorIcon__c",
							x1: 21,
							x2: 17.5,
							y1: 3,
							y2: 6.5,
							gradientUnits: "userSpaceOnUse",
							children: [u.jsx("stop", { stopColor: "#BE3099" }), u.jsx("stop", {
								offset: 1,
								stopColor: "#E1406B"
							})]
						})
					] })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.LogoInstagramColorIcon = d;
}), 98);
