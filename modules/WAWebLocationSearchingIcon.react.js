__d("WAWebLocationSearchingIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "location-searching";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M11 22v-1q-3.13-.35-5.36-2.59-2.24-2.23-2.59-5.36h-1a.97.97 0 0 1-.71-.29.97.97 0 0 1-.29-.71q0-.42.29-.71a.97.97 0 0 1 .71-.29h1q.35-3.12 2.59-5.36Q7.88 3.45 11 3.1v-1q0-.42.29-.71A.97.97 0 0 1 12 1.1q.42 0 .71.29t.29.71v1q3.12.35 5.36 2.59t2.59 5.36h1q.42 0 .71.29t.29.71q0 .42-.29.71a.97.97 0 0 1-.71.29h-1q-.35 3.12-2.59 5.36Q16.13 20.65 13 21v1q0 .42-.29.71A.97.97 0 0 1 12 23a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 22m1-2.95q2.9 0 4.95-2.05T19 12.05 16.95 7.1 12 5.05q-2.9 0-4.95 2.05T5 12.05 7.05 17 12 19.05"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.LocationSearchingIcon = d;
}), 98);
