__d("WAWebWdsIcPhotoAiIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-photo-ai";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, null), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M14.79 4a1 1 0 0 0-1-1H5c-.55 0-1.02.2-1.41.59C3.19 3.98 3 4.45 3 5v14c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h14c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41v-8.32a1 1 0 1 0-2 0V19H5V5h8.79a1 1 0 0 0 1-1ZM19.47.64a.58.58 0 0 1 1.06 0l.77 1.78c.06.14.16.24.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.76a.58.58 0 0 0-.3.3l-.79 1.83a.58.58 0 0 1-1.05 0l-.84-1.83a.58.58 0 0 0-.3-.3l-1.73-.76a.58.58 0 0 1 0-1.06l1.8-.77a.58.58 0 0 0 .3-.3l.78-1.78Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M7 16.93h10c.2 0 .35-.1.45-.28a.44.44 0 0 0-.05-.52l-2.75-3.68a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2.6 3.48-1.85-2.48a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2 2.68a.44.44 0 0 0-.05.52c.1.19.25.28.45.28Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
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
	l.WdsIcPhotoAiIcon = d;
}), 98);
