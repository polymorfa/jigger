__d("WAWebIcDocBaseIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "ic-doc-base";
	function m(t) {
		var n, a = o("react-compiler-runtime").c(34), i, l, u, m, p, _, f, g, h, y;
		if (a[0] !== t) {
			var C = t.innerStyles, b = babelHelpers.objectWithoutPropertiesLoose(t, e);
			u = C, l = o("WAWebSvgIconHelpers").resolveSvgIcon(b, d, 26, 22, null), i = o("WAWebSvgComponentBase").BaseSvgSpan, h = l.otherProps, y = l.iconName, m = l.viewBox, p = l.height, _ = l.width, f = "xMidYMid meet", g = (s || (s = r("stylex")))(l.iconXstyle), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = p, a[6] = _, a[7] = f, a[8] = g, a[9] = h, a[10] = y;
		} else i = a[1], l = a[2], u = a[3], m = a[4], p = a[5], _ = a[6], f = a[7], g = a[8], h = a[9], y = a[10];
		var v;
		a[11] !== l.iconName ? (v = c.jsx("title", { children: l.iconName }), a[11] = l.iconName, a[12] = v) : v = a[12];
		var S, R;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsx("path", {
			fill: "currentColor",
			d: "M1 5.8c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31C3.29 1 4.13 1 5.8 1h5.55c.98 0 1.47 0 1.93.11.4.1.8.26 1.15.48.4.25.75.6 1.44 1.28L17 4l2.13 2.13a8.36 8.36 0 0 1 1.28 1.44 4 4 0 0 1 .48 1.15c.11.46.11.95.11 1.93v9.55c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H5.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C1 22.71 1 21.87 1 20.2V5.8Z"
		}), R = c.jsx("path", {
			stroke: "#fff",
			strokeOpacity: .15,
			strokeWidth: .5,
			d: "m21.13 8.66-.24.06.24-.06a4.25 4.25 0 0 0-.5-1.22c-.27-.43-.64-.8-1.3-1.46l-.03-.03-2.12-2.13-1.13-1.12-.03-.03a8.16 8.16 0 0 0-1.46-1.3 4.25 4.25 0 0 0-1.23-.5c-.48-.12-1-.12-1.94-.12h-5.6c-.83 0-1.47 0-1.98.04-.52.04-.92.13-1.28.31A3.25 3.25 0 0 0 1.1 2.52C.92 2.9.83 3.3.79 3.81.75 4.32.75 4.96.75 5.79v14.42c0 .83 0 1.47.04 1.98.04.52.13.92.31 1.29a3.25 3.25 0 0 0 1.42 1.42c.37.18.77.27 1.29.3.5.05 1.15.05 1.98.05H16.2c.83 0 1.47 0 1.98-.04.52-.04.92-.13 1.29-.31a3.25 3.25 0 0 0 1.42-1.42c.18-.37.27-.77.3-1.29.05-.5.05-1.15.05-1.98v-9.6c0-.94 0-1.45-.12-1.94Z"
		}), a[13] = S, a[14] = R) : (S = a[13], R = a[14]);
		var L;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx("g", {
			filter: "url(#WAWebIcDocBaseIcon__a)",
			children: c.jsx("path", {
				fill: "#fff",
				fillOpacity: .4,
				fillRule: "evenodd",
				d: "m20.71 8.1-5.97-.03a1 1 0 0 1-1-1l.03-5.82c.21.09.43.2.63.32.4.24.74.58 1.43 1.26L17 4l2.14 2.13c.7.7 1.06 1.04 1.3 1.45a4 4 0 0 1 .27.51Z",
				clipRule: "evenodd",
				shapeRendering: "crispEdges"
			})
		}), a[15] = L) : L = a[15];
		var E;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx("defs", { children: c.jsxs("filter", {
			id: "WAWebIcDocBaseIcon__a",
			width: 7.97,
			height: 7.84,
			x: 13.24,
			y: 1.25,
			colorInterpolationFilters: "sRGB",
			filterUnits: "userSpaceOnUse",
			children: [
				c.jsx("feFlood", {
					floodOpacity: 0,
					result: "BackgroundImageFix"
				}),
				c.jsx("feColorMatrix", {
					in: "SourceAlpha",
					result: "hardAlpha",
					values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				}),
				c.jsx("feOffset", { dy: .5 }),
				c.jsx("feGaussianBlur", { stdDeviation: .25 }),
				c.jsx("feComposite", {
					in2: "hardAlpha",
					operator: "out"
				}),
				c.jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }),
				c.jsx("feBlend", {
					in2: "BackgroundImageFix",
					result: "effect1_dropShadow_491_191"
				}),
				c.jsx("feBlend", {
					in: "SourceGraphic",
					in2: "effect1_dropShadow_491_191",
					result: "shape"
				})
			]
		}) }), a[16] = E) : E = a[16];
		var k;
		if (a[17] !== ((n = u) == null ? void 0 : n.content)) {
			var I, T;
			k = (s || (s = r("stylex")))((I = u) == null ? void 0 : I.content), a[17] = (T = u) == null ? void 0 : T.content, a[18] = k;
		} else k = a[18];
		var D;
		a[19] !== k ? (D = c.jsx("foreignObject", {
			width: "100%",
			height: "100%",
			x: 0,
			y: 0,
			children: c.jsx("div", { className: k })
		}), a[19] = k, a[20] = D) : D = a[20];
		var x;
		a[21] !== m || a[22] !== p || a[23] !== D || a[24] !== _ || a[25] !== f || a[26] !== g || a[27] !== v ? (x = c.jsxs("svg", {
			viewBox: m,
			height: p,
			width: _,
			preserveAspectRatio: f,
			className: g,
			fill: "none",
			children: [
				v,
				S,
				R,
				L,
				E,
				D
			]
		}), a[21] = m, a[22] = p, a[23] = D, a[24] = _, a[25] = f, a[26] = g, a[27] = v, a[28] = x) : x = a[28];
		var $;
		return a[29] !== i || a[30] !== x || a[31] !== h || a[32] !== y ? ($ = c.jsx(i, babelHelpers.extends({}, h, {
			name: y,
			children: x
		})), a[29] = i, a[30] = x, a[31] = h, a[32] = y, a[33] = $) : $ = a[33], $;
	}
	l.IcDocBaseIcon = m;
}), 98);
