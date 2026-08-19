__d("WAWebIcSpreadsheetIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-spreadsheet";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 26, 22, "0 0 22 26");
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
						d: "M1 5.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C3.29 1 4.13 1 5.8 1h5.55c.98 0 1.47 0 1.93.11.4.1.8.26 1.15.48.4.25.75.6 1.44 1.28L17 4l2.13 2.13a8.36 8.36 0 0 1 1.28 1.44 4 4 0 0 1 .48 1.15c.11.46.11.95.11 1.93v9.55c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H5.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C1 22.71 1 21.87 1 20.2V5.8Z"
					}),
					u.jsx("path", {
						stroke: "#fff",
						strokeOpacity: .15,
						strokeWidth: .5,
						d: "M11.35.75H12c.57 0 .96.03 1.33.12l.33.09c.31.1.62.24.9.42l.17.1c.37.26.72.62 1.32 1.22l1.13 1.12 2.12 2.13.46.46c.4.41.66.7.86 1.03l.17.29a4 4 0 0 1 .34.93l.04.2c.08.44.08.95.08 1.8v9.54c0 .84 0 1.48-.04 2-.04.44-.1.81-.25 1.14l-.07.14a3.25 3.25 0 0 1-1.19 1.29l-.22.13c-.37.18-.77.27-1.29.3-.51.05-1.15.05-1.99.05H5.8c-.84 0-1.48 0-1.99-.04a3.6 3.6 0 0 1-1.15-.25l-.14-.07a3.25 3.25 0 0 1-1.29-1.19l-.13-.22a3.37 3.37 0 0 1-.3-1.29c-.05-.51-.05-1.15-.05-1.99V5.8c0-.84 0-1.48.04-1.99.04-.52.13-.92.31-1.29l.13-.22a3.25 3.25 0 0 1 1.3-1.2l.13-.06C3 .9 3.36.83 3.81.79 4.32.75 4.96.75 5.8.75h5.55Z"
					}),
					u.jsx("g", {
						filter: "url(#WAWebIcSpreadsheetIcon__a)",
						children: u.jsx("path", {
							fill: "#fff",
							fillOpacity: .4,
							fillRule: "evenodd",
							d: "m20.71 8.1-5.97-.03a1 1 0 0 1-1-1l.03-5.82c.21.09.43.2.63.32.4.24.74.58 1.43 1.26L17 4l2.14 2.13c.7.7 1.06 1.04 1.3 1.45a4 4 0 0 1 .27.51Z",
							clipRule: "evenodd",
							shapeRendering: "crispEdges"
						})
					}),
					u.jsx("mask", {
						id: "WAWebIcSpreadsheetIcon__b",
						fill: "#fff",
						children: u.jsx("rect", {
							width: 11.2,
							height: 8,
							x: 5.4,
							y: 12.5,
							rx: .5
						})
					}),
					u.jsx("rect", {
						width: 11.2,
						height: 8,
						x: 5.4,
						y: 12.5,
						stroke: "#fff",
						strokeLinejoin: "round",
						strokeWidth: 2,
						mask: "url(#WAWebIcSpreadsheetIcon__b)",
						rx: .5
					}),
					u.jsx("path", {
						fill: "#fff",
						d: "M5.4 16h10.4v1H5.4z"
					}),
					u.jsx("path", {
						fill: "#fff",
						d: "M9 13.3h1v6.4H9z"
					}),
					u.jsx("defs", { children: u.jsxs("filter", {
						id: "WAWebIcSpreadsheetIcon__a",
						width: 7.97,
						height: 7.84,
						x: 13.24,
						y: 1.25,
						colorInterpolationFilters: "sRGB",
						filterUnits: "userSpaceOnUse",
						children: [
							u.jsx("feFlood", {
								floodOpacity: 0,
								result: "BackgroundImageFix"
							}),
							u.jsx("feColorMatrix", {
								in: "SourceAlpha",
								result: "hardAlpha",
								values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							}),
							u.jsx("feOffset", { dy: .5 }),
							u.jsx("feGaussianBlur", { stdDeviation: .25 }),
							u.jsx("feComposite", {
								in2: "hardAlpha",
								operator: "out"
							}),
							u.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
							u.jsx("feBlend", {
								in2: "BackgroundImageFix",
								result: "effect1_dropShadow_261_26893"
							}),
							u.jsx("feBlend", {
								in: "SourceGraphic",
								in2: "effect1_dropShadow_261_26893",
								result: "shape"
							})
						]
					}) })
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.IcSpreadsheetIcon = d;
}), 98);
