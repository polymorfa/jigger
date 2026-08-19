__d("WAWebMapPlaceholderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "map-placeholder";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 320, 580, "0 0 580 320"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [
				u.jsx("path", {
					fill: "#EAEAEA",
					d: "M0 112h358v208H0z"
				}),
				u.jsx("path", {
					fill: "#FFF1B6",
					fillRule: "nonzero",
					d: "M12.5 541C-148.6 541-281 449.87-281 334s132.4-207 293.5-207S306 218.13 306 334 173.6 541 12.5 541Zm0-32C157.92 509 274 429.1 274 334S157.92 159 12.5 159C-132.92 159-249 238.9-249 334s116.08 175 261.5 175Z"
				}),
				u.jsx("path", {
					fill: "#CBE6A3",
					d: "M0 0h358v80H0z"
				}),
				u.jsx("path", {
					fill: "#8CCEFF",
					d: "M390 0h190v80H390z"
				}),
				u.jsx("path", {
					fill: "#F0E0C9",
					d: "M391 112h190v59H391zm0 91h110v117H391zm143 0h46v117h-46z"
				}),
				u.jsx("path", {
					fill: "#FFF1B6",
					d: "M0 80h580v32H0zm391 91h190v32H391z"
				}),
				u.jsx("path", {
					fill: "#FFF1B6",
					d: "M358 0h33v320h-33zm143 171h33v149h-33z"
				})
			]
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.MapPlaceholderIcon = d;
}), 98);
