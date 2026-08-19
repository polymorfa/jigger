__d("WAWebTrashActiveIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "trash-active";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M16 7.5h6.25a.75.75 0 0 1 0 1.5H16V7.5Zm0 4.5h5.25a.75.75 0 0 1 0 1.5H16V12Zm0 4.5h3.25a.75.75 0 0 1 0 1.5H16v-1.5Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M11 4.89h2.14c.47 0 .86.4.86.89s-.39.89-.86.89H2.86a.88.88 0 0 1-.86-.9c0-.48.39-.88.86-.88H5l.6-.63A.85.85 0 0 1 6.2 4h3.6c.21 0 .44.1.6.26l.6.63ZM4.57 20c-.94 0-1.71-.8-1.71-1.78V9.33c0-.97.77-1.77 1.71-1.77h6.86c.94 0 1.71.8 1.71 1.77v8.9c0 .97-.77 1.77-1.71 1.77H4.57Z",
			clipRule: "evenodd"
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
	l.TrashActiveIcon = d;
}), 98);
