__d("WAWebCollectionsFolderIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "collections-folder";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 40, 40, "0 0 56 56"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("g", {
			fill: "currentColor",
			clipPath: "url(#WAWebCollectionsFolderIcon__a)",
			children: u.jsx("path", { d: "M4.48 16.8c0-2.47 2-4.48 4.48-4.48h35.85a4.49 4.49 0 0 1 4.49 4.49v28a4.49 4.49 0 0 1-4.49 4.49H8.96a4.49 4.49 0 0 1-4.48-4.49v-28Zm4.48-7.84c0-2.47 2-4.48 4.48-4.48h26.9c2.47 0 4.47 2 4.47 4.48H8.96Z" })
		}), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("defs", { children: u.jsx("clipPath", {
			id: "WAWebCollectionsFolderIcon__a",
			children: u.jsx("path", {
				fill: "white",
				d: "M0 0h44.81v44.81H0z",
				transform: "translate(4.48 4.48)"
			})
		}) }), n[13] = y) : y = n[13];
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.CollectionsFolderIcon = d;
}), 98);
